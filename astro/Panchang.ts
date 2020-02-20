import { IInfoEntry , InfoEntry } from './InfoEntry'

export interface IPanchang {
  date: string
  weekday: string
  sunrise: string
  sunset: string
  paksha: string
  rahuKala: string
  yamaKanda: string
  nakshathra: PanEvent
  thithi: PanEvent
  yoga: PanEvent
  karna: IKarna
}

interface PanEvent {
  name: string
  endTime: string
}

interface IKarna {
  first: PanEvent
  second: PanEvent
}

class Karna implements IKarna {
  first: PanEvent
  second: PanEvent

  constructor(data: any) {
    this.first = this.extractKarna(data.first)
    this.second = this.extractKarna(data.second)
  }

  extractKarna(event: any) {
    return { name: event.name, endTime: event.endTime }
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
  nakshathra: PanEvent
  thithi: PanEvent
  yoga: PanEvent
  karna: IKarna

  constructor(data: any) {
    this.date = data.date
    this.weekday = data.weekday
    this.sunrise = data.sunrise
    this.sunset = data.sunset
    this.paksha = data.paksha
    this.rahuKala = data.rahuKala
    this.yamaKanda = data.yamaKanda
    this.nakshathra = { name: data.nakshathra.name, endTime: data.nakshathra.endTime }
    this.thithi = { name: data.thithi.name, endTime: data.thithi.endTime }
    this.yoga = { name: data.yoga.name, endTime: data.yoga.endTime }
    this.karna = new Karna(data.karna)
  }

  get entries () : Array<InfoEntry> {
    return Object.keys(this).map(k => new InfoEntry(this, k) )
  }
}
