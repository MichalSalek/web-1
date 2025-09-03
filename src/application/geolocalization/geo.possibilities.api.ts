import geoip from 'fast-geoip'
import {UserMetadata} from '../../READONLY-shared-kernel/models/user/user.types'


export const getCountryAndCity = async (props: Pick<UserMetadata, 'client_ip'>): Promise<string | null> => {
  const ip = props?.client_ip
  if (!ip) {
    return null
  }
  const geo = await geoip.lookup(ip)
  if (!geo) {
    return null
  }
  // reportIssue('getCountryAndCity NEW CONNECTION', {
  //   ip,
  //   geo
  // }, 'log')
  return `${geo.country}, ${geo.city}. Timezone: ${geo.timezone}`
}
