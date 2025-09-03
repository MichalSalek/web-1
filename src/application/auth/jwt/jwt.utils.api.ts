import {__debuggerGate} from '../../debugger/debugger.utils.api'
import {reportIssue} from '../../debugger/errorHandler.possibilities.api'
import {ENV_VARS} from '../../environment/environment.utils.api'
import {JWT_VERIFY} from './adapters/jsonwebtoken.adapter'
import {TOKEN_WITH_SALT_SEPARATOR, TokenPayload} from './jwt.config'
import {ExtendedEncodedAndDecodedToken, ExtendedToken, Token} from './jwt.types'


export const getFullSalt = (salt: string): string | undefined => {
  if (!salt) {
    reportIssue(
      'getFullSalt: NO SALT.',
      {
        salt,
        processSALT: ENV_VARS.JWT_SALT
      })
    return undefined
  }
  __debuggerGate(() => console.log(
    'getFullSalt type: ',
    typeof ENV_VARS.JWT_SALT,
    ' salt: ',
    salt))
  return ENV_VARS.JWT_SALT + salt
}


export const validateTokenPayload = (payload: TokenPayload | unknown): payload is TokenPayload => typeof payload
  === 'object'
  && payload
  !== null
  && 'user_id'
  in payload


export const extendEncodedToken = (encodedToken: Token, salt: string): ExtendedToken => {
  return encodedToken + TOKEN_WITH_SALT_SEPARATOR + salt
}


export const getEncodedTokenFromExtendedToken = (extendedToken: ExtendedToken): {
  encodedToken: Token,
  salt: string
} => {
  if (!extendedToken) {
    throw new Error('Unable to determine extended token from ExtendedToken')
  }
  const dividingLineNumber = extendedToken.indexOf(TOKEN_WITH_SALT_SEPARATOR)
  const cleanFromSeparator = extendedToken.replace(
    TOKEN_WITH_SALT_SEPARATOR,
    '')
  const output = {
    encodedToken: cleanFromSeparator.substring(
      0,
      dividingLineNumber),
    salt: cleanFromSeparator.substring(dividingLineNumber)
  }
  __debuggerGate(() => console.log(
    'getEncodedTokenFromExtendedToken. type of encodedToken and salt: ',
    typeof output.encodedToken,
    typeof output.salt))
  return output
}


const getDecodedTokenFromExtendedToken = (extendedToken: ExtendedToken): TokenPayload | undefined => {
  try {
    const {
      encodedToken,
      salt
    } = getEncodedTokenFromExtendedToken(extendedToken)
    const decoded = JWT_VERIFY(
      encodedToken,
      salt)
    const decodedAndValidatedByModel = validateTokenPayload(decoded)
      ? decoded
      : undefined
    if (!decodedAndValidatedByModel) {
      __debuggerGate(() => console.log(
        'getDecodedTokenFromExtendedToken validateTokenPayload FAIL. extendedToken: ',
        extendedToken))
      return undefined
    }
    return decodedAndValidatedByModel
  } catch (error) {
    reportIssue(
      'getDecodedTokenFromExtendedToken PASSED TOKEN IS INVALID OR EXPIRED',
      error)
    throw error
  }
}


export const getDecodedTokenFromPassedExtended = (extendedToken: ExtendedToken): ExtendedEncodedAndDecodedToken => {
  try {
    const decodedToken = getDecodedTokenFromExtendedToken(extendedToken)

    return {
      extendedToken,
      decodedToken
    }
  } catch (error) {
    reportIssue(
      'getDecodedTokenFromPassedExtended',
      error)
    throw error
  }
}
