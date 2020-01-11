import { formatLatLng } from '../mixins/FormatUtils'

export class Place {
  placeName: string = ''
  lat: number = 0
  lng: number = 0
  location: string = ''
  initiazed: boolean = false

  constructor () {}

  fromSearchResult (placeDetail: any) {
    this.lat = placeDetail.geometry.location.lat()
    this.lng = placeDetail.geometry.location.lng()
    this.location = formatLatLng(this.lat, this.lng)
    this.placeName = placeDetail.formatted_address
    this.initiazed = true
  }
}

export default Place
