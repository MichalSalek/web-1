import { getDateNowInString }                                                                                  from '@msalek/utils'
import dayjs                                                                                                   from 'dayjs'
import request_ip                                                                                              from 'request-ip'
import { NextApiWithOptionalPayload }                                                                          from '../../../domain/http/http.types'
import { fillUserMetadataWithLocation }                                                                        from '../../../domain/user/user.utils.api'
import { logoutUserAndDeleteSession_IO }                                                                       from '../../../domain/user/userIO.operations.api'
import { getNowInUTCString, nowDateIsSameOrAfterThanPassed }                                                   from '../../../READONLY-shared-kernel/application/date/dayjs-adapter/date.adapter'
import { getInfoEventWithPayloadDTO }                                                                          from '../../../READONLY-shared-kernel/application/http/http.api'
import { Session, SessionMode, SessionModeValue }                                                              from '../../../READONLY-shared-kernel/models/db_models'
import { UserMetadata }                                                                                        from '../../../READONLY-shared-kernel/models/user/user.types'
import { __debuggerGate }                                                                                      from '../../debugger/debugger.utils.api'
import { reportIssue }                                                                                         from '../../debugger/errorHandler.possibilities.api'
import { GetSessionAndTokenReturn }                                                                            from '../auth.types'
import { checkRefreshTokenAndSessionNeed, getRefreshedSessionExpDateString, makeTokenPayloadFromDecodedToken } from '../auth.utils.api'
import { SESSION_TOKEN_KEY_NAME, TokenPayload }                                                                from '../jwt/jwt.config'
import { generateSessionTokenAndSet }                                                                          from '../jwt/jwt.operations.api'
import { deleteSessionToken, getExtendedEncodedToken }                                                         from '../jwt/jwt.possibilities.api'
import { ExtendedEncodedAndDecodedToken }                                                                      from '../jwt/jwt.types'
import { getDecodedTokenFromPassedExtended }                                                                   from '../jwt/jwt.utils.api'
import { getSession_IO }                                                                                       from './sessionIO.possibilities.api'
import {DB_CLIENT} from "../../db/db.utils.api";




export const isSessionExists_IO = async ({session_id}: Record<'session_id', Session['session_id'] | undefined>) => {
  if (!session_id) {
    return false
  }

  try {
    const session = await getSession_IO({session_id})

    if (!session) {
      __debuggerGate(() => console.log(
        'isSessionExists_IO - nope.',
        session))
      return false
    }
    return Boolean(session)
  } catch (error) {
    reportIssue(
      'isSessionExists_IO ERROR',
      error)
    throw error
  }
}


export const generateSessionAndSetToken_IO = async (
  props: NextApiWithOptionalPayload<Pick<TokenPayload, 'user_id'> & Partial<UserMetadata>>,
  session_mode: SessionMode = SessionModeValue.STANDARD): Promise<GetSessionAndTokenReturn> => {
  const {
          payload,
          req,
          res
        } = props
  if (!payload) {
    reportIssue(
      'generateSessionAndSetToken NO PAYLOAD',
      {
        payload,
        req
      })
    throw undefined
  }
  const {
          user_id,
          user_agent,
          language
        } = payload
  const client_ip = payload?.client_ip ?? request_ip.getClientIp(req)

  try {
    const userMetadata = await fillUserMetadataWithLocation({
      client_ip,
      language,
      user_agent
    })
    const expires_at = getRefreshedSessionExpDateString()
    const newSession = await DB_CLIENT.use.session.create({
      data: {
        session_mode,
        client_ip      : userMetadata.client_ip,
        location       : userMetadata.location,
        user_agent     : userMetadata.user_agent,
        language       : userMetadata.language,
        expires_at,
        created_by_user: {
          connect: {user_id}
        }
      }
    })

    const generateTokenPayload: TokenPayload = {
      user_id   : user_id,
      created_at: getDateNowInString({withTimestamp: true}),
      client_ip : userMetadata.client_ip ?? null,
      location  : userMetadata.location ?? null,
      user_agent: userMetadata.user_agent ?? null,
      language  : userMetadata.language ?? null,
      session_id: newSession.session_id,
      expires_at
    }
    const generatedToken = generateSessionTokenAndSet(
      {
        req,
        res,
        payload: generateTokenPayload
      },
      SESSION_TOKEN_KEY_NAME)
    if (!generatedToken) {
      reportIssue(
        'generateSessionAndSetToken NO TOKEN',
        payload)
      throw undefined
    }

    return (
      {
        session: newSession as Session,
        token  : generatedToken
      })

  } catch (error) {
    reportIssue(
      'generateSessionAndSetToken',
      error)
    throw error
  }
}



