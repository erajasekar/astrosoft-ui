import { formatDegMin } from '../mixins/FormatUtils'

export class Timezone {
  timeZoneId: string = ''
  timeZoneOffset: number = 0
  timeZoneFormatted: string = ''
  initialized: boolean = false

  constructor (timezoneResp? : any) {
    if (timezoneResp) {
      this.timeZoneId = timezoneResp.timeZoneId
      this.timeZoneOffset = (timezoneResp.rawOffset + timezoneResp.dstOffset) / 3600
      const timeZoneSign = this.timeZoneOffset > 0 ? ' + ' : ' - '
      this.timeZoneFormatted = `${this.timeZoneId} ( GMT  ${timeZoneSign} ${formatDegMin(this.timeZoneOffset, ' : ')})`
      this.initialized = true
    }
  }

  get isInitialized () {
      return this.initialized
  }

  clear () {
      this.timeZoneId = ''
      this.timeZoneOffset = 0
      this.timeZoneFormatted = ''
  }
}