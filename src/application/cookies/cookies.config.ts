import { SerializeOptions }                         from 'cookie'
import { TOKEN_AND_SESSION_EXPIRES_IN_XXX_SECONDS } from '../../READONLY-shared-kernel/application/auth/auth.config'
import { IS_DEVELOPMENT_ENV }                       from '../environment/environment.utils.api'




export const SET_COOKIE_OPTIONS: SerializeOptions = {
  httpOnly: true,
  sameSite: 'strict',
  secure  : !IS_DEVELOPMENT_ENV(),
  maxAge  : TOKEN_AND_SESSION_EXPIRES_IN_XXX_SECONDS,
  path    : '/'
} as const
