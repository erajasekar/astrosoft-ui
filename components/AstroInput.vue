<template>
  <div>
    <form class="max-w-xl card p-4 mt-10 self-center">
      <b-field horizontal label="Date" custom-class="text-gray-600">
        <div>
          <datetime
            ref="datePicker"
            v-model="dateTimeString"
            v-on:close="dateTimeSelectorClosed"
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
      <b-field v-if="shouldShowTime()" horizontal label="Time" custom-class="text-gray-600">
        <div>
          <datetime
            ref="timePicker"
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
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'
import { Datetime } from 'vue-datetime'
import { GooglePlacesAutocomplete } from 'vue-better-google-places-autocomplete'
import Place from '../astro/Place'
import Timezone from '../astro/Timezone'
import { getTimezone, setTimezone, removeTimezone, setPlace, removePlace, getPlace } from '../mixins/LocalStorageUtils'

@Component({
  components: {
    Datetime,
    GooglePlacesAutocomplete
  }
})
export default class AstroInput extends Vue {
  @Prop() showTime: boolean | undefined

  dateTimeString: string = new Date().toISOString()
  place: Place = new Place()
  timezone: Timezone = new Timezone()
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

  @Emit('change')
  dateTimeSelectorClosed () {
    return this.getInputData()
  }

  shouldShowTime () {
    if (this.showTime === undefined) {
      return true
    } else {
      return this.showTime
    }
  }

  getInputData () {
    return {
      dateTimeValue: new Date(this.dateTimeString),
      place: this.place,
      timezone: this.timezone,
      isPlaceSet: this.isPlaceSet
    }
  }

  get location () {
    return this.place.location
  }

  get placeFormatted () {
    return this.place.placeFormatted
  }

  updatePlace (placeDetail: any) {
    this.place = new Place(placeDetail)
    this.updateTimeZone()
    setPlace(this.place)
    this.isPlaceSet = true
    this.getInputData()
  }

  @Emit('change')
  clearPlace () {
    this.place = new Place()
    this.timezone = new Timezone()
    removePlace()
    removeTimezone()
    this.isPlaceSet = false
    return this.getInputData()
  }

  updateTimeZone () {
    const timezoneUrl = 'https://maps.googleapis.com/maps/api/timezone/json'
    const params = {
      key: process.env.GOOGLE_MAPS_API_KEY,
      location: this.place.lat + ',' + this.place.lng,
      timestamp: new Date(this.dateTimeString).getTime() / 1000.0
    }
    this.$axios.$get(timezoneUrl, { params }).then((resp) => {
      this.timezone = new Timezone(resp)
      setTimezone(this.timezone)
    })
  }

  @Emit('submit')
  calculate () {
    return this.getInputData()
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
</style>
