import type {NextApiRequest, NextApiResponse} from 'next'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {VALIDATION_POLICY} from '../../../../../READONLY-shared-kernel/policies/validation.policy'
import {GALLERY_DTO_API_V1} from "../../../../../READONLY-shared-kernel/models/gallery/gallery.dto";
import {getGalleryRecords_IO} from "../../../../../domain/gallery/galleryIO.possibilities.api";
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from "../../../../../READONLY-shared-kernel/application/http/http.api";
import {getGenericErrorWithDebuggerDTO} from "../../../../../domain/http/http.utils.api";
import {reportIssue} from "../../../../../application/debugger/errorHandler.possibilities.api";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<GALLERY_DTO_API_V1['GET_GALLERY_RECORDS']['REQUEST']>(
    req,
    res,
    {
      eventName: 'GET_GALLERY_RECORDS',
      allowedHTTPMethod: 'post',
      validationFunction: VALIDATION_POLICY.validators.getGalleryRecords,
      businessLogic: async (body, {currentUser}) => {
        try {
          const data = await getGalleryRecords_IO({...body, created_by_account_id: currentUser.account.account_id})
          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<GALLERY_DTO_API_V1['GET_GALLERY_RECORDS']['RESPONSE']>({
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
            'GET_GALLERY_RECORDS',
            e)
          return void undefined
        }
      }
    })
}

export default handler
