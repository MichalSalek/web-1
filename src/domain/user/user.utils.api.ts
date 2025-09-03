import {handlePromiseWithTimeout} from '@msalek/utils'
import {GetSessionAndTokenReturn} from '../../application/auth/auth.types'
import {reportIssue} from '../../application/debugger/errorHandler.possibilities.api'
import {getCountryAndCity} from '../../application/geolocalization/geo.possibilities.api'
import {User, UserNoSensitive} from '../../READONLY-shared-kernel/models/db_models'
import {
  CurrentUser,
  UserMetadata,
  UserNoSensitiveWithRelations,
  UserWithRelations
} from '../../READONLY-shared-kernel/models/user/user.types'


export const convertUserToUserNoSensitive = (user: UserWithRelations | UserNoSensitiveWithRelations | User | null): UserNoSensitiveWithRelations | UserNoSensitive | null => {
  if (!user) {
    return null
  }
  if (!(
    user as User).password) {
    return user
  }
  const {
    password,
    ...restWithoutSensitive
  } = user as User

  return restWithoutSensitive
}


export const makeCurrentUser = (user: UserNoSensitiveWithRelations, sessionAndToken: GetSessionAndTokenReturn): CurrentUser => {
  const {
    permissions,
    ...cleanedUser
  } = user

  return (
    {
      ...cleanedUser as UserNoSensitiveWithRelations,
      session: sessionAndToken.session
    })
}


export const equalPasswords = (p1: User['password'], p2: User['password']): boolean => {
  return p1 === p2
}


export const areBothUsersFromTheSameAccount = (
  user1: UserWithRelations | UserNoSensitiveWithRelations | null | undefined,
  user2: UserWithRelations | UserNoSensitiveWithRelations | null | undefined): boolean => {
  if (!user1?.account || !user2?.account) {
    return false
  }

  return user1.account.account_id !== user2.account.account_id
}


export const fillUserMetadataWithLocation = async (body: Partial<UserMetadata> | unknown): Promise<UserMetadata> => {
  const maybeUserMetadata = body as UserMetadata
  const userMetadata: UserMetadata = {
    user_agent: maybeUserMetadata.user_agent,
    language: maybeUserMetadata.language,
    client_ip: maybeUserMetadata.client_ip,
    location: undefined
  }

  try {
    userMetadata.location =
      await handlePromiseWithTimeout<string | null>(getCountryAndCity({client_ip: maybeUserMetadata.client_ip ?? undefined}))
      ?? undefined
    return userMetadata
  } catch (e) {
    reportIssue(
      'fillUserMetadataWithLocation',
      e)
    return userMetadata
  }
}
