import type {NextApiRequest, NextApiResponse} from 'next'
import {isEmailAddressProhibited} from '../../../../../application/admin/admin.utils.api'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {pushToEventLog_IO} from '../../../../../application/event-log/eventLogIO.operations.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {makeCurrentUser} from '../../../../../domain/user/user.utils.api'
import {loginUser_IO} from '../../../../../domain/user/userIO.operations.api'
import {registerUser_IO} from '../../../../../domain/user/userIO.possibilities.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {USER_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/user/user.dto'
import {VALIDATION_POLICY} from '../../../../../READONLY-shared-kernel/policies/validation.policy'


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<USER_DTO_API_V1['REGISTER']['REQUEST']>(
    req,
    res,
    {
      eventName: 'USER_REGISTER',
      allowedHTTPMethod: 'post',
      validationFunction: VALIDATION_POLICY.validators.userRegister,
      AUTHENTICATION_CHECK_ENABLED: false,
      businessLogic: async (body, outputUser, metadata) => {
        try {

          if (isEmailAddressProhibited(body.email)) {
            res.status(getValidatedStatusCode(406))
              .json(getInfoEventWithPayloadDTO<USER_DTO_API_V1['REGISTER']['RESPONSE_ERROR']>({
                event: 'USER_ALREADY_EXISTS',
                data: {
                  __general: 'Taki użytkownik już istnieje.',
                  email: 'Adres email jest zajęty. Wybierz inny lub skontaktuj się z nami.',
                  password: ''
                }
              }))
            void pushToEventLog_IO({
              eventName: 'MASTER_ADMIN_EMAIL_REGISTER_ATTEMPT',
              user: body,
              requestBody: body,
              metadata
            })
            return void undefined
          }

          const userNoSensitive = await registerUser_IO(body)

          if (!userNoSensitive) {
            res.status(getValidatedStatusCode(503))
              .json(getInfoEventWithPayloadDTO({
                event: 'CANNOT_REGISTER_USER',
                data: undefined
              }))
            void pushToEventLog_IO({
              eventName: 'CANNOT_REGISTER_USER',
              user: body,
              requestBody: body,
              metadata
            })
            return void undefined
          }


          const sessionAndToken = await loginUser_IO({
            payload: {
              user_id: userNoSensitive.user_id, ...metadata
            },
            req,
            res
          })


          const currentUser = makeCurrentUser(
            userNoSensitive,
            sessionAndToken)
          res.status(getValidatedStatusCode(201))
            .json(getInfoEventWithPayloadDTO<USER_DTO_API_V1['REGISTER']['RESPONSE']>({
              event: 'USER_REGISTERED',
              data: currentUser
            }))


          void pushToEventLog_IO({
            eventName: 'USER_REGISTERED',
            user: userNoSensitive,
            requestBody: body,
            metadata
          })

          void pushToEventLog_IO({
            eventName: 'ACCOUNT_CREATED',
            user: userNoSensitive,
            requestBody: body,
            responseBody: userNoSensitive,
            metadata
          })

          return void undefined
        } catch (e) {
          if ((
            e as {
              code?: string
            })?.code === 'P2002') {
            res.status(getValidatedStatusCode(406))
              .json(getInfoEventWithPayloadDTO<USER_DTO_API_V1['REGISTER']['RESPONSE_ERROR']>({
                event: 'USER_ALREADY_EXISTS',
                data: {
                  __general: 'Taki użytkownik już istnieje.',
                  email: 'Adres email jest zajęty. Wybierz inny lub skontaktuj się z nami.',
                  password: ''
                }
              }))
            return void undefined
          }
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'CANNOT_REGISTER_USER',
              e))
          reportIssue(
            'USER_REGISTER',
            e)

          return void undefined
        }
      }
    })
}

export default handler
