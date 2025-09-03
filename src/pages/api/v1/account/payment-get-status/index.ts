import type {NextApiRequest, NextApiResponse} from 'next'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {ACCOUNT_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/account/account.dto'
import {PaymentStatus} from '../../../../../READONLY-shared-kernel/models/db_models'
import {DB_CLIENT} from "../../../../../application/db/db.utils.api";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<ACCOUNT_DTO_API_V1['GET_STATUS']['REQUEST']>(
    req,
    res,
    {
      eventName: 'ACCOUNT_PAYMENT_GET_STATUS',
      allowedHTTPMethod: 'post',
      validationFunction: undefined,
      businessLogic: async (body, {currentUser}) => {
        try {

          const account = await DB_CLIENT.use.account.findUnique({
            where: {
              created_by_user_id: currentUser.user_id
            }
          })

          if (!account) {
            res.status(getValidatedStatusCode(404))
              .json(getInfoEventWithPayloadDTO({
                event: 'ACCOUNT_NOT_FOUND',
                data: undefined
              }))

            return void undefined
          }

          const responsePayload = account.payment_status as PaymentStatus

          res.status(getValidatedStatusCode(201))
            .json(getInfoEventWithPayloadDTO<ACCOUNT_DTO_API_V1['GET_STATUS']['RESPONSE']>({
              event: 'SUCCESS',
              data: responsePayload
            }))

          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'PAYMENT_MAKE',
            e)

          return void undefined
        }
      }
    })
}

export default handler
