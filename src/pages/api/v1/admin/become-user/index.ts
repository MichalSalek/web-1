import {NextApiRequest, NextApiResponse} from 'next'
import {SWITCH_BACK_TOKEN_NAME} from '../../../../../application/admin/becomeUser.config'
import {makeTokenPayloadFromDecodedToken} from '../../../../../application/auth/auth.utils.api'
import {generateSessionTokenAndSet} from '../../../../../application/auth/jwt/jwt.operations.api'
import {deleteSessionToken} from '../../../../../application/auth/jwt/jwt.possibilities.api'
import {generateSessionAndSetToken_IO} from '../../../../../application/auth/session/sessionIO.operations.api'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {pushToEventLog_IO} from '../../../../../application/event-log/eventLogIO.operations.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {makeCurrentUser} from '../../../../../domain/user/user.utils.api'
import {getUser_IO} from '../../../../../domain/user/userIO.possibilities.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {ADMIN_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/admin/admin.dto'
import {SessionModeValue} from '../../../../../READONLY-shared-kernel/models/db_models'
import {UserNoSensitiveWithRelations} from '../../../../../READONLY-shared-kernel/models/user/user.types'


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<ADMIN_DTO_API_V1['BECOME_USER']['REQUEST']>(
    req,
    res,
    {
      eventName: 'BECOME_USER',
      allowedHTTPMethod: 'post',
      validationFunction: undefined,
      businessLogic: async (body, {
        currentUser,
        sessionAndToken
      }, metadata) => {

        try {

          // Get user that become.
          //
          const userToBecome = await getUser_IO<UserNoSensitiveWithRelations>(
            body,
            true)
          if (!userToBecome) {
            res.status(getValidatedStatusCode(404))
              .json(getInfoEventWithPayloadDTO({
                event: 'NOT_FOUND',
                data: undefined
              }))
            return void undefined
          }


          const decodedToken = sessionAndToken.token.decodedToken
          if (!decodedToken) {
            reportIssue(
              'BECOME_USER - no decodedToken.',
              sessionAndToken)
            res.status(getValidatedStatusCode(500))
              .json(getInfoEventWithPayloadDTO({
                event: 'NOT_FOUND',
                data: undefined
              }))
            return void undefined
          }


          // Generate a current session backup for a switch back action and set.
          //
          generateSessionTokenAndSet(
            {
              req,
              res,
              payload: makeTokenPayloadFromDecodedToken(decodedToken)
            },
            SWITCH_BACK_TOKEN_NAME)


          // Delete current session (we have backup under another key).
          //
          await deleteSessionToken({
            req,
            res
          })


          // Create a new session.
          //
          const newSessionAndToken = await generateSessionAndSetToken_IO(
            {
              req,
              res,
              payload: {user_id: userToBecome.user_id, ...metadata}
            },
            SessionModeValue.BECOME_USER)


          // Make a current user for response.
          //
          const currentUserToBecome = makeCurrentUser(
            userToBecome,
            newSessionAndToken)


          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<ADMIN_DTO_API_V1['BECOME_USER']['RESPONSE']>({
              event: 'USER_BECAME_SOMEONE_ELSE',
              data: currentUserToBecome
            }))

          void pushToEventLog_IO({
            eventName: 'USER_BECAME_SOMEONE_ELSE',
            user: currentUser,
            requestBody: body,
            metadata
          })

          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'BECOME_USER',
            e)

          return void undefined
        }
      }
    })
}

export default handler


