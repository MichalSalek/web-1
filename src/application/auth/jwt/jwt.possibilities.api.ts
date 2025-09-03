import {NextApiWithOptionalPayload} from '../../../domain/http/http.types'
import {__debuggerGate} from '../../debugger/debugger.utils.api'
import {reportIssue} from '../../debugger/errorHandler.possibilities.api'
import {getClientHeader, setClientHeader} from '../../headers/headers.possibilities.api'
import {JWT_SIGN} from './adapters/jsonwebtoken.adapter'
import {SESSION_TOKEN_KEY_NAME, TokenPayload} from './jwt.config'
import {ExtendedToken, Token} from './jwt.types'
import {extendEncodedToken, validateTokenPayload} from './jwt.utils.api'
import {CLEAR_THIS_HEADER_COMMAND_VALUE} from "../../../READONLY-shared-kernel/application/http/http.config";


export const createSessionToken = (payload: TokenPayload): ExtendedToken | undefined => {
  try {
    if (!payload || !validateTokenPayload(payload)) {
      reportIssue(
        'createToken PAYLOAD ERROR',
        payload)
      return undefined
    }
    const generatedSalt = String(Date.now())
    const token = JWT_SIGN(
      payload,
      generatedSalt)
    if (!token) {
      reportIssue(
        `TOKEN NOT CREATED`,
        payload)
      return undefined
    }
    return extendEncodedToken(
      token,
      generatedSalt)
  } catch (error) {
    reportIssue(
      'createToken ERROR',
      error)
    throw error
  }
}


export const deleteSessionToken = async (props: NextApiWithOptionalPayload) => {
  try {
    setClientHeader({
      ...props,
      payload: {
        name: SESSION_TOKEN_KEY_NAME,
        value: CLEAR_THIS_HEADER_COMMAND_VALUE
      }
    })
  } catch (error) {
    reportIssue(
      'deleteSessionToken ERROR',
      error)
    throw error
  }
}


export const getExtendedEncodedToken = async (props: NextApiWithOptionalPayload): Promise<Token | null> => {
  try {

    const output = await getClientHeader({
      ...props,
      payload: SESSION_TOKEN_KEY_NAME
    })

    __debuggerGate(() => console.log(
      'getExtendedEncodedToken, string output length: ',
      output?.length))

    return output
  } catch (error) {
    reportIssue(
      'getExtendedEncodedToken ERROR',
      error)
    throw error
  }
}
