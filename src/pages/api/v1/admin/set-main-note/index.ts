import {getDateNowInString} from '@msalek/utils'
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
  await HTTPRequestHandlerMiddleware<ADMIN_DTO_API_V1['SET_MAIN_NOTE']['REQUEST']>(
    req,
    res,
    {
      eventName: 'SET_MAIN_NOTE',
      allowedHTTPMethod: 'post',
      validationFunction: undefined,
      businessLogic: async (body) => {

        if (!body.id) {
          res.status(getValidatedStatusCode(400))
            .json(getInfoEventWithPayloadDTO<ADMIN_DTO_API_V1['SET_MAIN_NOTE']['RESPONSE']>({
              event: 'GENERAL_ERROR',
              data: undefined
            }))
          return void undefined
        }

        try {
          await DB_CLIENT.use.admin.update({
            data: {
              created_at: getDateNowInString({
                getISOFormat: true,
                withTimestamp: false
              })
            },
            where: {
              id: body.id
            }
          })

          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<ADMIN_DTO_API_V1['SET_MAIN_NOTE']['RESPONSE']>({
              event: 'NOTE_SET',
              data: undefined
            }))


        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'SET_MAIN_NOTE',
            e)

          return void undefined

        }
      }
    })
}

export default handler
