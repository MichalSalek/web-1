import type {NextApiRequest, NextApiResponse} from 'next'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {GALLERY_DTO_API_V1} from "../../../../../READONLY-shared-kernel/models/gallery/gallery.dto";
import {createTrait_IO} from "../../../../../domain/gallery/galleryIO.possibilities.api";
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from "../../../../../READONLY-shared-kernel/application/http/http.api";
import {getGenericErrorWithDebuggerDTO} from "../../../../../domain/http/http.utils.api";
import {reportIssue} from "../../../../../application/debugger/errorHandler.possibilities.api";
import {VALIDATION_POLICY} from "../../../../../READONLY-shared-kernel/policies/validation.policy";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<GALLERY_DTO_API_V1['CREATE_TRAIT']['REQUEST']>(
    req,
    res,
    {
      eventName: 'GALLERY_CREATE_TRAIT',
      allowedHTTPMethod: 'post',
      validationFunction: undefined,
      businessLogic: async ({trait, color_trait}, {currentUser}) => {
        try {
          if (!trait && !color_trait) {
            res.status(getValidatedStatusCode(406))
              .json(getInfoEventWithPayloadDTO<GALLERY_DTO_API_V1['CREATE_TRAIT']['RESPONSE_ERROR']>({
                event: 'GENERAL_ERROR',
                data: {
                  __general: 'Brakujące dane.',
                  trait: '',
                  color_trait: ''
                }
              }))
            return void undefined
          }
          if (trait) {
            await createTrait_IO({
              accountID: currentUser.account.account_id,
              trait: VALIDATION_POLICY.utils.normalizeStringEliminateWhitespaces(trait)
            })
          }
          if (color_trait) {
            await createTrait_IO({
              accountID: currentUser.account.account_id,
              colorTrait: VALIDATION_POLICY.utils.normalizeStringEliminateWhitespaces(color_trait)
            })
          }

          res.status(getValidatedStatusCode(201))
            .json(getInfoEventWithPayloadDTO<GALLERY_DTO_API_V1['CREATE_TRAIT']['RESPONSE']>({
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
            'GALLERY_CREATE_TRAIT',
            e)
          return void undefined
        }
      }
    })
}

export default handler
