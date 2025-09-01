import type { NextApiRequest, NextApiResponse }               from 'next'
import { reportIssue }                                        from '../../../../../../../application/debugger/errorHandler.possibilities.api'
import { pushToEventLog_IO }                                  from '../../../../../../../application/event-log/eventLogIO.operations.api'
import { HTTPRequestHandlerMiddleware }                       from '../../../../../../../domain/http/http.middleware'
import { getGenericErrorWithDebuggerDTO }                     from '../../../../../../../domain/http/http.utils.api'
import { deleteUser_IO, getUser_IO }                          from '../../../../../../../domain/user/userIO.possibilities.api'
import { getInfoEventWithPayloadDTO, getValidatedStatusCode } from '../../../../../../../READONLY-shared-kernel/application/http/http.api'
import { ADMIN_DTO_API_V1 }                                   from '../../../../../../../READONLY-shared-kernel/models/admin/admin.dto'
import { UserNoSensitiveWithRelations }                       from '../../../../../../../READONLY-shared-kernel/models/user/user.types'
import { VALIDATION_POLICY }                                  from '../../../../../../../READONLY-shared-kernel/policies/validation.policy'




export const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  await HTTPRequestHandlerMiddleware<ADMIN_DTO_API_V1['DELETE_ANY']['REQUEST']>(
    req,
    res,
    {
      eventName         : 'USER_DELETE_ANY',
      allowedHTTPMethod : 'post',
      validationFunction: VALIDATION_POLICY.validators.deleteOrDisableOtherUser,
      businessLogic     : async (body, {
        currentUser
      }, metadata) => {
        try {

          const userToBeDeleted = await getUser_IO<UserNoSensitiveWithRelations>(body)

          if (!userToBeDeleted) {
            res.status(getValidatedStatusCode(404))
               .json(getInfoEventWithPayloadDTO({
                 event: 'NOT_FOUND',
                 data : undefined
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
            'USER_DELETE_ANY',
            e)

          return void undefined
        }
      }
    })

  return void undefined


}

export default handler
