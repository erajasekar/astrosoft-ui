export interface IInfoEntry {
  name: string
  value: string
}

export class InfoEntry implements IInfoEntry {
  name: string
  value: string

  constructor(data: any, key: any) {
    this.name = key
    this.value = data[key]
  }
}
