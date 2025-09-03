import type {NextApiRequest, NextApiResponse} from 'next'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {ADMIN_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/admin/admin.dto'
import {DB_CLIENT} from "../../../../../application/db/db.utils.api";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<ADMIN_DTO_API_V1['SAVE_NOTE']['REQUEST']>(
    req,
    res,
    {
      eventName: 'SAVE_NOTE',
      allowedHTTPMethod: 'post',
      validationFunction: undefined,
      businessLogic: async (body) => {

        if (!body.notes) {
          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<ADMIN_DTO_API_V1['SAVE_NOTE']['RESPONSE']>({
              event: 'SUCCESS',
              data: undefined
            }))
          return void undefined
        }

        try {
          await DB_CLIENT.use.admin.create({
            data: {
              notes: body.notes
            }
          })

          res.status(getValidatedStatusCode(201))
            .json(getInfoEventWithPayloadDTO<ADMIN_DTO_API_V1['SAVE_NOTE']['RESPONSE']>({
              event: 'SUCCESS',
              data: undefined
            }))


        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'SAVE_NOTE',
            e)

          return void undefined

        }
      }
    })
}

export default handler
