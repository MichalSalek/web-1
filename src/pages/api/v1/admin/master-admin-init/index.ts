import type {NextApiRequest, NextApiResponse} from 'next'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {defaultNewMasterAdminSettings, updateNewMasterAdminSettings} from '../../../../../domain/account/account.config'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {MASTER_ADMIN_EMAIL} from '../../../../../READONLY-shared-kernel/domain/admin/admin.config'
import {ADMIN_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/admin/admin.dto'
import {RoleValue} from '../../../../../READONLY-shared-kernel/models/db_models'
import {DB_CLIENT} from "../../../../../application/db/db.utils.api";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<ADMIN_DTO_API_V1['MASTER_ADMIN_INIT']['REQUEST']>(
    req,
    res,
    {
      eventName: 'MASTER_ADMIN_INIT',
      allowedHTTPMethod: 'get',
      validationFunction: undefined,
      businessLogic: async (body) => {
        try {

          await DB_CLIENT.use.user.upsert({
            where: {
              email: MASTER_ADMIN_EMAIL
            },
            create: {
              email: MASTER_ADMIN_EMAIL,
              password: '123123', //@TODO do env variabli
              role: RoleValue.MASTER_ADMIN,
              display_name: 'MASTER ADMIN',
              account: {
                create: defaultNewMasterAdminSettings
              }

            },
            update: {
              role: RoleValue.MASTER_ADMIN,
              account: {
                upsert: {
                  update: updateNewMasterAdminSettings,
                  create: defaultNewMasterAdminSettings
                }
              }
            }
          })

          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<ADMIN_DTO_API_V1['MASTER_ADMIN_INIT']['RESPONSE']>({
              event: 'SUCCESS',
              data: undefined
            }))


        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'MASTER_ADMIN_INIT',
            e)
          return void undefined
        }
      }
    })
}

export default handler
