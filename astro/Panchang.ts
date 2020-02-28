import { IInfoEntry , InfoEntry } from './InfoEntry'

export interface IPanchang {
  date: string
  weekday: string
  sunrise: string
  sunset: string
  paksha: string
  rahuKala: string
  yamaKanda: string
  nakshathra: IPanEvent
  thithi: IPanEvent
  yoga: IPanEvent
  karna: IKarna
  auspiciousTime: Array<String>
}

interface IPanEvent {
  name: string
  endTime: string
}

interface IKarna {
  first: IPanEvent
  second: IPanEvent
}

class Karna implements IKarna {
  first: IPanEvent
  second: IPanEvent

  constructor(data: any) {
    this.first = this.extractKarna(data.first)
    this.second = this.extractKarna(data.second)
  }

  extractKarna(event: any) {
    return { name: event.name, endTime: event.endTime }
  }
}

class PanEvent implements IPanEvent {
  name: string
  endTime: string

  constructor(data: any) {
    this.name = data.name
    this.endTime = data.endTime
  }
}

export class Panchang implements IPanchang {
  date: string
  weekday: string
  sunrise: string
  sunset: string
  paksha: string
  rahuKala: string
  yamaKanda: string
  nakshathra: IPanEvent
  thithi: IPanEvent
  yoga: IPanEvent
  karna: IKarna
  auspiciousTime: Array<String>


  constructor(data: any) {
    this.date = data.date
    this.weekday = data.weekday
    this.sunrise = data.sunrise
    this.sunset = data.sunset
    this.paksha = data.paksha
    this.rahuKala = data.rahuKala
    this.yamaKanda = data.yamaKanda
    this.nakshathra = new PanEvent(data.nakshathra)
    this.thithi = new PanEvent(data.thithi)
    this.yoga = new PanEvent(data.yoga)
    this.karna = new Karna(data.karna)
    this.auspiciousTime = data.auspiciousTime
  }

  get entries () : Array<InfoEntry> {
    return Object.keys(this).map(k => {
        const val: string = (<any>this)[k]
        console.log(val.toString())
        return new InfoEntry(this, k)
    })
  }
}
