import { Location } from '../astro/Place'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatDateTime (dateTime: Date) {
  const date = dateTime.getDate()
  const month = MONTHS[dateTime.getMonth()]
  const year = dateTime.getFullYear()
  const hour = dateTime.getHours() % 12
  const ampm = dateTime.getHours() >= 12 ? 'PM' : 'AM'
  const mins = dateTime.getMinutes()
  return `${month} ${date}, ${year} ${hour === 0 ? '12' : hour} :` + `${mins}`.padStart(2, '0') + ` ${ampm}`
}

export function formatDegMinSec (val: number, delim: string) {
  const absVal = Math.abs(val)
  const deg = Math.floor(absVal)
  const rem = (absVal - deg) * 60
  const min = Math.floor(rem)
  const secs = Math.floor((rem - min) * 60)
  const result = `${padDigits(deg, 3)}${delim}${padDigits(min, 2)}${delim}${padDigits(secs, 2)}`
  return result
}

export function formatDegMin (val: number, delim: string) {
  const absVal = Math.abs(val)
  const deg = Math.floor(absVal)
  const rem = (absVal - deg) * 60
  const min = Math.floor(rem)
  const result = `${padDigits(deg, 2)}${delim}${padDigits(min, 2)}`
  return result
}

export function formatLatLng (lat: number, lng: number) : Location {
  const latDir = lat > 0 ? ' N ' : ' S '
  const lngDir = lng > 0 ? ' E ' : ' W '
  return {
    lat: formatDegMin(lat, ' : '),
    latDir,
    lng: formatDegMin(lng, ' : '),
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