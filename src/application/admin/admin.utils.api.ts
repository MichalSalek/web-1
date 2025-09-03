import {MASTER_ADMIN_EMAIL} from '../../READONLY-shared-kernel/domain/admin/admin.config'
import {User} from '../../READONLY-shared-kernel/models/db_models'


export const isEmailAddressProhibited = (email: User['email']): boolean => {
  return email === MASTER_ADMIN_EMAIL
}
