import {CUSTOM_HEADERS} from '../../READONLY-shared-kernel/domain/http/http.config'
import {ENV_VARS} from '../environment/environment.utils.api'


export const CORS_ALLOWED_ORIGINS = [`${ENV_VARS.HTTP_PROTOCOL}${ENV_VARS.HTTP_MAIN_APP_HOST}:${ENV_VARS.PORT_MAIN}`,
  `${ENV_VARS.HTTP_PROTOCOL}${ENV_VARS.HTTP_MAIN_APP_HOST}`]

export const CORS_HEADERS = Object.freeze({
  'Access-Control-Allow-Methods': 'GET, POST',
  'Access-Control-Allow-Headers': ''
    + 'Content-Type, '
    + 'Pathname, '
    + 'Cache-Control, '
    + 'Accept, '
    + 'Pragma, '
    + 'Refferer, '
    + 'Upgrade-Insecure-Requests, '
    + Object.values(CUSTOM_HEADERS)
      .join(', '),
  'Access-Control-Expose-Headers': Object.values(CUSTOM_HEADERS)
    .join(', '),
  'Access-Control-Allow-Credentials': 'true'
})

export const CORS_HEADERS_KEYS = Object.keys(CORS_HEADERS)

export const CORS_HEADERS_VALUES = Object.values(CORS_HEADERS)
