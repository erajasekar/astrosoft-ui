<template>
  <section class="container center">
    <div>
      <logo />
      <form class="max-w-xl card p-4 mt-10 self-center">
        <b-field horizontal label="Date">
          <b-datepicker
            v-model="dateTimeValue"
            icon="calendar-today"
          />
        </b-field>
        <b-field horizontal label="Time">
          <b-timepicker
            :hour-format="12"
            v-model="dateTimeValue"
            icon="clock"
            editable
          />
        </b-field>
        <div>
          <div>
            <google-places-autocomplete
              @resultChanged="placeDetail => updatePlace(placeDetail)"
              @resultCleared="() => clearPlace()"
              :value="placeFormatted"
            >
              <div slot="input" slot-scope="{ context, events, actions }">
                <b-field horizontal label="Place">
                  <div class="control has-icons-left is-clearfix">
                    <input
                      id="locationInput"
                      v-model="context.input"
                      @focus="events.inputHasReceivedFocus"
                      @input="events.inputHasChanged"
                      @keydown.enter.prevent="actions.selectItemFromList"
                      @keydown.down.prevent="actions.shiftResultsSelection"
                      @keydown.up.prevent="actions.unshiftResultsSelection"
                      type="search"
                      placeholder="Type city name to search ..."
                      autocomplete="off"
                      class="input"
                    >
                    <span class="icon is-left"><i class="mdi mdi-magnify mdi-24px" /></span>
                  </div>
                </b-field>
              </div>

              <span slot="item" slot-scope="{ place }" class="block p-2">
                {{ place.description }}
              </span>
              <span slot="activeItem" slot-scope="{ place }" class="block p-2 rounded bg bg-orange-300 font-bold">
                {{ place.description }}
              </span>
            </google-places-autocomplete>
          </div>
        </div>
        <div v-if="isPlaceSet" class="p-5 mt-2 mb-2">
          <b-field horizontal label="Location" custom-class="text-xs text-gray-600">
            <input :value="location" readonly class="w-full text-gray-600 text-xs">
          </b-field>
          <b-field horizontal label="Timezone" custom-class="text-xs text-gray-600">
            <input :value="timeZoneFormatted" readonly class="w-full text-gray-600 text-xs">
          </b-field>
        </div>
        <b-field horizontal>
          <button
            v-on:click="calculate"
            class="button is-info m-2"
            type="button"
          >
            Calculate
          </button>
        </b-field>
      </form>
    </div>
    <div v-if="ephData.length > 0" class="p-4 mt-10 mb-10 content max-w-xl">
      <h2>
        Planetary Ephemeris on {{ formattedDateTime }} at {{ placeName }}
      </h2>
      <table class="table is-bordered is-hoverable">
        <thead>
          <tr>
            <th>
              Planet
            </th>
            <th>
              Position
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(eph, index) in ephData" v-bind:key="index">
            <td>
              {{ eph.planet }}
            </td>
            <td>
              {{ eph.position }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { GooglePlacesAutocomplete } from 'vue-better-google-places-autocomplete'
import { formatDateTime, formatDegMinSec } from '../mixins/FormatUtils'
import { Ephemeris } from '../astro/Ephemeris'
import Place from '../astro/Place'
import Timezone from '../astro/Timezone'
import { getTimezone, setTimezone, removeTimezone, setPlace, removePlace, getPlace } from '../mixins/LocalStorageUtils'

import Logo from '@/components/Logo.vue'

@Component({
  components: {
    Logo,
    GooglePlacesAutocomplete
  }
})
export default class Index extends Vue {
  hourFormat = '12'
  dateTimeValue: Date = new Date()
  place: Place = new Place()
  timezone: Timezone = new Timezone()
  ephData: Array<Ephemeris> = []
  isPlaceSet = false

  mounted () {
    const storedTz = getTimezone()
    if (storedTz) {
      this.timezone = storedTz
    }
    const storedPlace = getPlace()
    if (storedPlace) {
      this.place = storedPlace
      this.isPlaceSet = true
    }
  }

  calculate () {
    console.log('RAJA CALCULATE ', this.place, this.timezone)
    this.fetchData().then((data) => {
      this.ephData = data
    })
  }

  updatePlace (placeDetail: any) {
    this.place = new Place(placeDetail)
    this.updateTimeZone()
    setPlace(this.place)
    this.isPlaceSet = true
  }

  clearPlace () {
    this.place = new Place()
    this.timezone = new Timezone()
    removePlace()
    removeTimezone()
    this.isPlaceSet = false
  }

  get formattedDateTime () {
    return formatDateTime(this.dateTimeValue)
  }

  get location () {
    return this.place.location
  }

  get timeZoneFormatted () {
    return this.timezone.timeZoneFormatted
  }

  get placeName () {
    return this.place.placeName
  }

  get placeFormatted () {
    return this.place.placeFormatted
  }

  updateTimeZone () {
    const timezoneUrl = 'https://maps.googleapis.com/maps/api/timezone/json'
    const params = {
      key: process.env.GOOGLE_MAPS_API_KEY,
      location: this.place.lat + ',' + this.place.lng,
      timestamp: this.dateTimeValue.getTime() / 1000.0
    }
    this.$axios.$get(timezoneUrl, { params }).then((resp) => {
      this.timezone = new Timezone(resp)
      setTimezone(this.timezone)
    })
  }

  async fetchData () {
    const dateTime = this.dateTimeValue
    // TODO
    const body = {
      name: 'Astrosoft UI',
      place: {
        name: this.place.placeName,
        longitude: this.place.lng,
        latitude: this.place.lat,
        timeZoneId: this.timezone.timeZoneId
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
      result.push({ planet: value.planet, position: formatDegMinSec(value.position, ':'), isRetro: value.isRetro })
    }
    return result
  }
}
</script>

<style>
.vbga-results {
    list-style: none;
    padding: 0;
    width: 100%;
    max-width: 30rem;
    padding: 1rem;
    border-width: 1px;
    border-color: #aaa;
    background-color: #fff;
    z-index: 2;
    position: absolute;
}
</style>
