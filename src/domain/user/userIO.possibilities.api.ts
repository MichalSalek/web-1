import {reportIssue} from '../../application/debugger/errorHandler.possibilities.api'
import {RoleValue, User} from '../../READONLY-shared-kernel/models/db_models'
import {UserNoSensitiveWithRelations, UserWithRelations} from '../../READONLY-shared-kernel/models/user/user.types'
import {defaultNewAccountSettings} from '../account/account.config'
import {userRelationsEnabler} from './user.config'
import {convertUserToUserNoSensitive} from './user.utils.api'
import {DB_CLIENT} from "../../application/db/db.utils.api";


export const getUser_IO = async <T>(
  props: Partial<Pick<User, 'user_id'>> & Partial<Pick<User, 'email'>> & Partial<Pick<User, 'password'>>,
  WITH_RELATIONS: boolean = false,
  PASSWORD_CHECK: boolean = false,
  RETURN_WITH_PASSWORD: boolean = false): Promise<null | T> => {
  const {password} = props
  if (PASSWORD_CHECK && !password) {
    reportIssue(
      'getUser - no password with password get-current enabled.',
      props,
      'warn')
    return null
  }
  const include = WITH_RELATIONS
    ? userRelationsEnabler
    : undefined

  const user = await DB_CLIENT.use.user.findUnique({
    where: {
      ...props,
      user_id: props?.user_id
    },
    include
  }) as User | UserWithRelations | null

  if (!user) {
    return null
  }

  if (RETURN_WITH_PASSWORD) {
    return user as T | null
  } else {
    return convertUserToUserNoSensitive(user as User) as T | null
  }
}


export const registerUser_IO = async (props: Pick<User, 'email' | 'password'>): Promise<null | UserNoSensitiveWithRelations> => {

  const user = await DB_CLIENT.use.user.create({
    data: {
      ...props,
      role: RoleValue.ACCOUNT_HOLDER,
      account: {
        create: defaultNewAccountSettings
      }
    },
    include: userRelationsEnabler
  })

  return convertUserToUserNoSensitive(user as UserWithRelations) as UserNoSensitiveWithRelations | null
}


export const deleteUser_IO = async (user_id: User['user_id']) => {
  if (!user_id) {
    reportIssue(
      'deleteUser_IO NO INPUT DATA',
      user_id)
    throw undefined
  }

  const user = await getUser_IO<UserNoSensitiveWithRelations>(
    {user_id},
    true)
  if (!user) {
    reportIssue(
      'deleteUser_IO NO USER FOUND',
      user_id)
    throw undefined
  }

  await DB_CLIENT.use.deletedUser.create({
    data: {
      user_id,
      body: JSON.stringify(user)
    }
  })

  return DB_CLIENT.use.user.delete({
    where: {user_id}
  })
}
