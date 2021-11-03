<template>
  <section class="center">
    <b-loading :active.sync="isLoading" />
    <form class="nakshatra-form p-4 mt-10 mb-10 max-w-xl card center is-align-content-center">
      <div class="form-inputs content">
      <div class="boy">
        <h1> Boy Details</h1>
        <label class="label text-gray-600">Rasi</label>
        <select v-model="rasiBoy" @change="calcBoy()" class="rasiBoy card mb-5">
        <option disabled value="0">Please select one</option>
        <option value="1">Mesha</option>
        <option value="2">Vrishabha</option>
        <option value="3">Mithuna</option>
        <option value="4">Kataka</option>
        <option value="5">Simha</option>
        <option value="6">Kanya</option>
        <option value="7">Thula</option>
        <option value="8">Vrichika</option>
        <option value="9">Dhanus</option>
        <option value="10">Makar</option>
        <option value="11">Kumbh</option>
        <option value="12">Meena</option>
        </select>
        <br>
        <label class="label text-gray-600">Nakshatra</label>
        <select v-model="nakshatraBoy" name="NakshatraValBoy" @change="shouldDisable()" class="card">
        <option value="1">{{nakBoy1}}</option>
        <option value="2">{{nakBoy2}}</option>
        <option value="3">{{nakBoy3}}</option>
        </select>
      </div>
      <div class="girl is-align-content-center">
        <h1> Girl Details</h1>
        <label class="label text-gray-600">Rasi</label>
        <select v-model="rasiGirl" @change="calcGirl()" class="card mb-5">
        <option disabled value="0">Please select one</option>
        <option value="1">Mesha</option>
        <option value="2">Vrishabha</option>
        <option value="3">Mithuna</option>
        <option value="4">Kataka</option>
        <option value="5">Simha</option>
        <option value="6">Kanya</option>
        <option value="7">Thula</option>
        <option value="8">Vrichika</option>
        <option value="9">Dhanus</option>
        <option value="10">Makar</option>
        <option value="11">Kumbh</option>
        <option value="12">Meena</option>
        </select>
        <br>
        <label class="label text-gray-600">Nakshatra</label>
        <select v-model="nakshatraGirl" @change="shouldDisable()" class="card">
        <option value="1">{{nakGirl1}}</option>
        <option value="2">{{nakGirl2}}</option>
        <option value="3">{{nakGirl3}}</option>
        </select>
      </div>
      </div>
      <button
          class="button is-info m-2"
          type="button"
          v-on:click="calculate()"
          :disabled="!allset"
        >
          Calculate
        </button>
    </form>
    <div v-if="valuesVisibility" class="p-4 mt-10 mb-10 content max-w-xl">
        <table class="table is-striped is-bordered is-hoverable card">
            <tr class="bg-green-400 text-gray-900">
                <th>Kutas</th>
                <th>Gained</th>
                <th>Max</th>
            </tr>
            <tr v-for="(value, propertyName,index) in resp.kutas" :key="index">
               <td>{{propertyName}}</td>
               <td>{{value.gained}}</td>
               <td>{{value.max}}</td>
            </tr>
            <tr class="has-text-weight-bold">
                <td>Total</td>
                <td>{{resp.totalKutasGained.gained}}</td>
                <td>{{resp.totalKutasGained.max}}</td>
            </tr>
        </table>
        <div class="note card p-4">
            Important Note: The star matching is just the first step, don't assume that only star matching is sufficient and fail to check the
            overall horoscope for other factors(childbirth, happy family life, divorce possibilities, progeny, financial status, etc).
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { getCurrentPageUrl } from '~/mixins/AppUtils'

@Component
export default class NakshatraVue extends Vue {
  @Prop({ type: Object, required: true })
  rasiBoy = '0'

  @Prop({ type: Object, required: true })
  rasiGirl = '0'

  @Prop({ type: Object, required: true })
  nkb1 = ''

  @Prop({ type: Object, required: true })
  nkb2 = ''

  @Prop({ type: Object, required: true })
  nkb3 = ''

  @Prop({ type: Object, required: true })
  nkg1 = ''

  @Prop({ type: Object, required: true })
  nkg2 = ''

  @Prop({ type: Object, required: true })
  nkg3 = ''

  @Prop({ type: Object, required: true })
  nakshatraGirl = '1'

  @Prop({ type: Object, required: true })
  nakshatraBoy = '1'

  @Prop({ type: Object, required: true })
  resp = {
    value: true
  }

  @Prop({ type: Object, required: true })
  nakshatraFinal = 'p'

  @Prop({ type: Boolean, required: true })
  valuesVisibility = false

  @Prop({ type: Object, required: true })
  allset = false

  @Prop({ type: Object, required: true })
  isLoading = false

