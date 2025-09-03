import {SerializeOptions} from 'cookie'


export type CookiePayload<T> = {
  key: string
  data: T
  options?: SerializeOptions
}
