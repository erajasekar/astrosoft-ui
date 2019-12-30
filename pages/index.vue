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
              v-model="date"
              type="date"
              input-class="bg-gray-200 appearance-none border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >Time</label>
          </div>
          <div class="md:w-2/3">
            <datetime
              id="time"
              v-model="time"
              use12-hour
              type="time"
              input-class="bg-gray-200 appearance-none border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >Place</label>
          </div>
          <div class="md:w-2/3">
            <!-- <input
              id="inline-full-name"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              value="Chennai, India"
              disabled
            >-->
            <google-places-autocomplete
              @resultChanged="placeDetail => updatePlace(placeDetail)"
              @resultCleared="() => place = null"
            >
              <div slot="input" slot-scope="{ context, events, actions }">
                <label for="locationInput" class="block my-4 text-xl text-grey-dark">Address Search</label>
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
                  placeholder="Type something ..."
                  autocomplete="off"
                >
              </div>

              <span slot="item" slot-scope="{ place }" class="block p-2">
                {{ place.description }}
              </span>
              <span slot="activeItem" slot-scope="{ place }" class="block p-2 rounded bg-green-lightest font-bold">
                {{ place.description }}
              </span>
            </google-places-autocomplete>

            <h3 class="mt-8 text-grey-dark" v-if="place">Result</h3>
            <pre v-html="place" class="text-xs" />
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
  date: string = '';
  time: string = '';
  place: string = '';
  ephData: Array<Ephemeris> = [];

  calculate () {
    this.fetchData(new Date(this.date), new Date(this.time)).then((data) => {
      this.ephData = data
    })
  }

  updatePlace (placeDetail: any) {
    console.log('PLACE ==> ', placeDetail.formatted_address, placeDetail.geometry.location.lat(), placeDetail.geometry.location.lng())
    this.place = placeDetail
  }

  async fetchData (date: Date, time: Date) {
    // TODO
    const body = {
      name: 'Astrosoft UI',
      place: {
        name: 'Chennai, India',
        longitude: 80.237617,
        latitude: 13.067439,
        timeZoneId: 'IST'
      },
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
      hour: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
      options: {
        Ayanamsa: 'LAHARI'
      }
    }
    console.log(body)
    const resp = await this.$axios.$post('https://api.innovativeastrosolutions.com/v0/horoscope', body)
    return this.parseData(resp)
  }

  parseData (resp: any): Array<Ephemeris> {
    const result: Array<Ephemeris> = []
    let value: any
    for (value of Object.values(resp.planetaryInfo)) {
      result.push({ planet: value.planet, position: value.position, isRetro: value.isRetro })
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
