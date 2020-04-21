import Place from "./Place"
import Timezone from "./Timezone"

export default class AstroInputData {
    dateTimeValue: Date
    place: Place
    timezone: Timezone
    isPlaceSet: boolean
    
    constructor() {
        this.dateTimeValue = new Date()
        this.place = new Place()
        this.timezone = new Timezone()
        this.isPlaceSet = false
    }
}
