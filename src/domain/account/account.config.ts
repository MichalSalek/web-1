import {AccountStatusValue, PaymentStatusValue} from '../../READONLY-shared-kernel/models/db_models'
import {Prisma} from "../../prisma/js-client";
import AccountCreateWithoutCreated_by_userInput = Prisma.AccountCreateWithoutCreated_by_userInput;
import AccountUpdateWithoutCreated_by_userInput = Prisma.AccountUpdateWithoutCreated_by_userInput;


export const defaultNewAccountSettings: AccountCreateWithoutCreated_by_userInput = {
  pricing_plan: 0,
  account_status: AccountStatusValue.NOT_ACTIVE,
  payment_status: PaymentStatusValue.UNPAID,
  gallery_config: {
    create: {
      records_traits: ['Jednolite', 'Ombre', 'Magnetyczne', 'One Stroke', 'Wzorki', 'Naklejki'],
      records_color_traits: ['Wielokolorowe', 'Czerwone', 'Niebieskie']
    }
  }
} as const


export const defaultNewMasterAdminSettings: AccountCreateWithoutCreated_by_userInput = {
  pricing_plan: 6,
  account_status: AccountStatusValue.ACTIVE,
  payment_status: PaymentStatusValue.PAID,
  gallery_config: {
    create: {
      records_traits: ['Jednolite', 'Ombre', 'Magnetyczne', 'One Stroke', 'Wzorki', 'Naklejki'],
      records_color_traits: ['Wielokolorowe', 'Czerwone', 'Niebieskie']
    }
  }
} as const

export const updateNewMasterAdminSettings: AccountUpdateWithoutCreated_by_userInput = {
  pricing_plan: 6,
  account_status: AccountStatusValue.ACTIVE,
  payment_status: PaymentStatusValue.PAID,
  gallery_config: {
    update: {
      records_traits: ['Jednolite', 'Ombre', 'Magnetyczne', 'One Stroke', 'Wzorki', 'Naklejki'],
      records_color_traits: ['Wielokolorowe', 'Czerwone', 'Niebieskie']
    }
  }
} as const
