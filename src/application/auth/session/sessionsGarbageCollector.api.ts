import {
  dateApplication,
  nowDateIsSameOrAfterThanPassed
} from '../../../READONLY-shared-kernel/application/date/dayjs-adapter/date.adapter'
import {__debuggerGate} from '../../debugger/debugger.utils.api'
import {deleteSession_IO, getAllSessions_IO} from './sessionIO.possibilities.api'


export const checkAllSessionsAndDeactivateIfNeeded = async (): Promise<void> => {
  __debuggerGate(() => console.log('Unused sessions cleaning running...'))
  const sessions = await getAllSessions_IO()

  return new Promise(async (res) => {

    for (let i = 0; i < sessions.length; i++) {
      const expDate = sessions[i].expires_at
      if (nowDateIsSameOrAfterThanPassed(dateApplication(expDate))) { // If this date already comes…
        await deleteSession_IO(
          sessions[i].session_id,
          sessions[i].created_by_user_id)
      }
    }

    res()
  })
}
