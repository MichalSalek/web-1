import type { NextApiRequest, NextApiResponse }               from 'next'
import { pushToEventLog_IO }                                  from '../../../../../application/event-log/eventLogIO.operations.api'
import { HTTPRequestHandlerMiddleware }                       from '../../../../../domain/http/http.middleware'
import { logoutUserAndDeleteSession_IO }                      from '../../../../../domain/user/userIO.operations.api'
import { getInfoEventWithPayloadDTO, getValidatedStatusCode } from '../../../../../READONLY-shared-kernel/application/http/http.api'
import { USER_DTO_API_V1 }                                    from '../../../../../READONLY-shared-kernel/models/user/user.dto'




export const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  await HTTPRequestHandlerMiddleware<USER_DTO_API_V1['LOGOUT']['REQUEST']>(
    req,
    res,
    {
      eventName         : 'USER_LOGOUT',
      allowedHTTPMethod : 'post',
      validationFunction: undefined,
      businessLogic     : async (body, {
        currentUser
      }, metadata) => {

        await logoutUserAndDeleteSession_IO({
          req,
          res,
          payload: {
            user_id   : currentUser.user_id,
            session_id: currentUser.session.session_id
          }
        })


        void pushToEventLog_IO({
          eventName  : 'USER_LOGGED_OUT',
          user       : currentUser,
          requestBody: body,
          metadata
        })

        res.status(getValidatedStatusCode(200))
           .json(getInfoEventWithPayloadDTO<USER_DTO_API_V1['LOGOUT']['RESPONSE']>({
             event: 'USER_LOGGED_OUT',
             data : undefined
           }))

        return void undefined
      }
    })
}

export default handler
