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
  await HTTPRequestHandlerMiddleware<ADMIN_DTO_API_V1['GET_NOTES']['REQUEST']>(
    req,
    res,
    {
      eventName: 'GET_NOTES',
      allowedHTTPMethod: 'post',
      validationFunction: undefined,
      businessLogic: async (body) => {
        try {

          const output = await DB_CLIENT.use.admin.findMany({
            orderBy: [{
              created_at: 'desc'
            }]
          })

          const maybeFoundById = output.find((el) => el.id === body?.id)

          const versions: ADMIN_DTO_API_V1['GET_NOTES']['RESPONSE']['versions'] = output.map((el) => (
            {
              ...el,
              length: String(el.notes.length)
            }))


          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<ADMIN_DTO_API_V1['GET_NOTES']['RESPONSE']>({
              event: 'NOTES_FETCHED',
              data: {
                notes: maybeFoundById?.notes ?? output[0]?.notes ?? '',
                versions
              }
            }))


        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'GET_NOTES',
            e)

          return void undefined

        }
      }
    })
}

export default handler
