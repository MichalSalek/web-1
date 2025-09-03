import type {NextApiRequest, NextApiResponse} from 'next'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {userRelationsExtendedEnabler} from '../../../../../domain/user/user.config'
import {convertUserToUserNoSensitive} from '../../../../../domain/user/user.utils.api'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {USER_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/user/user.dto'
import {
  UserNoSensitiveWithRelationsExtended,
  UserWithRelationsExtended
} from '../../../../../READONLY-shared-kernel/models/user/user.types'
import {DB_CLIENT} from "../../../../../application/db/db.utils.api";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<USER_DTO_API_V1['GET_ALL']['REQUEST']>(
    req,
    res,
    {
      eventName: 'USER_GET_ALL',
      allowedHTTPMethod: 'get',
      validationFunction: undefined,
      businessLogic: async () => {
        try {
          const data = await DB_CLIENT.use.user.findMany({
            include: userRelationsExtendedEnabler,
            orderBy: {
              created_at: 'asc'
            }
          })
          if (data.length === 0) {
            res.status(getValidatedStatusCode(404))
              .json(getInfoEventWithPayloadDTO({
                event: 'NOT_FOUND',
                data: undefined
              }))

            return void undefined
          }

          const usersCollectionNoSensitive = data.map((user) => convertUserToUserNoSensitive(user as UserWithRelationsExtended) as UserNoSensitiveWithRelationsExtended)

          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<USER_DTO_API_V1['GET_ALL']['RESPONSE']>({
              event: 'USERS_FETCHED',
              data: usersCollectionNoSensitive
            }))


          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'USER_GET_ALL',
            e)

          return void undefined
        }
      }
    })
}

export default handler
