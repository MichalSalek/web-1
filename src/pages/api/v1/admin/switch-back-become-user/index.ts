import {getDateNowInString} from '@msalek/utils'
import {NextApiRequest, NextApiResponse} from 'next'
import {SWITCH_BACK_TOKEN_NAME} from '../../../../../application/admin/becomeUser.config'
import {SESSION_TOKEN_KEY_NAME, TokenPayload} from '../../../../../application/auth/jwt/jwt.config'
import {generateSessionTokenAndSet} from '../../../../../application/auth/jwt/jwt.operations.api'
import {getDecodedTokenFromPassedExtended} from '../../../../../application/auth/jwt/jwt.utils.api'
import {reportIssue} from '../../../../../application/debugger/errorHandler.possibilities.api'
import {pushToEventLog_IO} from '../../../../../application/event-log/eventLogIO.operations.api'
import {getClientHeader, setClientHeader} from '../../../../../application/headers/headers.possibilities.api'
import {HTTPRequestHandlerMiddleware} from '../../../../../domain/http/http.middleware'
import {getGenericErrorWithDebuggerDTO} from '../../../../../domain/http/http.utils.api'
import {makeCurrentUser} from '../../../../../domain/user/user.utils.api'
import {getUser_IO} from '../../../../../domain/user/userIO.possibilities.api'
import {getDateInUTCString} from '../../../../../READONLY-shared-kernel/application/date/dayjs-adapter/date.adapter'
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from '../../../../../READONLY-shared-kernel/application/http/http.api'
import {ADMIN_DTO_API_V1} from '../../../../../READONLY-shared-kernel/models/admin/admin.dto'
import {UserNoSensitiveWithRelationsExtended} from '../../../../../READONLY-shared-kernel/models/user/user.types'
import {PERMISSIONS_POLICY} from '../../../../../READONLY-shared-kernel/policies/permissions.policy'
import {logoutUserAndDeleteSession_IO} from "../../../../../domain/user/userIO.operations.api";
import {CLEAR_THIS_HEADER_COMMAND_VALUE} from "../../../../../READONLY-shared-kernel/application/http/http.config";
import {DB_CLIENT} from "../../../../../application/db/db.utils.api";
import {Session} from "../../../../../READONLY-shared-kernel/models/db_models";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await HTTPRequestHandlerMiddleware<ADMIN_DTO_API_V1['SWITCH_BACK_BECOME_USER']['REQUEST']>(
    req,
    res,
    {
      eventName: 'SWITCH_BACK_BECOME_USER',
      allowedHTTPMethod: 'post',
      validationFunction: undefined,
      businessLogic: async (body, {currentUser}, metadata) => {

        try {

          const cleanAfterBecomeUserClosure = async () => {

            // Delete current session (If exists ofc. The BECOME_USER session could just time out or be lost).
            //
            await logoutUserAndDeleteSession_IO({
              req,
              res,
              payload: {
                user_id: currentUser.user_id,
                session_id: currentUser.session.session_id
              }
            })

            // Delete a token with backup session.
            //
            setClientHeader({
              req,
              res,
              payload: {
                name: SWITCH_BACK_TOKEN_NAME,
                value: CLEAR_THIS_HEADER_COMMAND_VALUE
              }
            })
          }


          // Get original user to switch back.
          //
          const extendedToken = await getClientHeader({
            req,
            res,
            payload: SWITCH_BACK_TOKEN_NAME
          })

          if (!extendedToken) {
            res.status(getValidatedStatusCode(404))
              .json(getInfoEventWithPayloadDTO({
                event: 'NOT_FOUND',
                data: undefined
              }))
            await cleanAfterBecomeUserClosure()
            return void undefined
          }


          // Decode a token payload to get original user identifier and get him from DB.
          //
          const fetchedToken = getDecodedTokenFromPassedExtended(extendedToken)
          const decodedToken = fetchedToken.decodedToken

          if (!decodedToken) {
            reportIssue(
              'SWITCH_BACK_BECOME_USER - no decodedToken.',
              fetchedToken)
            res.status(getValidatedStatusCode(404))
              .json(getInfoEventWithPayloadDTO({
                event: 'NOT_FOUND',
                data: undefined
              }))
            await cleanAfterBecomeUserClosure()
            return void undefined
          }

          const originalUser = await getUser_IO<UserNoSensitiveWithRelationsExtended>(
            {user_id: decodedToken.user_id},
            true)


          if (!originalUser) {
            reportIssue(
              'SWITCH_BACK_BECOME_USER - original user not found.',
              fetchedToken)
            res.status(getValidatedStatusCode(404))
              .json(getInfoEventWithPayloadDTO({
                event: 'NOT_FOUND',
                data: undefined
              }))
            await cleanAfterBecomeUserClosure()
            return void undefined
          }


          // Check permission of original user - to be sure the safety.
          //
          if (!PERMISSIONS_POLICY.utils
            .GET_PERMISSION_APPROVAL_FOR_EVENT(
              originalUser,
              'BECOME_USER')) {
            reportIssue(
              '!!! MAYBE ATTACK: User want to switch back to original user, '
              + 'but original user has not permission, to be become!',
              originalUser,
              'error')

            res.status(getValidatedStatusCode(401))
              .json(getInfoEventWithPayloadDTO({
                event: 'UNAUTHORIZED',
                data: undefined
              }))
            await cleanAfterBecomeUserClosure()
            return void undefined
          }


          const originalUserSessionID = decodedToken.session_id
          const originalUserSession = await DB_CLIENT.use.session.findUnique({
            where: {
              session_id: originalUserSessionID
            }
          }) as Session | null

          if (!originalUserSession) {
            reportIssue(
              'SWITCH_BACK_BECOME_USER - original user session not found.',
              originalUserSessionID)
            res.status(getValidatedStatusCode(401))
              .json(getInfoEventWithPayloadDTO({
                event: 'UNAUTHORIZED',
                data: undefined
              }))
            await cleanAfterBecomeUserClosure()
            return void undefined
          }


          await cleanAfterBecomeUserClosure()


          // Make and set new-old session with original user and his previous session.
          //
          const generateTokenPayload: TokenPayload = {
            user_id: originalUser.user_id,
            created_at: getDateNowInString({withTimestamp: true}),
            client_ip: originalUserSession.client_ip,
            language: originalUserSession.language,
            location: originalUserSession.location,
            user_agent: originalUserSession.user_agent,
            session_id: originalUserSessionID,
            expires_at: getDateInUTCString(originalUserSession.expires_at)
          }

          generateSessionTokenAndSet(
            {
              req,
              res,
              payload: generateTokenPayload
            },
            SESSION_TOKEN_KEY_NAME)


          const currentUserFromBackup = makeCurrentUser(
            originalUser,
            {
              session: originalUserSession,
              token: {
                extendedToken,
                decodedToken
              }
            })


          res.status(getValidatedStatusCode(200))
            .json(getInfoEventWithPayloadDTO<ADMIN_DTO_API_V1['SWITCH_BACK_BECOME_USER']['RESPONSE']>({
              event: 'USER_SWITCHED_BACK_TO_SELF',
              data: currentUserFromBackup
            }))


          void pushToEventLog_IO({
            eventName: 'USER_SWITCHED_BACK_TO_SELF',
            user: currentUserFromBackup,
            requestBody: body,
            metadata
          })


          return void undefined
        } catch (e) {
          res.status(getValidatedStatusCode(500))
            .json(getGenericErrorWithDebuggerDTO(
              'GENERAL_ERROR',
              e))
          reportIssue(
            'SWITCH_BACK_BECOME_USER',
            e)

          return void undefined
        }
      }
    })
}

export default handler
