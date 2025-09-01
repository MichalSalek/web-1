import {NextApiRequest, NextApiResponse} from 'next'
import {
  __debuggerGate,
  __debuggerGateDBLeaks,
  __debuggerTemporaryLogs
} from '../../application/debugger/debugger.utils.api'
import {reportIssue} from '../../application/debugger/errorHandler.possibilities.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../READONLY-shared-kernel/application/http/http.api'
import {InfoEventWithPayloadDTO} from '../../READONLY-shared-kernel/application/http/http.types'
import {EVENT_COMMANDS_AND_QUERIES_TYPE} from '../../READONLY-shared-kernel/domain/commands-and-queries/cqrs.types'
import {HTTPMethod} from '../../READONLY-shared-kernel/domain/http/http.config'
import {UserMetadata} from '../../READONLY-shared-kernel/models/user/user.types'
import {EVENTS_POLICY} from '../../READONLY-shared-kernel/policies/events.policy'
import {PERMISSIONS_POLICY} from '../../READONLY-shared-kernel/policies/permissions.policy'
import {
  getErrorDTOWithoutValidationFlag,
  ValidationFunction
} from '../../READONLY-shared-kernel/policies/validation.policy'
import {currentUserEntityInterceptor} from '../user/user.interceptor'
import {
  getCurrentUser_IO,
  GetCurrentUserOutput,
  GetCurrentUserOutputOptimistic,
  getCurrentUserUndefinedReturnObject
} from '../user/userIO.operations.api'
import {getGenericErrorWithDebuggerDTO, getKnownRequestHeaders} from './http.utils.api'
import {isAllowedOrigin, setCORSHeaders} from "../../application/cors/controlCORS.operations.api";
import {DB_CLIENT} from "../../application/db/db.utils.api";
import {isUserShouldBeOnThisRoutePermissionsInterceptor} from "../permissions/routingPermissions.interceptor";


type HTTPRequestHandlerMiddlewareConfig<T> = {

  // Allowed methods for this API call.
  allowedHTTPMethod: HTTPMethod,

  // CQRS event name for identification.
  eventName: EVENT_COMMANDS_AND_QUERIES_TYPE,

  // Request body validation.
  validationFunction?: ValidationFunction,

  // Disable generic permission get-current.
  // Makes `undefined` @currentUser param in businessLogic prop.
  AUTHENTICATION_CHECK_ENABLED?: boolean

  // Main logic fire place.
  businessLogic: (reqBody: T, currentUserOutput: GetCurrentUserOutputOptimistic, userMetadata: UserMetadata) => Promise<void>
}

//@T Request body
export const HTTPRequestHandlerMiddleware = async <T = unknown>(
  req: NextApiRequest,
  res: NextApiResponse,
  config: HTTPRequestHandlerMiddlewareConfig<T>): Promise<void> => {
  const {
    allowedHTTPMethod,
    eventName,
    validationFunction = config.validationFunction ?? (
      () => (
        {__isValid: true})),
    businessLogic,
    AUTHENTICATION_CHECK_ENABLED = true
  } = config


  /*

    TABLE OF CONTENTS:

    1. CORS VALIDATE
    2. HTTP METHOD VALIDATE
    3. GET REQUEST BODY
    4. PAYLOAD VALIDATION
    5. PERMISSION VALIDATE
    6. INTERCEPTORS
    7. GET REQUEST HEADERS
    8. BUSINESS LOGIC FIRE

  */


  // 1. CORS VALIDATE
  //
  if (!isAllowedOrigin({req, res})) {
    res.status(406).end()
    return void undefined
  }
  setCORSHeaders({req, res})
  if (req.method === 'OPTIONS') {
    // Early return for Preflight request
    res.status(200).end()
    return void undefined
  }


  // debugger
  __debuggerGate(() => console.log(
    'HTTPRequestHandlerMiddleware',
    `eventName: ${eventName}`,
    `sessionAndPermissionEventCheck: ${AUTHENTICATION_CHECK_ENABLED}`))


  // 2. HTTP METHOD VALIDATE
  //
  if (req.method?.toUpperCase() !== allowedHTTPMethod.toUpperCase()) {
    res.status(getValidatedStatusCode(405))
      .send(null)
    return void undefined
  }


  // 3. GET REQUEST BODY
  //
  const {body} = req


  // 4. PAYLOAD VALIDATE
  //
  const validationResult = validationFunction(body)
  if (!validationResult.__isValid) {
    res.status(getValidatedStatusCode(406))
      .send(getInfoEventWithPayloadDTO({
        event: 'VALIDATION_FAILED',
        data: getErrorDTOWithoutValidationFlag(validationResult)
      }))
    return void undefined
  }


  try {

    // 5. PERMISSION VALIDATE
    //
    let currentUserOutput: GetCurrentUserOutput = getCurrentUserUndefinedReturnObject
    if (AUTHENTICATION_CHECK_ENABLED) {
      // Authentication:
      //
      currentUserOutput = await getCurrentUser_IO({
        req,
        res
      })
      // Authorization:
      //
      if (!PERMISSIONS_POLICY.utils.GET_PERMISSION_APPROVAL_FOR_EVENT(
        currentUserOutput.user,
        eventName)) {
        res.status(getValidatedStatusCode(401))
          .json(getInfoEventWithPayloadDTO({
            event: currentUserOutput.user ? 'UNAUTHORIZED' : 'LOGIN_FIRST',
            data: undefined
          }))
        return void undefined
      }
    }


    // 6. INTERCEPTORS
    //
    // ( current user )
    if (currentUserOutput) {
      await currentUserEntityInterceptor(currentUserOutput.currentUser)
    }
    //
    // ( routes permission )
    if (!isUserShouldBeOnThisRoutePermissionsInterceptor({req, res, payload: currentUserOutput.currentUser})) {
      return void undefined
    }


    // 7. GET REQUEST HEADERS
    //
    const {userMetadata} = getKnownRequestHeaders(req)


    // debugger
    __debuggerGate(() => console.log(
      'HTTPRequestHandlerMiddleware',
      `Firing business logic...`))


    // 8. BUSINESS LOGIC FIRE
    //
    await businessLogic(
      body,
      currentUserOutput as GetCurrentUserOutputOptimistic,
      userMetadata)


    // debugger
    __debuggerGateDBLeaks(async () => {
      __debuggerTemporaryLogs(
        async () => {
          const metrics = await DB_CLIENT.use.$metrics.json()
          console.dir(metrics.counters)
          console.log(' ')
          console.dir(metrics.gauges)
        },
        'DB LEAKS DEBUG')
    })


  } catch (error) {
    const maybeError = error as InfoEventWithPayloadDTO
    if (EVENTS_POLICY.utils.IS_INFO_EVENT(maybeError.event)) {
      res.status(getValidatedStatusCode(401))
        .json(getGenericErrorWithDebuggerDTO(
          maybeError.event,
          error))
      return void undefined
    }

    reportIssue(
      `HTTPRequestHandlerMiddleware [${eventName}]`,
      error)
    res.status(getValidatedStatusCode(500))
      .json(getGenericErrorWithDebuggerDTO(
        'GENERAL_ERROR',
        undefined))
  }
}
