import { formatDegMin } from '../mixins/FormatUtils'

export default class Timezone {
  timeZoneId: string = ''
  timeZoneOffset: number = 0
  timeZoneFormatted: string = ''

  constructor (timezoneResp? : any) {
    if (timezoneResp) {
      this.timeZoneId = timezoneResp.timeZoneId
      this.timeZoneOffset = (timezoneResp.rawOffset + timezoneResp.dstOffset) / 3600
      const timeZoneSign = this.timeZoneOffset > 0 ? ' + ' : ' - '
      this.timeZoneFormatted = `${this.timeZoneId} ( GMT  ${timeZoneSign} ${formatDegMin(this.timeZoneOffset, ' : ')})`
    }
  }
}
