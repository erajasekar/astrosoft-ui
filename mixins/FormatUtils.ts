import { Location } from '../astro/Place'
import { toDegMin , toDegMinSec} from './AstroUtils'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DEG_SYM = '\u00B0'
const MIN_SYM = '\u2032'
const SEC_SYM = '\u2033'

export function formatDateTime (dateTime: Date) {
  return formatDateTimeWithHrMin(dateTime, dateTime.getHours(), dateTime.getMinutes());
}

export function formatDateTimeWithHrMin (dateTime: Date, hour: number, mins: number) {
  const date = dateTime.getDate()
  const month = MONTHS[dateTime.getMonth()]
  const year = dateTime.getFullYear()
  const ampm = hour >= 12 ? 'PM' : 'AM'
  return `${month} ${date}, ${year} ${hour === 0 ? '12' : hour}:` + `${mins}`.padStart(2, '0') + ` ${ampm}`
}

export function formatEndTime(endTime: string) {
  const hrmin = endTime.split(":")
  let hr = parseInt(hrmin[0])
  const min = parseInt(hrmin[1])
  let nextDay = ''
  let ampm = 'AM'
  if (hr >= 12) {
    ampm = 'PM'
    if (hr >= 24) {
      ampm = 'AM'
      nextDay = ", ( Next Day )"
    }
  }
  hr = hr % 12
  return `${padDigits(hr,2)}:${padDigits(min,2)} ${ampm} ${nextDay}`
}

export function formatDegMinSec (val: number, delim?: string) {
  const degMinSec = toDegMinSec(val)
  if (delim) {
    return `${padDigits(degMinSec.deg, 3)}${delim}${padDigits(degMinSec.min, 2)}${delim}${padDigits(degMinSec.sec, 2)}`
  } else {
    return `${padDigits(degMinSec.deg, 3)}${DEG_SYM} ${padDigits(degMinSec.min, 2)}${MIN_SYM} ${padDigits(degMinSec.sec, 2)}${SEC_SYM}`
  }
}

export function formatDegMin (val: number, delim?: string) {
  const degMin = toDegMin(val)
  if (delim) {
    return `${padDigits(degMin.deg, 2)}${delim}${padDigits(degMin.min, 2)}`
  } else {
    return `${padDigits(degMin.deg, 2)} ${DEG_SYM} ${padDigits(degMin.min, 2)} ${MIN_SYM}`
  }
}

export function formatLatLng (lat: number, lng: number) : Location {
  const latDir = lat > 0 ? ' N ' : ' S '
  const lngDir = lng > 0 ? ' E ' : ' W '
  return {
    lat: formatDegMin(lat),
    latDir,
    lng: formatDegMin(lng),
    lngDir
  }
}

function padDigits (val: number, size: number) {
  return `${val}`.padStart(size, '0')
}

export function formatTimeZoneOffset(timeZoneOffset: number) {
  const timeZoneSign = timeZoneOffset > 0 ? ' + ' : ' - '
  return `GMT  ${timeZoneSign} ${formatDegMin(timeZoneOffset, ' : ')}`
}

export function camel2title(camelCase: string) {
  var value = camelCase.replace( /([A-Z])/g, " $1" )
  return value.charAt(0).toUpperCase() + value.slice(1)
}
