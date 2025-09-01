import type {NextApiRequest, NextApiResponse} from 'next'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {pushToEventLog_IO} from '../../../../../application/event-log/eventLogIO.operations.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {ACCOUNT_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/account/account.dto'
import {VALIDATION_POLICY} from '../../../../../READONLY-shared-kernel/policies/validation.policy'
import {DB_CLIENT} from "../../../../../application/db/db.utils.api";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<ACCOUNT_DTO_API_V1['DISPLAY_NAME_CHANGE']['REQUEST']>(
    req,
    res,
    {
      eventName: 'ACCOUNT_DISPLAY_NAME_CHANGE',
      allowedHTTPMethod: 'post',
      validationFunction: VALIDATION_POLICY.validators.accountDisplayNameChange,
      businessLogic: async (body, {currentUser}, metadata) => {
        try {

          const account = await DB_CLIENT.use.account.update({
            where: {
              created_by_user_id: currentUser.user_id
            },
            data: {
              display_name: body.display_name
            }
          })

          if (!account) {
            res.status(getValidatedStatusCode(404))
              .json(getInfoEventWithPayloadDTO({
                event: 'ACCOUNT_NOT_FOUND',
                data: undefined
              }))
            return void undefined
          }

          const responsePayload = account as ACCOUNT_DTO_API_V1['DISPLAY_NAME_CHANGE']['RESPONSE']

          res.status(getValidatedStatusCode(201))
            .json(getInfoEventWithPayloadDTO<ACCOUNT_DTO_API_V1['DISPLAY_NAME_CHANGE']['RESPONSE']>({
              event: 'DISPLAY_NAME_CHANGED',
              data: responsePayload
            }))


          void pushToEventLog_IO({
            eventName: 'DISPLAY_NAME_CHANGED',
            user: currentUser,
            requestBody: body,
            responseBody: account,
            metadata
          })

          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'CANNOT_CHANGE_DISPLAY_NAME',
              e))
          reportIssue(
            'ACCOUNT_CREATE',
            e)
        }

        return void undefined
      }
    })
}

export default handler
