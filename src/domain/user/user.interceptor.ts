import {reportIssue} from '../../application/debugger/errorHandler.possibilities.api'
import {
  dateApplication,
  nowDateIsSameOrAfterThanPassed
} from '../../READONLY-shared-kernel/application/date/dayjs-adapter/date.adapter'
import {AccountStatusValue, PaymentStatusValue} from '../../READONLY-shared-kernel/models/db_models'
import {CurrentUser, UserNoSensitiveWithRelations} from '../../READONLY-shared-kernel/models/user/user.types'
import {USER_POLICY} from '../../READONLY-shared-kernel/policies/user.policy'
import {setAccountStateByUser_IO} from './userIO.operations.api'


const accountExpiringInterceptor = async (user: UserNoSensitiveWithRelations): Promise<UserNoSensitiveWithRelations> => {
  if (!user || !user.account) {
    reportIssue(
      'accountExpiringInterceptor NO INPUT DATA',
      user)
    return user
  }

  // Impact for an ACTIVE account holders only.
  if (!USER_POLICY.utils.IS_USER_HAS_ACTIVE_ACCOUNT(user)) {
    return user
  }
  const expDate = user.account.account_expiration_date

  // [0] If a user has expiration date…
  if (Boolean(expDate)) {

    // [1] and this date already comes…
    if (nowDateIsSameOrAfterThanPassed(dateApplication(expDate))) {

      // [2] but user has still paid an account.
      if (user.account.payment_status === PaymentStatusValue.PAID) {
        reportIssue(
          'USER HAS PAID ACCOUNT, BUT DATE OF ACCOUNT EXPIRED!!! Bug detected.',
          user,
          'error')
        return user

        // [2] Performance guard - no need to perform if the account is expired already.
      } else if (user.account.account_status === AccountStatusValue.EXPIRED) {
        return user

        // [2] set EXPIRED flag on user's account.
      } else {
        return await setAccountStateByUser_IO(
          user,
          AccountStatusValue.EXPIRED) ?? user
      }

      // [1] If this date doesn't come yet…
    } else {

      // [2] Performance guard - no need to perform - expiring is in progress already.
      if (user.account.account_status === AccountStatusValue.EXPIRING_IN_PROGRESS) {
        return user

        // [2] set EXPIRING_IN_PROGRESS flag on user's account.
      } else {
        return await setAccountStateByUser_IO(
          user,
          AccountStatusValue.EXPIRING_IN_PROGRESS) ?? user
      }
    }
  }

  // [0] User has NO expiration date, leave him as he came.
  return user
}


export const currentUserEntityInterceptor = async (user: UserNoSensitiveWithRelations | CurrentUser | null | undefined): Promise<UserNoSensitiveWithRelations | CurrentUser | null | undefined> => {
  if (!user) {
    return null
  }
  const accountHolderExpiringInterceptorOutput = await accountExpiringInterceptor(user)
  if (!accountHolderExpiringInterceptorOutput) {
    return user
  }

  return {
    ...user, ...accountHolderExpiringInterceptorOutput
  }
}
