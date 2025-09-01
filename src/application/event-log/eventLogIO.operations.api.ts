import { fillUserMetadataWithLocation }          from '../../domain/user/user.utils.api'
import { getUser_IO }                            from '../../domain/user/userIO.possibilities.api'
import { EVENT_INFO_TYPE }                       from '../../READONLY-shared-kernel/domain/commands-and-queries/cqrs.types'
import { EventLog, UserNoSensitive }             from '../../READONLY-shared-kernel/models/db_models'
import { UserMetadata }                          from '../../READONLY-shared-kernel/models/user/user.types'
import { EVENT_LOG_STORE_POLICY }                from '../../READONLY-shared-kernel/policies/event_log.policy'
import { __debuggerGate }                        from '../debugger/debugger.utils.api'
import { PushEventLogToDB, pushEventLogToDB_IO } from './eventLogIO.possibilities.api'




export type PushToEventLog = {
  eventName: EVENT_INFO_TYPE,
  user?: Partial<UserNoSensitive> | null
  requestBody?: Object
  responseBody?: Object | null
  metadata?: UserMetadata
}
export const pushToEventLog_IO = async (props: PushToEventLog): Promise<EventLog | undefined> => {
  const {
          eventName,
          user,
          requestBody,
          responseBody,
          metadata
        } = props

  try {

    if (!EVENT_LOG_STORE_POLICY.utils.GET_PERMISSION_APPROVAL_TO_PUSH_EVENT_LOG(eventName)) {
      return undefined
    }

    const meta: Partial<PushEventLogToDB['meta']> = {}
    const payload: PushEventLogToDB['eventPayloadToStringify'] = {}

    // Find user_id in passed user:
    //
    if (user?.user_id) {
      meta.created_by_user_id = user.user_id
    } else

      // Try to find user_id, maybe by email:
      //
    {
      if ('email' in (
        user ?? {})) {
        const fetchedUser = await getUser_IO<UserNoSensitive>({email: user?.email})
        meta.created_by_user_id = fetchedUser?.user_id
      }
    }


    // Add an extra data responseBody to event log when exists:
    //
    responseBody && (
      () => {payload.responseBody = responseBody})()



    // Get metadata:
    //
    const userMetadata = await fillUserMetadataWithLocation(metadata)


    return await pushEventLogToDB_IO({
      eventLogType           : EVENT_LOG_STORE_POLICY.utils.GET_EVENT_LOG_TYPE_FOR_EVENT_LOG(eventName),
      eventName,
      meta                   : {...meta, ...userMetadata},
      eventPayloadToStringify: {
        requestBody,
        responseBody,
        user
      }
    })

  } catch (e) {
    __debuggerGate(() => {
      console.log(
        'PUSH TO EVENT LOG',
        e)
    })
  }
}
