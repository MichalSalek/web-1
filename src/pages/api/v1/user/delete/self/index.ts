import type {NextApiRequest, NextApiResponse} from 'next'
import {reportIssue} from '../../../../../../application/debugger/errorHandler.possibilities.api'
import {pushToEventLog_IO} from '../../../../../../application/event-log/eventLogIO.operations.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../../domain/http/http.utils.api'
import {equalPasswords} from '../../../../../../domain/user/user.utils.api'
import {logoutUserAndDeleteSession_IO} from '../../../../../../domain/user/userIO.operations.api'
import {deleteUser_IO} from '../../../../../../domain/user/userIO.possibilities.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../../READONLY-shared-kernel/application/http/http.api'
import {USER_DTO_API_V1} from '../../../../../../READONLY-shared-kernel/models/user/user.dto'
import {VALIDATION_POLICY} from '../../../../../../READONLY-shared-kernel/policies/validation.policy'


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  await HTTPRequestHandlerMiddleware<USER_DTO_API_V1['DELETE_SELF']['REQUEST']>(
    req,
    res,
    {
      eventName: 'USER_DELETE_SELF',
      allowedHTTPMethod: 'post',
      validationFunction: VALIDATION_POLICY.validators.deleteOrDisableSelfUser,
      businessLogic: async (body, {
        currentUser,
        user
      }, metadata) => {

        if (!user || !equalPasswords(
          body.password,
          user.password)) {
          res.status(getValidatedStatusCode(406))
            .json(getInfoEventWithPayloadDTO<USER_DTO_API_V1['DELETE_SELF']['RESPONSE_ERROR']>({
              event: 'CANNOT_DELETE_USER',
              data: {
                __general: 'Popraw błędy i spróbuj ponownie.',
                password: 'Niepoprawne hasło.'
              }
            }))
          return void undefined
        }


        try {
          const outputUser = await deleteUser_IO(currentUser.user_id)
          await logoutUserAndDeleteSession_IO({
            req,
            res,
            payload: {
              user_id: currentUser.user_id,
              session_id: currentUser.session.session_id
            }
          })

          res.status(getValidatedStatusCode(201))
            .json(getInfoEventWithPayloadDTO({
              event: 'USER_DELETED_SELF',
              data: undefined
            }))


          void pushToEventLog_IO({
            eventName: 'USER_DELETED_SELF',
            user: currentUser,
            requestBody: body,
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
            'USER_DELETE_SELF',
            e)

          return void undefined
        }
      }
    })
  return void undefined

}


export default handler
