import Place from '../astro/Place'
import Timezone  from '../astro/Timezone'
import Constants from './Constants'

export function getTimezone () {
  const storedTz = localStorage.getItem(Constants.TIMEZONE_STORAGE_KEY)
  if (storedTz) {
    return JSON.parse(storedTz)
  }
}

export function setTimezone (tz : Timezone) {
  localStorage.setItem(Constants.TIMEZONE_STORAGE_KEY, JSON.stringify(tz))
}

export function removeTimezone (){
  localStorage.removeItem(Constants.TIMEZONE_STORAGE_KEY)
}

export function getPlace () {
  const storedPlace = localStorage.getItem(Constants.PLACE_STORAGE_KEY)
  if (storedPlace) {
    return JSON.parse(storedPlace)
  }
}

export function setPlace (place: Place) {
  localStorage.setItem(Constants.PLACE_STORAGE_KEY, JSON.stringify(place))
}

export function removePlace (){
  localStorage.removeItem(Constants.PLACE_STORAGE_KEY)
}
