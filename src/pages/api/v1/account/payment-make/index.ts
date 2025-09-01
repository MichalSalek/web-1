import type { NextApiRequest, NextApiResponse }                           from 'next'
import { reportIssue }                                                    from '../../../../../application/debugger/errorHandler.possibilities.api'
import { pushToEventLog_IO }                                              from '../../../../../application/event-log/eventLogIO.operations.api'
import { HTTPRequestHandlerMiddleware }                                   from '../../../../../domain/http/http.middleware'
import { getGenericErrorWithDebuggerDTO }                                 from '../../../../../domain/http/http.utils.api'
import { makeCurrentUser }                                                from '../../../../../domain/user/user.utils.api'
import { setAccountStateByUser_IO, setPaymentStateByUser_IO } from '../../../../../domain/user/userIO.operations.api'
import { getInfoEventWithPayloadDTO, getValidatedStatusCode }             from '../../../../../READONLY-shared-kernel/application/http/http.api'
import { ACCOUNT_DTO_API_V1 }                                             from '../../../../../READONLY-shared-kernel/models/account/account.dto'
import { AccountStatusValue }                                             from '../../../../../READONLY-shared-kernel/models/db_models'
import { VALIDATION_POLICY }                                              from '../../../../../READONLY-shared-kernel/policies/validation.policy'




export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<ACCOUNT_DTO_API_V1['MAKE_PAYMENT']['REQUEST']>(
    req,
    res,
    {
      eventName         : 'ACCOUNT_PAYMENT_MAKE',
      allowedHTTPMethod : 'post',
      validationFunction: VALIDATION_POLICY.validators.accountPaymentMake,
      businessLogic     : async (body, {
        currentUser,
        sessionAndToken
      }, metadata) => {
        try {

          // Changing pricing plan of active account case:
          //
          const userAfterPaymentMade = await setPaymentStateByUser_IO(
            currentUser,
            body.pricing_plan)


          // Changing pricing plan of active account case:
          //
          const isUserChangingHisPricingPlan = currentUser.account?.pricing_plan !== userAfterPaymentMade.account?.pricing_plan
          if (isUserChangingHisPricingPlan) {
            void pushToEventLog_IO({
              eventName   : 'PRICING_PLAN_CHANGED',
              user        : currentUser,
              requestBody : body,
              responseBody: userAfterPaymentMade,
              metadata
            })
          }

          void pushToEventLog_IO({
            eventName   : 'PAYMENT_DONE',
            user        : currentUser,
            requestBody : body,
            responseBody: userAfterPaymentMade,
            metadata
          })


          // Account activating:
          //
          const userAfterAccountActivation = await setAccountStateByUser_IO(
            currentUser,
            AccountStatusValue.ACTIVE)


          const updatedCurrentUser = makeCurrentUser(
            {...userAfterPaymentMade, ...userAfterAccountActivation},
            sessionAndToken)


          res.status(getValidatedStatusCode(201))
             .json(getInfoEventWithPayloadDTO<ACCOUNT_DTO_API_V1['MAKE_PAYMENT']['RESPONSE']>({
               event: 'PAYMENT_DONE',
               data : updatedCurrentUser
             }))

          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
             .json(getGenericErrorWithDebuggerDTO(
               'CANNOT_MAKE_PAYMENT',
               e))
          reportIssue(
            'PAYMENT_MAKE',
            e)
        }

        return void undefined
      }
    })
}

export default handler
