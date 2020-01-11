import { formatLatLng } from '../mixins/FormatUtils'

export class Place {
  placeName: string = ''
  lat: number = 0
  lng: number = 0
  location: string = ''
  initiazed: boolean = false

  constructor (placeDetail?: any) {
    if (placeDetail) {
      console.log('raja' + placeDetail)
      this.lat = placeDetail.geometry.location.lat()
      this.lng = placeDetail.geometry.location.lng()
      this.location = formatLatLng(this.lat, this.lng)
      this.placeName = placeDetail.formatted_address
      this.initiazed = true
    } else {
      this.initiazed = false
    }
  }

  isPlaceSet () {
      return this.initiazed
  }

  clear () {
      this.initiazed = false
      this.placeName = ''
      this.lat = 0
      this.lng = 0
      this.location = ''
  }
}



export default Place
