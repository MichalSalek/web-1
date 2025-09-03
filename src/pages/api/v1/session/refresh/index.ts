import type {NextApiRequest, NextApiResponse} from 'next'
import {getAndRefreshCurrentSessionAndToken_IO} from '../../../../../application/auth/session/sessionIO.operations.api'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {logoutUser_IO} from '../../../../../domain/user/userIO.operations.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {SESSION_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/session/session.dto'


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<SESSION_DTO_API_V1['REFRESH']['REQUEST']>(
    req,
    res,
    {
      eventName: 'SESSION_REFRESH',
      allowedHTTPMethod: 'get',
      validationFunction: undefined,
      businessLogic: async (body, {sessionAndToken}) => {
        try {

          if (sessionAndToken) {
            const sessionAndTokenAfterRefresh = await getAndRefreshCurrentSessionAndToken_IO(
              {
                req,
                res
              },
              true)

            if (sessionAndTokenAfterRefresh) {
              res.status(getValidatedStatusCode(200))
                .json(getInfoEventWithPayloadDTO<SESSION_DTO_API_V1['REFRESH']['RESPONSE']>({
                  event: 'SESSION_REFRESHED',
                  data: sessionAndTokenAfterRefresh.session
                }))
              return void undefined
            }
          }

          res.status(getValidatedStatusCode(500))
            .json(getInfoEventWithPayloadDTO({
              event: 'GENERAL_ERROR',
              data: undefined
            }))
          return void undefined


        } catch (e) {
          await logoutUser_IO({
            req,
            res
          })
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'SESSION_REFRESH',
            e)

          return void undefined
        }
      }
    })

}
export default handler
