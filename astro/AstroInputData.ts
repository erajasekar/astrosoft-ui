export default class AstroInputData {
    dateTimeValue: Date
    dateTimeString : string
    
    constructor() {
        this.dateTimeValue = new Date()
        this.dateTimeString = this.dateTimeValue.toISOString()
    }
}