export const isSessionExpired = (date?: Date): boolean | null => {
  if (!date) {
    return null
  }
  return nowDateIsSameOrAfterThanPassed(dayjs(date))
}


export const getAndRefreshCurrentSessionAndToken_IO = async (
  props: NextApiWithOptionalPayload,
  forceRefreshTokenAndSession: boolean = false): Promise<GetSessionAndTokenReturn | null> => {

  const extendedToken = await getExtendedEncodedToken(props)
  if (!extendedToken) {
    __debuggerGate(() => console.log('getAndRefreshCurrentSessionAndToken_IO NO extendedToken - return null.'))
    return null
  }
  __debuggerGate(() => console.log(`getAndRefreshCurrentSessionAndToken_IO extendedToken length: ${extendedToken.length}`))

  try {
    const fetchedToken = getDecodedTokenFromPassedExtended(extendedToken)
    const decodedToken = fetchedToken.decodedToken
    __debuggerGate(() => console.log('getAndRefreshCurrentSessionAndToken_IO decodedToken:'))
    __debuggerGate(() => console.log(decodedToken))
    __debuggerGate(() => console.log(JSON.stringify(decodedToken, null, 2)))
    if (!decodedToken) {
      __debuggerGate(() => console.log('getAndRefreshCurrentSessionAndToken_IO NO decodedToken - return null.'))
      return null
    }

    const sessionFromFoundUser = await getSession_IO({session_id: decodedToken.session_id})

    __debuggerGate(() => console.log(
      'getAndRefreshCurrentSessionAndToken_IO sessionFromFoundUser, session_id: ',
      sessionFromFoundUser?.session_id))

    if (!sessionFromFoundUser) {
      return null
    }

    // Session expiration check.
    //
    if (isSessionExpired(sessionFromFoundUser.expires_at)) {
      await logoutUserAndDeleteSession_IO({
        ...props,
        payload: {
          user_id   : sessionFromFoundUser.created_by_user_id,
          session_id: sessionFromFoundUser.session_id
        }
      })
      throw getInfoEventWithPayloadDTO({
        event: 'SESSION_EXPIRED',
        data : undefined
      })
    }

    // console.log('po usunięciu sesji mnie nie powinno tu być') // @TODO SPRAWDZIĆ COŚ ZA CZĘSTO LECI.... ZDEBUGOWAĆ @TODO

    const ifTokenAndSessionShouldBeRefreshedByElapsedTime = checkRefreshTokenAndSessionNeed(decodedToken.expires_at)
    const ifTokenAndSessionShouldBeRefreshed = forceRefreshTokenAndSession || ifTokenAndSessionShouldBeRefreshedByElapsedTime
    const expires_at = getRefreshedSessionExpDateString()

    __debuggerGate(() => console.log(
      'getAndRefreshCurrentSessionAndToken_IO ifTokenAndSessionShouldBeRefreshedByElapsedTime: ',
      ifTokenAndSessionShouldBeRefreshedByElapsedTime))
    __debuggerGate(() => console.log(
      'getAndRefreshCurrentSessionAndToken_IO ifTokenAndSessionShouldBeRefreshed: ',
      ifTokenAndSessionShouldBeRefreshed))


    const fetchedSession = await DB_CLIENT.use.session.update({
      where: {
        session_id: sessionFromFoundUser.session_id
      },
      data : {
        last_used : getNowInUTCString(),
        expires_at: ifTokenAndSessionShouldBeRefreshed
                    ? expires_at
                    : undefined
      }
    })

    let newToken: ExtendedEncodedAndDecodedToken | undefined = undefined
    if (ifTokenAndSessionShouldBeRefreshed) {
      const tokenPayload = makeTokenPayloadFromDecodedToken(decodedToken)
      await deleteSessionToken(props)
      newToken = generateSessionTokenAndSet(
        {
          ...props,
          payload: {
            ...tokenPayload,
            expires_at
          }
        },
        SESSION_TOKEN_KEY_NAME)
      if (typeof newToken === 'undefined') {
        reportIssue(
          'getAndUpdateRefreshedSessionAndToken newToken NO TOKEN',
          newToken)
        return null
      }
    }

    return (
      {
        session: fetchedSession as Session,
        token  : ifTokenAndSessionShouldBeRefreshed
                 ? newToken as ExtendedEncodedAndDecodedToken
                 : fetchedToken
      })

  } catch (error: any | undefined) {
    if (error?.code === 'P2025') {
      return null // P2025 = 'Record to update not found.'
    }
    reportIssue(
      'getCurrentSessionAndToken',
      error)
    await deleteSessionToken(props)
    throw error
  }
}
