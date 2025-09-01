import { NextApiWithOptionalPayload } from '../../../domain/http/http.types'
import { SWITCH_BACK_TOKEN_NAME }     from '../../admin/becomeUser.config'
import { reportIssue }                from '../../debugger/errorHandler.possibilities.api'
import { setClientHeader }                      from '../../headers/headers.possibilities.api'
import { SESSION_TOKEN_KEY_NAME, TokenPayload } from './jwt.config'
import { createSessionToken }                   from './jwt.possibilities.api'
import { ExtendedEncodedAndDecodedToken }       from './jwt.types'




export const generateSessionTokenAndSet = (
  props: NextApiWithOptionalPayload<TokenPayload>,
  sessionKeyName: typeof SESSION_TOKEN_KEY_NAME | typeof SWITCH_BACK_TOKEN_NAME): ExtendedEncodedAndDecodedToken | undefined => {
  const {
          payload,
          req
        } = props
  if (!payload) {
    reportIssue(
      'generateSessionTokenAndSet NO PAYLOAD',
      {
        payload,
        req
      })
    return undefined
  }
  const extendedToken = createSessionToken(payload)
  if (!extendedToken) {
    reportIssue(
      'generateSessionTokenAndSet NO TOKEN',
      {
        payload
      })
    return undefined
  }

  setClientHeader({
    ...props,
    payload: {
      name : sessionKeyName,
      value: extendedToken
    }
  })

  return {
    extendedToken,
    decodedToken: payload
  }
}
