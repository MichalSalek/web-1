import type {NextApiRequest, NextApiResponse} from 'next'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {USER_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/user/user.dto'
import {VALIDATION_POLICY} from '../../../../../READONLY-shared-kernel/policies/validation.policy'


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<USER_DTO_API_V1['CREATE']['REQUEST']>(
    req,
    res,
    {
      eventName: 'USER_CREATE',
      allowedHTTPMethod: 'post',
      validationFunction: VALIDATION_POLICY.validators.userCreate,
      businessLogic: async (body) => {


        // tworzenie nowego usera level 1
        // wzorować się na rejestracji

      }
    })
}

export default handler
