import type {NextApiRequest, NextApiResponse} from 'next'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {VALIDATION_POLICY} from '../../../../../READONLY-shared-kernel/policies/validation.policy'
import {GALLERY_DTO_API_V1} from "../../../../../READONLY-shared-kernel/models/gallery/gallery.dto";
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from "../../../../../READONLY-shared-kernel/application/http/http.api";
import {getGenericErrorWithDebuggerDTO} from "../../../../../domain/http/http.utils.api";
import {reportIssue} from "../../../../../application/debugger/errorHandler.possibilities.api";
import {deleteAssetFromVendor} from "../../../../../domain/gallery/galleryIO.possibilities.api";
import {getIDMark} from "../../../../../READONLY-shared-kernel/domain/gallery/gallery.utils";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<GALLERY_DTO_API_V1['DELETE_ASSET_FROM_VENDOR']['REQUEST']>(
    req,
    res,
    {
      eventName: 'DELETE_ASSET_FROM_VENDOR',
      allowedHTTPMethod: 'post',
      validationFunction: VALIDATION_POLICY.validators.deleteAssetFromVendor,
      businessLogic: async (body, {currentUser}) => {
        try {

          if (!body.asset_id.includes(getIDMark(currentUser.user_id))) {
            res.status(getValidatedStatusCode(401))
              .json(getInfoEventWithPayloadDTO({
                event: 'GENERAL_ERROR',
                data: undefined
              }))
            return void undefined
          }


          await deleteAssetFromVendor(body.asset_id)

          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<GALLERY_DTO_API_V1['DELETE_ASSET_FROM_VENDOR']['RESPONSE']>({
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
            'DELETE_ASSET_FROM_VENDOR',
            e)
          return void undefined
        }
      }
    })
}

export default handler
