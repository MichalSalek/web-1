import {NextApiWithOptionalPayload} from '../../../domain/http/http.types'
import {Session, SessionModeValue, User} from '../../../READONLY-shared-kernel/models/db_models'
import {CurrentUser} from '../../../READONLY-shared-kernel/models/user/user.types'
import {__debuggerGate} from '../../debugger/debugger.utils.api'
import {reportIssue} from '../../debugger/errorHandler.possibilities.api'
import {DB_CLIENT} from "../../db/db.utils.api";


export const getSession_IO = async ({session_id}: Record<'session_id', Session['session_id']>): Promise<Session | null> => {
  return (
    await DB_CLIENT.use.session.findUnique({
      where: {
        session_id
      }
    }) as Session | null)
}


export const getAllSessions_IO = async (): Promise<Session[]> => {
  return (
    await DB_CLIENT.use.session.findMany({
      orderBy: {
        last_used: 'asc'
      }
    }) as Session[] ?? [])
}


export const getAllSessionsByUser_IO = async (id: CurrentUser['user_id'], sessionModeStandardOnly = true): Promise<Session[]> => {
  return (
    await DB_CLIENT.use.session.findMany({
      where: {
        created_by_user_id: id,
        session_mode: sessionModeStandardOnly
          ? SessionModeValue.STANDARD
          : undefined
      },
      orderBy: {
        last_used: 'asc'
      }
    }) as Session[])
}


export const deleteSession_IO = async (
  session_id: Session['session_id'] | undefined,
  user_id: User['user_id'] | undefined): Promise<Session | null> => {
  try {
    if (!session_id || !user_id) {
      __debuggerGate(() => console.log(
        'deleteSession_IO - no payload.',
        `session_id: ${!!session_id}, user_id: ${!!user_id}`))
      return null
    }
    return await DB_CLIENT.use.session.delete({
      where: {
        session_id,
        created_by_user: {
          user_id
        }
      }
    }) as Session
  } catch (error: any) {
    if (!error) {
      return null
    }
    if (error.code === 'P2025') {
      return null // P2025 = 'Record to delete does not exist.'
    }
    reportIssue(
      'deleteSession',
      error)
    throw error
  }
}


export const deleteAllSessions_IO = async (props: NextApiWithOptionalPayload<User['user_id']>): Promise<boolean> => {
  try {
    if (!props.payload) {
      __debuggerGate(() => console.log(
        'deleteAllSessions_IO - no payload.',
        `props.payload: ${!!props.payload}`))
      return false
    }
    const result = await DB_CLIENT.use.session.deleteMany({
      where: {
        created_by_user: {
          user_id: props.payload
        }
      }
    })
    return Boolean(result.count)
  } catch (error) {
    reportIssue(
      'deleteAllSessions_IO ERROR',
      error)
    throw error
  }
}
