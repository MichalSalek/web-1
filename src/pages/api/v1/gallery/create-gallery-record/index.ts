import type {NextApiRequest, NextApiResponse} from 'next'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {VALIDATION_POLICY} from '../../../../../READONLY-shared-kernel/policies/validation.policy'
import {GALLERY_DTO_API_V1} from "../../../../../READONLY-shared-kernel/models/gallery/gallery.dto";
import {createGalleryRecord_IO} from "../../../../../domain/gallery/galleryIO.possibilities.api";
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from "../../../../../READONLY-shared-kernel/application/http/http.api";
import {getGenericErrorWithDebuggerDTO} from "../../../../../domain/http/http.utils.api";
import {reportIssue} from "../../../../../application/debugger/errorHandler.possibilities.api";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<GALLERY_DTO_API_V1['CREATE_GALLERY_RECORD']['REQUEST']>(
    req,
    res,
    {
      eventName: 'CREATE_GALLERY_RECORD',
      allowedHTTPMethod: 'post',
      validationFunction: VALIDATION_POLICY.validators.createGalleryRecord,
      businessLogic: async (body, {currentUser}) => {
        try {

          await createGalleryRecord_IO({
            created_by_account_id: currentUser.account.account_id,
            asset_url: body.asset_url,
            asset_traits: body.traits,
            asset_color_traits: body.color_traits
          })
          res.status(getValidatedStatusCode(201))
            .json(getInfoEventWithPayloadDTO<GALLERY_DTO_API_V1['CREATE_GALLERY_RECORD']['RESPONSE']>({
              event: 'SUCCESS',
              data: undefined
            }))


          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'CREATE_GALLERY_RECORD',
            e)
          return void undefined
        }
      }
    })
}

export default handler
