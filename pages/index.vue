<template>
  <div class="container mx-auto">
    <div>
      <logo />
      <form class="mt-10 w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >Date</label>
          </div>
          <div class="md:w-2/3">
            <datetime
              id="date"
              v-model="dateTimeString"
              type="datetime"
              input-class="bg-gray-200 appearance-none border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              auto
              use12-hour
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-2/3">
            <google-places-autocomplete
              @resultChanged="placeDetail => updatePlace(placeDetail)"
              @resultCleared="() => place = null"
            >
              <div slot="input" slot-scope="{ context, events, actions }">
                <label for="locationInput" class="md:w-1/3 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Place</label>
                <input
                  id="locationInput"
                  v-model="context.input"
                  @focus="events.inputHasReceivedFocus"
                  @input="events.inputHasChanged"
                  @keydown.enter.prevent="actions.selectItemFromList"
                  @keydown.down.prevent="actions.shiftResultsSelection"
                  @keydown.up.prevent="actions.unshiftResultsSelection"
                  type="search"
                  class="p-4 w-full max-w-sm outline-none rounded-t-lg"
                  placeholder="Type city name to search ..."
                  autocomplete="of"
                >
              </div>

              <span slot="item" slot-scope="{ place }" class="block p-2">
                {{ place.description }}
              </span>
              <span slot="activeItem" slot-scope="{ place }" class="block p-2 rounded bg-green-lightest font-bold">
                {{ place.description }}
              </span>
            </google-places-autocomplete>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >Location</label>
          </div>
          <div class="md:w-2/3">
            {{ location }}
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >Timezone</label>
          </div>
          <div class="md:w-2/3">
            {{ timeZoneFormatted }}
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3" />
          <div class="md:w-2/3">
            <button
              v-on:click="calculate"
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Calculate
            </button>
          </div>
        </div>
      </form>
    </div>
    <div v-if="ephData.length > 0">
      <h1 class="text-3xl mt-10">
        Planetary Ephemeris
      </h1>
      <table class="table-auto text-left w-full border-collapse">
        <thead>
          <tr>
            <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Planet
            </th>
            <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Position
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(eph, index) in ephData" v-bind:key="index" class="hover:bg-grey-lighter">
            <td class="py-4 px-6 border-b border-grey-light">
              {{ eph.planet }}
            </td>
            <td class="py-4 px-6 border-b border-grey-light">
              {{ eph.position }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Datetime } from 'vue-datetime'
import { GooglePlacesAutocomplete } from 'vue-better-google-places-autocomplete'
import Logo from '@/components/Logo.vue'

interface Ephemeris {
  planet: string;
  position: string;
  isRetro: boolean;
}

@Component({
  components: {
    Logo,
    Datetime,
    GooglePlacesAutocomplete
  }
})
export default class Index extends Vue {
  dateTimeString: string = new Date().toISOString();
  place: string = '';
  lat: number = 0;
  lng: number = 0;
  location: string = ''
  timeZoneId: string = ''
  timeZoneOffset: number = 0
  timeZoneFormatted: string = ''
  ephData: Array<Ephemeris> = [];

  calculate () {
    this.fetchData().then((data) => {
      this.ephData = data
    })
  }

  updatePlace (placeDetail: any) {
    this.lat = placeDetail.geometry.location.lat()
    this.lng = placeDetail.geometry.location.lng()
    this.formatLatLng()
    this.updateTimeZone()
    this.place = placeDetail.formatted_address
  }

  formatLatLng () {
    const latDir = this.lat > 0 ? ' N ' : ' S '
    const lngDir = this.lng > 0 ? ' E ' : ' W '
    this.location = `${this.formatDegMin(this.lat, '.')} ${latDir} , ${this.formatDegMin(this.lng, '.')} ${lngDir}`
  }

  updateTimeZone () {
    const timezoneUrl = 'https://maps.googleapis.com/maps/api/timezone/json'
    const params = {
      key: process.env.GOOGLE_MAPS_API_KEY,
      location: this.lat + ',' + this.lng,
      timestamp: new Date(this.dateTimeString).getTime() / 1000.0
    }
    this.$axios.$get(timezoneUrl, { params }).then((resp) => {
      this.timeZoneId = resp.timeZoneId
      this.timeZoneOffset = (resp.rawOffset + resp.dstOffset) / 3600
      const timeZoneSign = this.timeZoneOffset > 0 ? ' + ' : ' - '
      this.timeZoneFormatted = `${this.timeZoneId} ( GMT  ${timeZoneSign} ${this.formatDegMin(this.timeZoneOffset, ' : ')})`
    })
  }

  formatDegMin (val: number, delim: string) {
    const absVal = Math.abs(val)
    const deg = Math.floor(absVal)
    const rem = (absVal - deg) * 60
    const min = Math.floor(rem)
    const result = `${this.padDigits(deg, 2)}${delim}${this.padDigits(min, 2)}`
    return result
  }

  formatDegMinSec (val: number, delim: string) {
    const absVal = Math.abs(val)
    const deg = Math.floor(absVal)
    const rem = (absVal - deg) * 60
    const min = Math.floor(rem)
    const secs = Math.floor((rem - min) * 60)
    const result = `${this.padDigits(deg, 3)}${delim}${this.padDigits(min, 2)}${delim}${this.padDigits(secs, 2)}`
    return result
  }

  padDigits (val: number, size: number) {
    return `${val}`.padStart(size, '0')
  }

  async fetchData () {
    const dateTime = new Date(this.dateTimeString)
    // TODO
    const body = {
      name: 'Astrosoft UI',
      place: {
        name: this.place,
        longitude: this.lng,
        latitude: this.lat,
        timeZoneId: this.timeZoneId
      },
      year: dateTime.getFullYear(),
      month: dateTime.getMonth() + 1,
      date: dateTime.getDate(),
      hour: dateTime.getHours(),
      minutes: dateTime.getMinutes(),
      seconds: dateTime.getSeconds(),
      options: {
        Ayanamsa: 'LAHARI'
      }
    }
    // console.log(body)
    const resp = await this.$axios.$post('https://api.innovativeastrosolutions.com/v0/horoscope', body)
    return this.parseData(resp)
  }

  parseData (resp: any): Array<Ephemeris> {
    const result: Array<Ephemeris> = []
    let value: any
    for (value of Object.values(resp.planetaryInfo)) {
      result.push({ planet: value.planet, position: this.formatDegMinSec(value.position, ':'), isRetro: value.isRetro })
    }
    return result
  }
}
</script>

<style>
@import 'assets/css/tailwind.css'

.vbga-results {
  @apply .list-reset w-full max-w-sm p-4 bg-white border-t rounded-b-lg;
}
</style>
