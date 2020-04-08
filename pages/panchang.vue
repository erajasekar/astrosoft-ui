<template>
  <section class="center">
    <div>
      <form class="max-w-xl card p-4 mt-10 self-center">
        <b-field horizontal label="Date" custom-class="text-gray-600">
          <div>
            <datetime
              v-on:close="dateTimeSelectorClosed"
              v-model="dateTimeString"
              input-id="date"
              type="date"
              zone="local"
              value-zone="local"
              auto
            >
              <span slot="before" class="icon is-left">
                <b-icon icon="calendar-today" size="is-small" />
              </span>
            </datetime>
          </div>
        </b-field>
        <b-field horizontal label="Time" custom-class="text-gray-600">
          <div>
            <datetime
              v-model="dateTimeString"
              v-on:close="dateTimeSelectorClosed"
              input-id="datetime"
              type="time"
              zone="local"
              value-zone="local"
              auto
              use12-hour
            >
              <span slot="before" class="icon is-left">
                <b-icon icon="clock" size="is-small" />
              </span>
            </datetime>
          </div>
        </b-field>
        <div>
          <div>
            <google-places-autocomplete
              @resultChanged="placeDetail => updatePlace(placeDetail)"
              @resultCleared="() => clearPlace()"
              :value="placeFormatted"
            >
              <div slot="input" slot-scope="{ context, events, actions }">
                <b-field horizontal label="Place" custom-class="text-gray-600">
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
                    <span class="icon is-left">
                      <b-icon type="is-dark" icon="map-marker" size="is-small" />
                    </span>
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
          <b-field horizontal label="Location" custom-class="text-gray-600 text-xs">
            <b-field>
              <p class="control">
                <span class="button is-static is-small">
                  <b-icon type="is-dark" icon="crosshairs-gps" size="is-small" />
                </span>
              </p>
              <b-input :value="location.lat" custom-class="text-gray-700 text-xs" expanded readonly />
              <p class="control">
                <span class="button is-static is-small text-gray-700 text-xs">{{ location.latDir }}</span>
              </p>
              <b-input :value="location.lng" custom-class="text-gray-700 text-xs" expanded readonly />
              <p class="control">
                <span class="button is-static is-small text-gray-700 text-xs">{{ location.lngDir }}</span>
              </p>
            </b-field>
          </b-field>
          <b-field horizontal label="Timezone" custom-class="text-gray-600 text-xs">
            <b-field>
              <p class="control">
                <span class="button is-static is-small">
                  <b-icon type="is-dark" icon="earth" size="is-small" />
                </span>
              </p>
              <b-input :value="timezone.timeZoneId" readonly custom-class="w-full text-gray-700 text-xs" expanded />
              <p class="control">
                <span class="button is-static is-small text-gray-700 text-xs">{{ timezone.timeZoneOffset }} </span>
              </p>
            </b-field>
          </b-field>
        </div>
        <b-field horizontal>
          <button
            v-on:click="calculate"
            :disabled="!isPlaceSet"
            class="button is-info m-2"
            type="button"
          >
            Calculate
          </button>
        </b-field>
      </form>
    </div>
    <b-loading :active.sync="isLoading" />
    <div v-if="panchangData.length > 0" class="p-4 mt-10 mb-10 content max-w-xl">
      <h1>
        Panchang on {{ formattedDateTime }} at {{ placeName }}
      </h1>
      <table class="table is-bordered is-hoverable card">
        <tbody>
          <tr v-for="(pan, index) in panchangData" v-bind:key="index">
            <td class="font-semibold text-green-800">
              {{ pan.name | camel2title }}
            </td>
            <td v-panDirective="pan" class="panchang font-semibold text-blue-700">
              {{ pan.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Datetime } from 'vue-datetime'
import { GooglePlacesAutocomplete } from 'vue-better-google-places-autocomplete'
import { formatDateTime, camel2title } from '../mixins/FormatUtils'
import { Panchang } from '../astro/Panchang'
import { IInfoEntry, InfoEntry } from '../astro/InfoEntry'
import Place from '../astro/Place'
import Timezone from '../astro/Timezone'
import { getTimezone, setTimezone, removeTimezone, setPlace, removePlace, getPlace } from '../mixins/LocalStorageUtils'
import { getCurrentPageUrl } from '../mixins/AppUtils'
import panDirective from '../plugins/panchang-directive'

@Component({
  components: {
    Datetime,
    GooglePlacesAutocomplete
  },
  directives: {
    panDirective
  },
  filters: {
    camel2title
  }
})
export default class EphemerisVue extends Vue {
  dateTimeValue = new Date()
  dateTimeString: string = this.dateTimeValue.toISOString()
  place: Place = new Place()
  timezone: Timezone = new Timezone()
  panchangData : Array<IInfoEntry> = []
  isPlaceSet = false
  isLoading = false

  head () {
    return {
      titleTemplate: 'Panchang ' + this.titleSuffix + ' | %s',
      meta: [
        { name: 'og:url', content: getCurrentPageUrl('/panchang') },
        { name: 'twitter:url', content: getCurrentPageUrl('/panchang') }
      ]
    }
  }

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

  get titleSuffix () {
    return this.isPlaceSet ? 'at  ' + this.placeFormatted : ''
  }

  calculate () {
    this.isLoading = true
    this.fetchData().then((data) => {
      this.panchangData = data
      this.isLoading = false
    })
  }

  updatePlace (placeDetail: any) {
    this.place = new Place(placeDetail)
    this.updateTimeZone()
    setPlace(this.place)
    this.isPlaceSet = true
  }

  clearPlace () {
    this.panchangData = []
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
    const resp = await this.$axios.$post('https://api.innovativeastrosolutions.com/v0/panchang', body)
    return this.parseData(resp)
  }

  parseData (resp: any): Array<InfoEntry> {
    const result = new Panchang(resp).entries
    return result
  }

  dateTimeSelectorClosed () {
    this.dateTimeValue = new Date(this.dateTimeString)
    this.panchangData = []
  }
}
</script>

<style scoped>
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

.panchang {
  font-family: 'Share Tech Mono', Courier, monospace
}

h1 {
  font-family: 'KoHo', sans-serif;
}
</style>
