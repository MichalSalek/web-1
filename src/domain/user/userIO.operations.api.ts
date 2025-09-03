import {removeDuplicates} from '@msalek/utils'
import {GetSessionAndTokenReturn} from '../../application/auth/auth.types'
import {TokenPayload} from '../../application/auth/jwt/jwt.config'
import {deleteSessionToken} from '../../application/auth/jwt/jwt.possibilities.api'
import {
  generateSessionAndSetToken_IO,
  getAndRefreshCurrentSessionAndToken_IO
} from '../../application/auth/session/sessionIO.operations.api'
import {deleteSession_IO} from '../../application/auth/session/sessionIO.possibilities.api'
import {__debuggerGate} from '../../application/debugger/debugger.utils.api'
import {reportIssue} from '../../application/debugger/errorHandler.possibilities.api'
import {PermissionsCollection} from '../../READONLY-shared-kernel/domain/permissions/permissions.types'
import {
  Account,
  AccountStatus,
  AccountStatusValue,
  PaymentStatusValue,
  Session,
  User
} from '../../READONLY-shared-kernel/models/db_models'
import {
  CurrentUser,
  UserMetadata,
  UserNoSensitiveWithRelations,
  UserWithRelations
} from '../../READONLY-shared-kernel/models/user/user.types'
import {PERMISSIONS_POLICY} from '../../READONLY-shared-kernel/policies/permissions.policy'
import {USER_POLICY} from '../../READONLY-shared-kernel/policies/user.policy'
import {NextApiWithOptionalPayload} from '../http/http.types'
import {userRelationsEnabler} from './user.config'
import {convertUserToUserNoSensitive, makeCurrentUser} from './user.utils.api'
import {getUser_IO} from './userIO.possibilities.api'
import {DB_CLIENT} from "../../application/db/db.utils.api";
import {activeAccountStates} from "../../READONLY-shared-kernel/domain/user-and-account/user_and_account.config";


export const loginUser_IO = async (props: NextApiWithOptionalPayload<Pick<TokenPayload, 'user_id'> & Partial<UserMetadata>>): Promise<GetSessionAndTokenReturn> => {
  return await generateSessionAndSetToken_IO(props)
}


export const logoutUser_IO = async (props: NextApiWithOptionalPayload) => {
  try {
    __debuggerGate(() => console.log('logoutUser fired.'))
    // Kill token.
    await deleteSessionToken(props)
  } catch (error) {
    reportIssue(
      'logoutUser_IO ERROR',
      error)
    throw error
  }
}


export const logoutUserAndDeleteSession_IO = async (props: NextApiWithOptionalPayload<{
  user_id: User['user_id'] | undefined,
  session_id: Session['session_id'] | undefined,
}>) => {
  const {payload} = props
  try {
    __debuggerGate(() => console.log('logoutUser fired.'))
    // Kill token.
    await logoutUser_IO(props)
    await deleteSession_IO(
      payload?.session_id,
      payload?.user_id)
  } catch (error) {
    reportIssue(
      'logoutUserAndDeleteSession_IO ERROR',
      error)
    throw error
  }
}


export type GetCurrentUserOutputOptimistic = {
  user: UserWithRelations
  currentUser: CurrentUser
  sessionAndToken: GetSessionAndTokenReturn
}
export type GetCurrentUserOutput = {
  user: GetCurrentUserOutputOptimistic['user'] | undefined
  currentUser: GetCurrentUserOutputOptimistic['currentUser'] | undefined
  sessionAndToken: GetCurrentUserOutputOptimistic['sessionAndToken'] | undefined
}
export const getCurrentUserUndefinedReturnObject: GetCurrentUserOutput = {
  user: undefined,
  currentUser: undefined,
  sessionAndToken: undefined
}
export const getCurrentUser_IO = async (props: NextApiWithOptionalPayload): Promise<GetCurrentUserOutput> => {

  try {
    const sessionAndToken = await getAndRefreshCurrentSessionAndToken_IO(props)
    __debuggerGate(() => console.log(
      'getCurrentUserByReqRes_IO sessionAndToken: ',
      sessionAndToken))

    if (sessionAndToken?.token && sessionAndToken.token.decodedToken) {
      const user = await getUser_IO<UserWithRelations>(
        {user_id: sessionAndToken.token.decodedToken.user_id},
        true,
        false,
        true)

      if (!user) {
        return getCurrentUserUndefinedReturnObject
      }
      return (
        {
          user,
          currentUser: makeCurrentUser(
            convertUserToUserNoSensitive(user as UserWithRelations) as UserNoSensitiveWithRelations,
            sessionAndToken),
          sessionAndToken
        })
    } else {
      __debuggerGate(() => console.log('getCurrentUserByReqRes_IO NO TOKEN case.'))
      await logoutUser_IO(props)
      return getCurrentUserUndefinedReturnObject
    }
  } catch (error) {
    reportIssue(
      'getCurrentUser_IO ERROR',
      error)
    throw error
  }
}


