// https://www.npmjs.com/package/jsonwebtoken
//
import * as jwt           from 'jsonwebtoken'
import { VerifyErrors }   from 'jsonwebtoken'
import { __debuggerGate } from '../../../debugger/debugger.utils.api'
import { reportIssue }    from '../../../debugger/errorHandler.possibilities.api'
import { TokenPayload }   from '../jwt.config'
import { Token }          from '../jwt.types'
import { getFullSalt }    from '../jwt.utils.api'




export const JWT_SIGN = (payload: TokenPayload, salt: string): Token | undefined => {
  // jwt.sign(payload, secretOrPrivateKey, [options, callback])
  const fullSalt = getFullSalt(salt)
  __debuggerGate(() => console.log(
    'JWT_SIGN. fullSalt length: ',
    fullSalt?.length))
  if (typeof fullSalt === 'undefined') {
    return undefined
  }
  try {
    return jwt.sign(
      payload,
      fullSalt
    )
  } catch (error) {
    reportIssue(
      'JWT_SIGN',
      error)
    throw error
  }
}



export const JWT_VERIFY = (encodedToken: Token, salt: string): TokenPayload | undefined => {
  // jwt.verify(encodedToken, secretOrPublicKey, [options, callback])
  const fullSalt = getFullSalt(salt)
  __debuggerGate(() => console.log(
    'JWT_VERIFY. fullSalt type: ',
    typeof fullSalt))
  __debuggerGate(() => console.log(
    'JWT_VERIFY. encodedToken type: ',
    typeof encodedToken))
  if (typeof fullSalt === 'undefined') {
    return undefined
  }
  try {
    const decoded = jwt.verify(
      encodedToken,
      fullSalt)
    return decoded as TokenPayload
  } catch (error) {
    const verifyError = error as VerifyErrors
    if (verifyError.name === 'TokenExpiredError') {
      return undefined
    }
    reportIssue(
      'JWT_VERIFY',
      verifyError)
    throw error
  }
}
