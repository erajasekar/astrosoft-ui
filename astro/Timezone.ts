import { formatDegMin, formatTimeZoneOffset } from '../mixins/FormatUtils'

export default class Timezone {
  timeZoneId: string = ''
  timeZoneOffset: string = ''
 
  constructor (timezoneResp? : any) {
    if (timezoneResp) {
      this.timeZoneId = timezoneResp.timeZoneId
      this.timeZoneOffset = formatTimeZoneOffset((timezoneResp.rawOffset + timezoneResp.dstOffset) / 3600)
    }
  }
}
