import { formatLatLng } from '../mixins/FormatUtils'

export interface Location {
  lat: string
  latDir : string
  lng: string
  lngDir : string
}

export default class Place {
  placeFormatted: string = ''
  placeName: string = ''
  lat: number = 0
  lng: number = 0
  location: Location = {lat:'', latDir:'', lng:'', lngDir:''} 

  constructor (placeDetail?: any) {
    if (placeDetail) {
      this.lat = placeDetail.geometry.location.lat()
      this.lng = placeDetail.geometry.location.lng()
      this.location = formatLatLng(this.lat, this.lng)
      this.placeFormatted = placeDetail.formatted_address
      this.placeName = placeDetail.name
    }
  }
}