  head () {
    return {
      titleTemplate: 'Nakshatra Compatibility | Innovative Astro Solutions',
      meta: [
        { name: 'og:url', content: getCurrentPageUrl('/nakshatra') },
        { name: 'twitter:url', content: getCurrentPageUrl('/nakshatra') }
      ]
    }
  }

  calcBoy () {
    const nakshatraArrray = this.calcNakshatra(this.rasiBoy)
    this.nkb1 = nakshatraArrray[0]
    this.nkb2 = nakshatraArrray[1]
    this.nkb3 = nakshatraArrray[2]
    this.shouldDisable()
  }

  calcNakshatra (rasi : string) {
    if (rasi === '1') {
      return ['Ashwini', 'Bharani', 'Kirthika']
    } else if (rasi === '2') {
      return ['Kirthika', 'Rohini', 'Mrigasira']
    } else if (rasi === '3') {
      return ['Mrigsira', 'Ardra', 'Punarvasu']
    } else if (rasi === '4') {
      return ['Punarvasu', 'Pushyami', 'Ashlesha']
    } else if (rasi === '5') {
      return ['Magha', 'Purva Phalguni', 'Uttra Phalguni']
    } else if (rasi === '6') {
      return ['Uttra Phalguni', 'Hastra', 'Chitra']
    } else if (rasi === '7') {
      return ['Chitra', 'Swathi', 'Vishakha']
    } else if (rasi === '8') {
      return ['Vishakha', 'Anuradha', 'Jyestha']
    } else if (rasi === '9') {
      return ['Moola', 'Purva Ashadha', 'Uttra Ashadha']
    } else if (rasi === '10') {
      return ['Uttra Ashadha', 'Shravana', 'Dhanishta']
    } else if (rasi === '11') {
      return ['Dhanishta', 'Shatabhisha', 'Purva Bhadrapada']
    } else if (rasi === '12') {
      return ['Purva Bhadrapada', 'Uttra Bhadrapada', 'Revathi']
    } else {
      return ['', '', '']
    }
  }

  get nakBoy1 (): string {
    return `${this.nkb1}`
  }

  get nakBoy2 (): string {
    return `${this.nkb2}`
  }

  get nakBoy3 (): string {
    return `${this.nkb3}`
  }

  calcGirl () {
    const nakshatraArrray = this.calcNakshatra(this.rasiGirl)
    this.nkg1 = nakshatraArrray[0]
    this.nkg2 = nakshatraArrray[1]
    this.nkg3 = nakshatraArrray[2]
    this.shouldDisable()
  }

  shouldDisable () {
    this.allset = this.rasiBoy !== '0' && this.rasiGirl !== '0'
  }

  get nakGirl1 (): string {
    return `${this.nkg1}`
  }

  get nakGirl2 (): string {
    return `${this.nkg2}`
  }

  get nakGirl3 (): string {
    return `${this.nkg3}`
  }

  calculate () {
    this.fetchData()
  }

  nakshatraNum (rasi: string, nakshatra: string) {
    const rasiInt = parseInt(rasi)
    let val = 1
    if (rasiInt === 1) {
      val = 0
    } else if (rasiInt <= 4) {
      val = (rasiInt - 1) * 2
    } else if (rasiInt === 5) {
      val = 9
    } else if (rasiInt <= 8) {
      val = 9 + (rasiInt - 5) * 2
    } else if (rasiInt === 9) {
      val = 18
    } else {
      val = 18 + (rasiInt - 9) * 2
    }
    return val + parseInt(nakshatra)
  }

  async fetchData () {
    this.isLoading = true
    const body = {
      boy: {
        rasiNum: parseInt(this.rasiBoy),
        nakshatraNum: this.nakshatraNum(this.rasiBoy, this.nakshatraBoy)
      },
      girl: {
        rasiNum: parseInt(this.rasiGirl),
        nakshatraNum: this.nakshatraNum(this.rasiGirl, this.nakshatraGirl)
      }
    }
    const resp = await this.$axios.$post('https://api.innovativeastrosolutions.com/v0/compatibility', body)
    this.allocate(resp)
    this.valuesVisibility = true
    this.isLoading = false
  }

  allocate (resp: any) {
    this.resp = resp
  }

  get valuesVisible (): boolean {
    return !!`${this.valuesVisibility}`
  }
}
</script>
<style scoped>

.planet-pos {
  font-family: 'Share Tech Mono', Courier, monospace;
}

h1 {
  font-family: 'KoHo', sans-serif;
}

.form-inputs {
    display: flex;
    align-items: stretch;
}

.boy {
    font-family: 'Share Tech Mono', Courier, monospace;
    background-color: white;
    width: 50%;
}

.girl {
    font-family: 'Share Tech Mono', Courier, monospace;
    background-color: white;
    width: 50%;
}

button {
    align-items: center;
}
</style>
