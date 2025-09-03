import type {NextApiRequest, NextApiResponse} from 'next'
import {debuggerStates} from '../../../../../application/debugger/debugger.state'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {ADMIN_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/admin/admin.dto'


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  await HTTPRequestHandlerMiddleware<ADMIN_DTO_API_V1['SWITCH_BACKEND_DEBUG_MODE']['REQUEST']>(
    req,
    res,
    {
      eventName: 'SWITCH_BACKEND_DEBUG_MODE',
      allowedHTTPMethod: 'post',
      validationFunction: undefined,
      businessLogic: async (body) => {
        try {
          if (body?.debug_db) {

            debuggerStates.isEnabledDBLeaksDebugger = !debuggerStates.isEnabledDBLeaksDebugger

            reportIssue(
              'debug-mode isEnabledDBLeaksDebugger',
              debuggerStates.isEnabledDBLeaksDebugger,
              'log')
            res.status(getValidatedStatusCode(200))
              .send(getInfoEventWithPayloadDTO<ADMIN_DTO_API_V1['SWITCH_BACKEND_DEBUG_MODE']['RESPONSE']>({
                event: debuggerStates.isEnabledDBLeaksDebugger
                  ? 'DEBUG_DB_MODE_ENABLED'
                  : 'DEBUG_DB_MODE_DISABLED',
                data: undefined
              }))


          } else {

            debuggerStates.isEnabledDebugMode = !debuggerStates.isEnabledDebugMode

            reportIssue(
              'debug-mode isEnabledDebugMode',
              debuggerStates.isEnabledDebugMode,
              'log')
            res.status(getValidatedStatusCode(200))
              .send(getInfoEventWithPayloadDTO<ADMIN_DTO_API_V1['SWITCH_BACKEND_DEBUG_MODE']['RESPONSE']>({
                event: debuggerStates.isEnabledDebugMode
                  ? 'DEBUG_MODE_ENABLED'
                  : 'DEBUG_MODE_DISABLED',
                data: undefined
              }))
          }
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'SWITCH_BACKEND_DEBUG_MODE',
            e)

          return void undefined
        }
      }
    })

}

export default handler
