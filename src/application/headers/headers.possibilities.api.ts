import { ValueOf }                    from '@msalek/utils'
import { NextApiWithOptionalPayload } from '../../domain/http/http.types'
import { CUSTOM_HEADERS }             from '../../READONLY-shared-kernel/domain/http/http.config'
import { __debuggerGate }             from '../debugger/debugger.utils.api'
import { reportIssue }                from '../debugger/errorHandler.possibilities.api'




export const setClientHeader = <T>(props: NextApiWithOptionalPayload<{
  name: ValueOf<typeof CUSTOM_HEADERS>,
  value: string
}>) => {
  const {
          res,
          payload
        } = props

  if (!payload) {
    reportIssue(
      'setClientHeader, no payload.',
      payload)
    return void undefined
  }


  __debuggerGate(() => console.log(
    'setClientHeader payload.name and value length: ',
    payload.name,
    payload.value?.length))

  __debuggerGate(() => console.log(
    'setClientHeader typeof payload.value: ',
    typeof payload.value))

  res.setHeader(
    payload.name,
    payload.value)
}



export const deleteClientHeader = async (props: NextApiWithOptionalPayload<ValueOf<typeof CUSTOM_HEADERS>>) => {
  const {
          res,
          payload
        } = props

  if (!payload) {
    reportIssue(
      'deleteClientHeader, no payload.',
      payload)
    return void undefined
  }
  res.removeHeader(payload)
}


export const getClientHeader = async (props: NextApiWithOptionalPayload<string>) => {
  const {
          req,
          res,
          payload
        } = props

  __debuggerGate(() => console.log(
    'getClientHeader payload: ',
    payload))

  if (!payload) {
    return null
  }

  const output = req.headers[payload] as string | undefined

  __debuggerGate(() => console.log(
    'getClientHeader string output length: ',
    output?.length,
    'header name: ',
    payload))

  if (!output || typeof output === 'undefined') {
    return null
  }

  return output
}
