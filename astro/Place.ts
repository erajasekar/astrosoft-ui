import { formatLatLng } from '../mixins/FormatUtils'

export class Place {
  placeFormatted: string = ''
  placeName: string = ''
  lat: number = 0
  lng: number = 0
  location: string = ''
  initialized: boolean = false

  constructor (placeDetail?: any) {
    if (placeDetail) {
      this.lat = placeDetail.geometry.location.lat()
      this.lng = placeDetail.geometry.location.lng()
      this.location = formatLatLng(this.lat, this.lng)
      this.placeFormatted = placeDetail.formatted_address
      this.placeName = placeDetail.name
      this.initialized = true
    } 
  }

  get isInitialized () {
      return this.initialized
  }

  clear () {
      this.initialized = false
      this.placeName = ''
      this.placeFormatted = ''
      this.lat = 0
      this.lng = 0
      this.location = ''
  }
}



export default Place
