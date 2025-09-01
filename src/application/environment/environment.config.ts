// To use ENV VARS - use getter from utils, not a RAW one.
// Here is config only:
//
export const RAW_ENV_VARS_NOT_USE = {
  JWT_SALT          : process.env.JWT_SALT!,
  HTTP_PROTOCOL     : process.env.NEXT_PUBLIC_HTTP_PROTOCOL!,
  HTTP_WEB1_APP_HOST: process.env.NEXT_PUBLIC_HTTP_WEB1_APP_HOST!,
  HTTP_MAIN_APP_HOST: process.env.HTTP_MAIN_APP_HOST!,
  PORT_MAIN         : process.env.PORT_MAIN!
} as const
