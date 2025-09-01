import {activeAccountStates} from "../READONLY-shared-kernel/domain/user-and-account/user_and_account.config";
import {PERMISSIONS_POLICY} from "../READONLY-shared-kernel/policies/permissions.policy";
import {DB_CLIENT} from "../application/db/db.utils.api";

export const re_set_active_accounts = async () => {

  await DB_CLIENT.use.user.updateMany({
    where: {
      account: {
        account_status: {
          in: [...activeAccountStates]
        }

      }
    },
    data: {permissions: PERMISSIONS_POLICY.runtimePermissionsSetsForEvents.ACTIVE_ACCOUNT}
  })

}
