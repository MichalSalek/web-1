import {
  dateApplication,
  nowDateIsSameOrAfterThanPassed
} from '../../READONLY-shared-kernel/application/date/dayjs-adapter/date.adapter'
import {TOKEN_AND_SESSION_EXPIRES_IN_XXX_SECONDS} from '../../READONLY-shared-kernel/application/auth/auth.config'
import {TokenPayload} from './jwt/jwt.config'


export const getRefreshedSessionExpDateString = () => dateApplication()
  .add(
    TOKEN_AND_SESSION_EXPIRES_IN_XXX_SECONDS,
    'second')
  .utc()
  .format()


export const checkRefreshTokenAndSessionNeed = (expires_at: TokenPayload['expires_at']) => {
  return nowDateIsSameOrAfterThanPassed(
    dateApplication(expires_at),
    dateApplication()
      .add(
        TOKEN_AND_SESSION_EXPIRES_IN_XXX_SECONDS / 2,
        'second'))
}

export const makeTokenPayloadFromDecodedToken = (decodedToken: TokenPayload): TokenPayload => {
  const { // Omit generated tokenDecoded payload keys. (Generates error 'exp date exists already' in the past…)
    exp,
    iat,
    ...tokenPayload
  } = decodedToken

  return tokenPayload
}
