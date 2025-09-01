import type {NextApiRequest, NextApiResponse} from 'next'
import {deleteAllSessions_IO} from '../../../../../../application/auth/session/sessionIO.possibilities.api'
import {reportIssue} from '../../../../../../application/debugger/errorHandler.possibilities.api'
import {pushToEventLog_IO} from '../../../../../../application/event-log/eventLogIO.operations.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../../domain/http/http.utils.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../../READONLY-shared-kernel/application/http/http.api'
import {SESSION_DTO_API_V1} from '../../../../../../READONLY-shared-kernel/models/session/session.dto'
import {RoleValue} from "../../../../../../READONLY-shared-kernel/models/db_models";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<SESSION_DTO_API_V1['DELETE_ALL']['REQUEST']>(
    req,
    res,
    {
      eventName: 'SESSION_DELETE_ALL',
      allowedHTTPMethod: 'post',
      validationFunction: undefined,
      businessLogic: async (body, {currentUser}, metadata) => {
        try {

          let userIDToDeleteAllSessions = currentUser.user_id

          if (currentUser.role === RoleValue.MASTER_ADMIN && body?.user_id) {
            userIDToDeleteAllSessions = body.user_id
          }


          await deleteAllSessions_IO({
            req,
            res,
            payload: userIDToDeleteAllSessions
          })

          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<SESSION_DTO_API_V1['DELETE_ALL']['RESPONSE']>({
              event: 'ALL_SESSIONS_DELETED',
              data: undefined
            }))


          void pushToEventLog_IO({
            eventName: 'ALL_SESSIONS_DELETED',
            user: currentUser,
            requestBody: body,
            metadata
          })

          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'CANNOT_DELETE_SESSIONS',
              e))
          reportIssue(
            'SESSION_DELETE_ALL',
            e)

          return void undefined
        }
      }
    })

}
export default handler
