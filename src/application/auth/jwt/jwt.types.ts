import {TokenPayload} from './jwt.config'


export type Token = string

export type ExtendedToken = string

export type ExtendedEncodedAndDecodedToken = {
  extendedToken: Token,
  decodedToken: TokenPayload | undefined
}
