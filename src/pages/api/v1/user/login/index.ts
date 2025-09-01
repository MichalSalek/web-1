import type { NextApiRequest, NextApiResponse }               from 'next'
import { getAndRefreshCurrentSessionAndToken_IO }             from '../../../../../application/auth/session/sessionIO.operations.api'
import { __debuggerGate }                                     from '../../../../../application/debugger/debugger.utils.api'
import { reportIssue }                                        from '../../../../../application/debugger/errorHandler.possibilities.api'
import { pushToEventLog_IO }                                  from '../../../../../application/event-log/eventLogIO.operations.api'
import { HTTPRequestHandlerMiddleware }                       from '../../../../../domain/http/http.middleware'
import { getGenericErrorWithDebuggerDTO }                     from '../../../../../domain/http/http.utils.api'
import { makeCurrentUser }                                    from '../../../../../domain/user/user.utils.api'
import { enableUser_IO, loginUser_IO }                        from '../../../../../domain/user/userIO.operations.api'
import { getUser_IO }                                         from '../../../../../domain/user/userIO.possibilities.api'
import { getInfoEventWithPayloadDTO, getValidatedStatusCode } from '../../../../../READONLY-shared-kernel/application/http/http.api'
import { REDIRECTIONS_ON_EVENTS }                             from '../../../../../READONLY-shared-kernel/domain/routing/routing.config'
import { USER_DTO_API_V1 }                                    from '../../../../../READONLY-shared-kernel/models/user/user.dto'
import { UserNoSensitiveWithRelations }                       from '../../../../../READONLY-shared-kernel/models/user/user.types'
import { USER_POLICY }                                        from '../../../../../READONLY-shared-kernel/policies/user.policy'
import { VALIDATION_POLICY }                                  from '../../../../../READONLY-shared-kernel/policies/validation.policy'




export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<USER_DTO_API_V1['LOGIN']['REQUEST']>(
    req,
    res,
    {
      eventName                   : 'USER_LOGIN',
      AUTHENTICATION_CHECK_ENABLED: false,
      allowedHTTPMethod           : 'post',
      validationFunction          : VALIDATION_POLICY.validators.userLogin,
      businessLogic               : async (body, userOutput, metadata) => {

        try {
          const user = await getUser_IO<UserNoSensitiveWithRelations>(
            body,
            true,
            true)
          __debuggerGate(() => console.log(
            'USER_LOGIN: getUser ',
            !!user))

          if (!user) {
            res.status(getValidatedStatusCode(404))
               .json(getInfoEventWithPayloadDTO({
                 event: 'USER_NOT_FOUND',
                 data : undefined
               }))
            void pushToEventLog_IO({
              eventName  : 'CANNOT_LOGIN',
              user       : body,
              requestBody: body,
              metadata
            })
            return void undefined
          }

          // SESSION ALREADY EXISTS HANDLING
          //
          const existingSessionAndToken = await getAndRefreshCurrentSessionAndToken_IO({
            req,
            res
          })
          if (existingSessionAndToken) {
            res.status(getValidatedStatusCode(200))
              .json(getInfoEventWithPayloadDTO<USER_DTO_API_V1['LOGIN']['RESPONSE']>({
                event      : 'ALREADY_LOGGED',
                data       : makeCurrentUser(
                  user,
                  existingSessionAndToken)
              }))
            return void undefined
          }
          //

          const sessionAndToken = await loginUser_IO({
            payload: {
              user_id: user.user_id, ...metadata
            },
            req,
            res
          })
          __debuggerGate(() => console.log(
            'USER_LOGIN',
            `sessionAndToken: `,
            sessionAndToken))


          // ENABLING DISABLED USER HANDLING
          //
          if (!USER_POLICY.utils.IS_USER_ACTIVE(user)) {

            const enabledUser = await enableUser_IO(user)

            if (!enabledUser) {
              res.status(getValidatedStatusCode(503))
                 .json(getInfoEventWithPayloadDTO({
                   event: 'GENERAL_ERROR',
                   data : undefined
                 }))
              void pushToEventLog_IO({
                eventName  : 'CANNOT_ENABLE_USER',
                user       : body,
                requestBody: body,
                metadata
              })
              return void undefined
            }

            void pushToEventLog_IO({
              eventName   : 'USER_ENABLED_SELF',
              user        : user,
              requestBody : body,
              responseBody: enabledUser,
              metadata
            })
            res.status(getValidatedStatusCode(201))
               .json(getInfoEventWithPayloadDTO<USER_DTO_API_V1['LOGIN']['RESPONSE']>({
                 event: 'USER_ENABLED_SELF',
                 data : makeCurrentUser(
                   enabledUser,
                   sessionAndToken)
               }))

            return void undefined
          }


          void pushToEventLog_IO({
            eventName  : 'USER_LOGGED_IN',
            user       : user,
            requestBody: body,
            metadata
          })
          res.status(getValidatedStatusCode(200))
             .json(getInfoEventWithPayloadDTO<USER_DTO_API_V1['LOGIN']['RESPONSE']>({
               event: 'USER_LOGGED_IN',
               data : makeCurrentUser(
                 user,
                 sessionAndToken)
             }))


          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
             .json(getGenericErrorWithDebuggerDTO(
               'CANNOT_LOGIN',
               e))
          reportIssue(
            'USER_LOGIN',
            e)

          return void undefined
        }
      }
    })
}

export default handler
