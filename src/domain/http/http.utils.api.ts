import {NextApiRequest} from 'next'
import {debuggerStates} from '../../application/debugger/debugger.state'
import {getInfoEventWithPayloadDTO} from '../../READONLY-shared-kernel/application/http/http.api'
import {EVENT_INFO_TYPE} from '../../READONLY-shared-kernel/domain/commands-and-queries/cqrs.types'
import {CUSTOM_HEADERS} from '../../READONLY-shared-kernel/domain/http/http.config'
import {UserMetadata} from '../../READONLY-shared-kernel/models/user/user.types'


export const getKnownRequestHeaders = (req: NextApiRequest): {
  userMetadata: UserMetadata
} => {

  const headers = req.headers


  // Extract UserMetadata.
  //
  const usermetadata = headers[CUSTOM_HEADERS['userMetadata']] ?? ''

  const parserUserMetadata = JSON.parse((
    usermetadata
      ? usermetadata
      : '{}') as string)

  const {
    client_ip,
    location,
    user_agent,
    language
  } = parserUserMetadata as UserMetadata

  return {
    userMetadata: {
      client_ip,
      location,
      user_agent,
      language
    }
  }
}


export const getGenericErrorWithDebuggerDTO = (event: EVENT_INFO_TYPE, error: unknown) => {

  return (
    {
      ...getInfoEventWithPayloadDTO({
        event,
        data: undefined
      }),
      throw: debuggerStates.isEnabledDebugMode
        ? error
        : undefined
    })
}
