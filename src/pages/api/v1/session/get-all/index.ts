import type {NextApiRequest, NextApiResponse} from 'next'
import {getAllSessionsByUser_IO} from '../../../../../application/auth/session/sessionIO.possibilities.api'
import {
  checkAllSessionsAndDeactivateIfNeeded
} from '../../../../../application/auth/session/sessionsGarbageCollector.api'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {SESSION_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/session/session.dto'


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<SESSION_DTO_API_V1['GET_ALL']['REQUEST']>(
    req,
    res,
    {
      eventName: 'SESSION_GET_ALL',
      allowedHTTPMethod: 'get',
      validationFunction: undefined,
      businessLogic: async (body, {currentUser}) => {
        try {

          await checkAllSessionsAndDeactivateIfNeeded()

          const data = await getAllSessionsByUser_IO(currentUser.user_id)

          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<SESSION_DTO_API_V1['GET_ALL']['RESPONSE']>({
              event: 'SUCCESS',
              data
            }))


          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'SESSION_GET_ALL',
            e)

          return void undefined
        }
      }
    })

}
export default handler
