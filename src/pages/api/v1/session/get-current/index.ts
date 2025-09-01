import type {NextApiRequest, NextApiResponse} from 'next'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {SESSION_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/session/session.dto'


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<SESSION_DTO_API_V1['GET_CURRENT']['REQUEST']>(
    req,
    res,
    {
      eventName: 'SESSION_GET_CURRENT',
      allowedHTTPMethod: 'get',
      validationFunction: undefined,
      businessLogic: async (
        body,
        {currentUser}) => {
        try {

          // USER EXISTS (is logged in):
          //
          if (currentUser) {

            // 1. Usual way:
            //
            res.status(getValidatedStatusCode(200))
              .json(getInfoEventWithPayloadDTO<SESSION_DTO_API_V1['GET_CURRENT']['RESPONSE']>({
                event: 'SUCCESS',
                data: currentUser
              }))
            return void undefined
          }
          // USER NOT EXISTS (is logged out):
          //
          if (!currentUser) {

            // 2. On static pages it is OK to send a undefined - currentUser is not needed there:
            //
            res.status(getValidatedStatusCode(200))
              .json(getInfoEventWithPayloadDTO<SESSION_DTO_API_V1['GET_CURRENT']['RESPONSE']>({
                event: 'SUCCESS',
                data: undefined
              }))

            return void undefined
          }

        } catch (error) {

          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              error))

          reportIssue(
            'SESSION_GET_CURRENT',
            error)
        }


        return void undefined
      }
    })
}

export default handler
