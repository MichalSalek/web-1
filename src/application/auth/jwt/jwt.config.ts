import {JwtPayload} from 'jsonwebtoken'
import {IDType} from '../../../READONLY-shared-kernel/application/application.types'
import {CUSTOM_HEADERS} from '../../../READONLY-shared-kernel/domain/http/http.config'
import {Session} from '../../../READONLY-shared-kernel/models/db_models'


export const SESSION_TOKEN_KEY_NAME = CUSTOM_HEADERS['authorization']


export type TokenPayload = {
  user_id: IDType,
  created_at: string,
  location: string | null,
  language: string | null,
  user_agent: string | null,
  client_ip: string | null,
  session_id: Session['session_id']
  expires_at: string
} & Pick<JwtPayload, 'exp' | 'iat'>


export const TOKEN_WITH_SALT_SEPARATOR = '.eyJ1c2VyX2lkIjoiY20zcmYxdG9kMDAwMnA5emhyN2JoZXlmMiIsImNyZWF0ZWRfYXQiOiJbMTczMjYzNzA2OTUwOF0gMjAyNC0xMS0yNlQxNjowNDoyOS41MDhaIiwiY2xpZW50X2lwIjoiODMuMjkuMTYuMzQiLCJsb2NhdGlvbiI6IlBMLCBLcmFrb3cuIFRpbWV6b25lOiBFdXJvcGUvV2Fyc2F3IiwidXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb31706859'
