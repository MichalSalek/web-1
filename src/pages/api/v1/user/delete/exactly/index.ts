import type { NextApiRequest, NextApiResponse }               from 'next'
import { reportIssue }                                        from '../../../../../../application/debugger/errorHandler.possibilities.api'
import { pushToEventLog_IO }                                  from '../../../../../../application/event-log/eventLogIO.operations.api'
import { HTTPRequestHandlerMiddleware }                       from '../../../../../../domain/http/http.middleware'
import { getGenericErrorWithDebuggerDTO }                     from '../../../../../../domain/http/http.utils.api'
import { areBothUsersFromTheSameAccount }                     from '../../../../../../domain/user/user.utils.api'
import { deleteUser_IO, getUser_IO }                          from '../../../../../../domain/user/userIO.possibilities.api'
import { getInfoEventWithPayloadDTO, getValidatedStatusCode } from '../../../../../../READONLY-shared-kernel/application/http/http.api'
import { REDIRECTIONS_ON_EVENTS }                             from '../../../../../../READONLY-shared-kernel/domain/routing/routing.config'
import { USER_DTO_API_V1 }                                    from '../../../../../../READONLY-shared-kernel/models/user/user.dto'
import { UserNoSensitiveWithRelations }                       from '../../../../../../READONLY-shared-kernel/models/user/user.types'
import { VALIDATION_POLICY }                                  from '../../../../../../READONLY-shared-kernel/policies/validation.policy'




export const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  await HTTPRequestHandlerMiddleware<USER_DTO_API_V1['DELETE_EXACTLY']['REQUEST']>(
    req,
    res,
    {
      eventName         : 'USER_DELETE_EXACTLY',
      allowedHTTPMethod : 'post',
      validationFunction: VALIDATION_POLICY.validators.deleteOrDisableOtherUser,
      businessLogic     : async (body, {
        currentUser
      }, metadata) => {
        try {

          const userToBeDeleted = await getUser_IO<UserNoSensitiveWithRelations>(
            body,
            true)

          if (!userToBeDeleted) {
            res.status(getValidatedStatusCode(404))
               .json(getInfoEventWithPayloadDTO({
                 event: 'NOT_FOUND',
                 data : undefined
               }))

            return void undefined
          }

          if (!areBothUsersFromTheSameAccount(
            currentUser,
            userToBeDeleted)) {

            res.status(getValidatedStatusCode(401))
               .json(getInfoEventWithPayloadDTO({
                 event      : 'UNAUTHORIZED',
                 data       : undefined
               }))

            return void undefined
          }



          const outputUser = await deleteUser_IO(userToBeDeleted.user_id)

          res.status(getValidatedStatusCode(200))
             .json(getInfoEventWithPayloadDTO({
               event: 'USER_DELETED',
               data : undefined
             }))


          void pushToEventLog_IO({
            eventName   : 'USER_DELETED',
            user        : currentUser,
            requestBody : body,
            responseBody: outputUser,
            metadata
          })

          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
             .json(getGenericErrorWithDebuggerDTO(
               'CANNOT_DELETE_USER',
               e))
          reportIssue(
            'USER_DELETE_EXACTLY',
            e)

          return void undefined
        }
      }
    })

  return void undefined



}
export default handler
