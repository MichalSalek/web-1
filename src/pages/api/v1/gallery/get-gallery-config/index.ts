import type {NextApiRequest, NextApiResponse} from 'next'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {GALLERY_DTO_API_V1} from "../../../../../READONLY-shared-kernel/models/gallery/gallery.dto";
import {getGalleryConfig_IO} from "../../../../../domain/gallery/galleryIO.possibilities.api";
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from "../../../../../READONLY-shared-kernel/application/http/http.api";
import {getGenericErrorWithDebuggerDTO} from "../../../../../domain/http/http.utils.api";
import {reportIssue} from "../../../../../application/debugger/errorHandler.possibilities.api";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<GALLERY_DTO_API_V1['GET_GALLERY_CONFIG']['REQUEST']>(
    req,
    res,
    {
      eventName: 'GET_GALLERY_CONFIG',
      allowedHTTPMethod: 'get',
      validationFunction: undefined,
      businessLogic: async (_, {currentUser}) => {
        try {
          const data = await getGalleryConfig_IO(currentUser.account.account_id)
          if (!data) {
            res.status(getValidatedStatusCode(404))
              .json(getInfoEventWithPayloadDTO({
                event: 'NOT_FOUND',
                data: undefined
              }))
            return void undefined
          }
          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<GALLERY_DTO_API_V1['GET_GALLERY_CONFIG']['RESPONSE']>({
              event: 'SUCCESS',
              data: data
            }))

          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'GET_GALLERY_CONFIG',
            e)
          return void undefined
        }
      }
    })
}

export default handler