export const disableUser_IO = async (passedUser: UserNoSensitiveWithRelations) => {
  if (!passedUser) {
    reportIssue(
      'disableUser_IO NO INPUT DATA',
      passedUser)
    return null
  }
  try {
    const user = await DB_CLIENT.use.user.update({
      where: {user_id: passedUser.user_id},
      data: {
        is_active: false,
        account: {
          update: {
            account_status: AccountStatusValue.NOT_ACTIVE
          }
        },
        sessions: {
          deleteMany: {created_by_user_id: passedUser.user_id}
        }
      },
      include: userRelationsEnabler
    })

    return convertUserToUserNoSensitive(user as UserWithRelations) as UserNoSensitiveWithRelations | null
  } catch (error) {
    reportIssue(
      'disableUser_IO ERROR',
      error)
    throw error
  }
}


export const enableUser_IO = async (passedUser: UserNoSensitiveWithRelations) => {
  if (!passedUser) {
    reportIssue(
      'enableUser_IO NO INPUT DATA',
      passedUser)
    return null
  }

  try {
    const user = await DB_CLIENT.use.user.update({
      where: {user_id: passedUser.user_id},
      data: {
        is_active: true,
        account: {
          update: {
            account_status: USER_POLICY.utils.CAN_USER_HAVE_ACTIVE_ACCOUNT(passedUser)
              ? AccountStatusValue.ACTIVE
              : undefined
          }
        }
      },
      include: userRelationsEnabler
    })

    return convertUserToUserNoSensitive(user as UserWithRelations) as UserNoSensitiveWithRelations | null
  } catch (error) {
    reportIssue(
      'enableUser_IO ERROR',
      error)
    throw error
  }
}


export const setAccountStateByUser_IO = async (
  passedUser: UserNoSensitiveWithRelations,
  account_status: AccountStatus): Promise<UserNoSensitiveWithRelations | null> => {

  const isAccountActive = activeAccountStates.includes(account_status)

  try {
    const outputUserWithRelations = await DB_CLIENT.use.user.update({
      where: {user_id: passedUser.user_id},
      data: {
        permissions: isAccountActive
          ? PERMISSIONS_POLICY.runtimePermissionsSetsForEvents.ACTIVE_ACCOUNT
          : [],
        account: {
          update: {
            account_status
          }
        }
      },
      include: userRelationsEnabler
    })
    if (!outputUserWithRelations) {
      return null
    }

    return convertUserToUserNoSensitive(outputUserWithRelations as UserWithRelations) as UserNoSensitiveWithRelations
  } catch (error) {
    reportIssue(
      'setAccountStateByPassedUser_IO ERROR',
      error)
    throw error
  }
}


export const updateUserPermissions_IO = async ({
                                                 userPartial,
                                                 passedPermissions,
                                                 action
                                               }: {
  userPartial: Pick<User, 'user_id' | 'permissions'>
  passedPermissions: PermissionsCollection
  action: 'grant' | 'remove'
}): Promise<UserNoSensitiveWithRelations | null> => {
  const {
    user_id,
    permissions
  } = userPartial

  __debuggerGate(() => {
    console.log(
      'updateUserPermissions_IO, init user permissions: ',
      permissions)
  })

  __debuggerGate(() => {
    console.log(
      `updateUserPermissions_IO, passed user permissions for action ${action}: `,
      permissions)
  })

  let updatedPermissions: PermissionsCollection = []

  if (action === 'grant') {

    updatedPermissions =
      removeDuplicates<PermissionsCollection[0]>([...permissions,
        ...passedPermissions])

  } else if (action === 'remove') {

    updatedPermissions = permissions.filter((per) => !passedPermissions.includes(per))
  }

  __debuggerGate(() => {
    console.log(
      'updateUserPermissions_IO, updatedPermissions: ',
      updatedPermissions)
  })

  try {
    const outputUserWithRelations = await DB_CLIENT.use.user.update({
      where: {user_id},
      data: {
        permissions: updatedPermissions
      },
      include: userRelationsEnabler
    })
    if (!outputUserWithRelations) {
      return null
    }

    return convertUserToUserNoSensitive(outputUserWithRelations as UserWithRelations) as UserNoSensitiveWithRelations
  } catch (error) {
    reportIssue(
      'updateUserPermissions_IO ERROR',
      error)
    throw error
  }
}


export const setPaymentStateByUser_IO = async (
  user: UserNoSensitiveWithRelations,
  pricing_plan: Account['pricing_plan']): Promise<UserNoSensitiveWithRelations> => {
  try {
    const outputUserWithRelations = await DB_CLIENT.use.user.update({
      where: {
        user_id: user.user_id
      },
      data: {
        account: {
          update: {
            payment_status: PaymentStatusValue.PAID,
            account_expiration_date: null,
            upcoming_payment_date: null, //@TODO
            pricing_plan
          }
        }
      },
      include: userRelationsEnabler
    })
    if (!outputUserWithRelations) {
      throw undefined
    }
    const {
      password,
      ...userNoSensitiveWithRelations
    } = outputUserWithRelations as UserWithRelations
    return userNoSensitiveWithRelations
  } catch (error) {
    reportIssue(
      'setPaymentStateByPassedUser_IO ERROR',
      error)
    throw error
  }
}
