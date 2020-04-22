<template>
  <section class="center">
    <AstroInput
      @change="resetData"
      @submit="calculate"
      :showTime="false"
    />
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
            <td v-panDirective="pan" class="panchang font-semibold text-indigo-700">
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
import { camel2title, formatDateTimeWithHrMin } from '../mixins/FormatUtils'
import { Panchang } from '../astro/Panchang'
import { IInfoEntry, InfoEntry } from '../astro/InfoEntry'
import { getCurrentPageUrl } from '../mixins/AppUtils'
import panDirective from '../plugins/panchang-directive'
import AstroInputData from '../astro/AstroInputData'
import AstroInput from '@/components/AstroInput.vue'

@Component({
  components: {
    AstroInput
  },
  directives: {
    panDirective
  },
  filters: {
    camel2title
  }
})
export default class PanchangVue extends Vue {
  astroInputData = new AstroInputData()
  isLoading = false
  panchangData : Array<IInfoEntry> = []
  static panHr = 6
  static panMin = 0
  static panSec = 0

  head () {
    return {
      titleTemplate: 'Panchang ' + this.titleSuffix + ' | %s',
      meta: [
        { name: 'og:url', content: getCurrentPageUrl('/panchang') },
        { name: 'twitter:url', content: getCurrentPageUrl('/panchang') }
      ]
    }
  }

  get titleSuffix () {
    return this.astroInputData.isPlaceSet ? 'at  ' + this.placeFormatted : ''
  }

  get placeFormatted () {
    return this.astroInputData.place.placeFormatted
  }

  calculate (value: AstroInputData) {
    this.astroInputData = value
    this.isLoading = true
    this.fetchData().then((data) => {
      this.panchangData = data
      this.isLoading = false
    })
  }

  get formattedDateTime () {
    return formatDateTimeWithHrMin(this.astroInputData.dateTimeValue, PanchangVue.panHr, PanchangVue.panMin)
  }

  get placeName () {
    return this.astroInputData.place.placeName
  }

  async fetchData () {
    const dateTime = this.astroInputData.dateTimeValue
    const body = {
      name: 'Astrosoft UI',
      place: {
        name: this.astroInputData.place.placeName,
        longitude: this.astroInputData.place.lng,
        latitude: this.astroInputData.place.lat,
        timeZoneId: this.astroInputData.timezone.timeZoneId
      },
      year: dateTime.getFullYear(),
      month: dateTime.getMonth() + 1,
      date: dateTime.getDate(),
      hour: PanchangVue.panHr,
      minutes: PanchangVue.panMin,
      seconds: PanchangVue.panSec,
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

  resetData () {
    this.panchangData = []
  }
}
</script>

<style scoped>
.panchang {
  font-family: 'Share Tech Mono', Courier, monospace
}

h1 {
  font-family: 'KoHo', sans-serif;
}
</style>
