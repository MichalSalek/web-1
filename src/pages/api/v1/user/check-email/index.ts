import type { NextApiRequest, NextApiResponse }               from 'next'
import { reportIssue }                                        from '../../../../../application/debugger/errorHandler.possibilities.api'
import { HTTPRequestHandlerMiddleware }                       from '../../../../../domain/http/http.middleware'
import { getGenericErrorWithDebuggerDTO }                     from '../../../../../domain/http/http.utils.api'
import { getUser_IO }                                         from '../../../../../domain/user/userIO.possibilities.api'
import { getInfoEventWithPayloadDTO, getValidatedStatusCode } from '../../../../../READONLY-shared-kernel/application/http/http.api'
import { UserNoSensitive }                                    from '../../../../../READONLY-shared-kernel/models/db_models'
import { USER_DTO_API_V1 }                                    from '../../../../../READONLY-shared-kernel/models/user/user.dto'
import { VALIDATION_POLICY }                                  from '../../../../../READONLY-shared-kernel/policies/validation.policy'




export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<USER_DTO_API_V1['CHECK_EMAIL']['REQUEST']>(
    req,
    res,
    {
      eventName                   : 'CHECK_EMAIL',
      allowedHTTPMethod           : 'post',
      validationFunction          : VALIDATION_POLICY.validators.checkEmail,
      AUTHENTICATION_CHECK_ENABLED: false,
      businessLogic               : async (body, outputUser, metadata) => {
        try {
          const user = await getUser_IO<UserNoSensitive>(body)

          if (user?.email && user.email === body.email) {
            res.status(getValidatedStatusCode(406))
               .json(getInfoEventWithPayloadDTO<USER_DTO_API_V1['CHECK_EMAIL']['RESPONSE']>({
                 event: 'USER_ALREADY_EXISTS',
                 data : undefined
               }))

          } else {

            res.status(getValidatedStatusCode(200))
               .json(getInfoEventWithPayloadDTO<USER_DTO_API_V1['CHECK_EMAIL']['RESPONSE']>({
                 event: 'SUCCESS',
                 data : undefined
               }))
          }


          return void undefined
        } catch (e) {

          res.status(getValidatedStatusCode(500))
             .json(getGenericErrorWithDebuggerDTO(
               'GENERAL_ERROR',
               e))
          reportIssue(
            'CHECK_EMAIL',
            e)

          return void undefined
        }
      }
    })
}

export default handler
