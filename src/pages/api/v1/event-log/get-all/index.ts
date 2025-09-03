import type {NextApiRequest, NextApiResponse} from 'next'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {getEventLogsByUser_IO} from '../../../../../application/event-log/eventLogIO.possibilities.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {EVENT_LOG_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/event-log/event_log.dto'
import {VALIDATION_POLICY} from '../../../../../READONLY-shared-kernel/policies/validation.policy'


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  await HTTPRequestHandlerMiddleware<EVENT_LOG_DTO_API_V1['GET_ALL']['REQUEST']>(
    req,
    res,
    {
      eventName: 'EVENT_LOG_GET_ALL',
      allowedHTTPMethod: 'post',
      validationFunction: VALIDATION_POLICY.validators.eventLogGetAll,
      businessLogic: async (body) => {
        try {
          const data = await getEventLogsByUser_IO({
            req,
            res,
            payload: body.type
          })
          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<EVENT_LOG_DTO_API_V1['GET_ALL']['RESPONSE']>({
              event: 'SUCCESS',
              data: data.reverse()
            }))

          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'EVENT_LOG_GET_ALL',
            e)
          return void undefined
        }
      }
    })
}

export default handler
