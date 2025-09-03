import {Session} from '../../READONLY-shared-kernel/models/db_models'
import {ExtendedEncodedAndDecodedToken} from './jwt/jwt.types'


export type GetSessionAndTokenReturn = {
  session: Session,
  token: ExtendedEncodedAndDecodedToken
}
