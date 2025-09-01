import {DB_CLIENT} from "../../application/db/db.utils.api";
import {IDType} from "../../READONLY-shared-kernel/application/application.types";
import {__debuggerGate} from "../../application/debugger/debugger.utils.api";
import {GalleryConfig, GalleryRecord} from "../../READONLY-shared-kernel/models/db_models";
import {Trait} from "../../READONLY-shared-kernel/domain/gallery/gallery.types";
import {reportIssue} from "../../application/debugger/errorHandler.possibilities.api";
import cloudinary from "./cloudinary-adapter/cloudinary.adapter";
import {CloudinaryType} from "./cloudinary-adapter/cloudinary.types";
import {GALLERY_DTO_API_V1} from "../../READONLY-shared-kernel/models/gallery/gallery.dto";
import {VALIDATION_POLICY} from "../../READONLY-shared-kernel/policies/validation.policy";


export const getGalleryConfig_IO = async (accountID: IDType): Promise<GalleryConfig | null> => {
  if (!accountID) {
    __debuggerGate(() => console.log('getGalleryConfig_IO: no accountID.'))
    return null
  }
  return DB_CLIENT.use.galleryConfig.findUnique({
    where: {
      created_by_account_id: accountID
    }
  })
}

export const createTrait_IO = async (
  {
    accountID,
    trait,
    colorTrait
  }:
  {
    accountID: IDType
    trait?: Trait
    colorTrait?: Trait
  }): Promise<void> => {
  if (!accountID) {
    __debuggerGate(() => console.log(`createTrait_IO: accountID ${accountID}, train ${trait}`))
    return void undefined
  }

  if (trait) {
    const transformed = VALIDATION_POLICY.utils.normalizeStringCapitalizedWords(trait)
    await DB_CLIENT.use.galleryConfig.upsert({
      create: {
        records_traits: {
          set: [transformed]
        },
        created_by_account_id: accountID
      },
      update: {
        records_traits: {
          push: transformed
        }
      },
      where: {
        created_by_account_id: accountID
      },
    })
  }
  if (colorTrait) {
    const transformed = VALIDATION_POLICY.utils.normalizeStringCapitalizedWords(colorTrait)
    await DB_CLIENT.use.galleryConfig.upsert({
      create: {
        records_color_traits: {
          set: [transformed]
        },
        created_by_account_id: accountID
      },
      update: {
        records_color_traits: {
          push: transformed
        }
      },
      where: {
        created_by_account_id: accountID
      },
    })
  }
}

export const deleteAssetFromVendor = async (assetID: CloudinaryType['asset_id']): Promise<void> => {
  try {
    return await cloudinary.uploader.destroy(assetID)
  } catch (error) {
    reportIssue('deleteAssetFromVendor', error);
  }
}


export const createGalleryRecord_IO = async (
  {
    created_by_account_id,
    asset_url,
    asset_traits,
    asset_color_traits
  }: Partial<GalleryRecord>): Promise<void> => {
  if (!created_by_account_id || !asset_url) {
    __debuggerGate(() => console.log(`createGalleryRecord_IO: accountID ${created_by_account_id}`))
    return void undefined
  }

  await DB_CLIENT.use.galleryRecord.create({
    data: {
      created_by_account_id,
      asset_url,
      asset_traits,
      asset_color_traits,
    }
  })
}


export const updateGalleryRecord_IO = async (props: Partial<GalleryRecord>): Promise<void> => {
  const
    {
      created_by_account_id,
      gallery_record_id,
      asset_url,
      asset_traits,
      asset_color_traits
    } = props
  if (!created_by_account_id || !asset_url) {
    __debuggerGate(() => console.log(`updateGalleryRecord_IO: accountID ${created_by_account_id}`))
    return void undefined
  }

  await DB_CLIENT.use.galleryRecord.update({
    data: {
      asset_traits,
      asset_color_traits,
    },
    where: {
      gallery_record_id,
      created_by_account_id
    },
  })
}


export const getGalleryRecords_IO = async (props: Partial<GalleryRecord> & GALLERY_DTO_API_V1['GET_GALLERY_RECORDS']['REQUEST']) => {
  const {
    created_by_account_id,
    gallery_record_id,
    asset_traits = [],
    asset_color_traits = [],
    apply_strict_filter
  } = props
  if (!created_by_account_id) {
    __debuggerGate(() => console.log(`getGalleryRecords_IO: accountID ${created_by_account_id}`))
    return []
  }

  return DB_CLIENT.use.galleryRecord.findMany({
    where:
      {
        gallery_record_id,
        created_by_account_id,

        asset_traits:
          asset_traits.length === 0 ? undefined :
            (
              apply_strict_filter ? {hasEvery: asset_traits} : {hasSome: asset_traits}
            ),

        asset_color_traits:
          asset_color_traits.length === 0 ? undefined :
            (
              apply_strict_filter ? {hasEvery: asset_color_traits} : {hasSome: asset_color_traits}
            )

      }
  })
}
