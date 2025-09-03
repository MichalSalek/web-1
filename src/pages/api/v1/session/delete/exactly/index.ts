import type {NextApiRequest, NextApiResponse} from 'next'
import {deleteSession_IO} from '../../../../../../application/auth/session/sessionIO.possibilities.api'
import {reportIssue} from '../../../../../../application/debugger/errorHandler.possibilities.api'
import {pushToEventLog_IO} from '../../../../../../application/event-log/eventLogIO.operations.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../../domain/http/http.utils.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../../READONLY-shared-kernel/application/http/http.api'
import {SESSION_DTO_API_V1} from '../../../../../../READONLY-shared-kernel/models/session/session.dto'
import {VALIDATION_POLICY} from '../../../../../../READONLY-shared-kernel/policies/validation.policy'


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<SESSION_DTO_API_V1['DELETE_EXACTLY']['REQUEST']>(
    req,
    res,
    {
      eventName: 'SESSION_DELETE_EXACTLY',
      allowedHTTPMethod: 'post',
      validationFunction: VALIDATION_POLICY.validators.deleteSession,
      businessLogic: async (body, {currentUser}, metadata) => {
        try {

          const output = await deleteSession_IO(
            body.session_id,
            currentUser.user_id)

          await deleteSession_IO(
            body.session_id,
            currentUser.user_id)

          void pushToEventLog_IO({
            eventName: 'SESSION_DELETED',
            user: currentUser,
            requestBody: body,
            responseBody: output,
            metadata
          })
          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<SESSION_DTO_API_V1['DELETE_EXACTLY']['RESPONSE']>({
              event: 'SESSION_DELETED',
              data: undefined
            }))


          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'CANNOT_DELETE_SESSION',
              e))
          reportIssue(
            'SESSION_DELETE_EXACTLY',
            e)

          return void undefined
        }
      }
    })

}
export default handler
