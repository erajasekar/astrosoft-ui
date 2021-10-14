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
        <option value="1">Mesh</option>
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
        <option value="1">Mesh</option>
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
            <tr>
                <td colspan="3">
                Important Note: The star matching is just the first step, don't assume that only star matching is sufficient and fail to check the
                 overall horoscope for other factors(childbirth, happy family life, divorce possibilities, progeny, financial status, etc).
                </td>
            </tr>
        </table>
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
      titleTemplate: 'Nakshatra| Innovative Astro Solutions',
      meta: [
        { name: 'og:url', content: getCurrentPageUrl('/nakshatra') },
        { name: 'twitter:url', content: getCurrentPageUrl('/nakshatra') }
      ]
    }
  }

  calcBoy () {
    if (this.rasiBoy === '1') {
      this.nkb1 = 'Ashwini'
      this.nkb2 = 'Bharani'
      this.nkb3 = 'Kirthika'
    } else if (this.rasiBoy === '2') {
      this.nkb1 = 'Kirthika'
      this.nkb2 = 'Rohini'
      this.nkb3 = 'Mrigasira'
    } else if (this.rasiBoy === '3') {
      this.nkb1 = 'Mrigsira'
      this.nkb2 = 'Ardra'
      this.nkb3 = 'Punarvasu'
    } else if (this.rasiBoy === '4') {
      this.nkb1 = 'Punarvasu'
      this.nkb2 = 'Pushyami'
      this.nkb3 = 'Ashlesha'
    } else if (this.rasiBoy === '5') {
      this.nkb1 = 'Magha'
      this.nkb2 = 'Purva Phalguni'
      this.nkb3 = 'Uttra Phalguni'
    } else if (this.rasiBoy === '6') {
      this.nkb1 = 'Uttra Phalguni'
      this.nkb2 = 'Hastra'
      this.nkb3 = 'Chitra'
    } else if (this.rasiBoy === '7') {
      this.nkb1 = 'Chitra'
      this.nkb2 = 'Swathi'
      this.nkb3 = 'Vishakha'
    } else if (this.rasiBoy === '8') {
      this.nkb1 = 'Vishakha'
      this.nkb2 = 'Anuradha'
      this.nkb3 = 'Jyestha'
    } else if (this.rasiBoy === '9') {
      this.nkb1 = 'Moola'
      this.nkb2 = 'Purva Ashadha'
      this.nkb3 = 'Uttra Ashadha'
    } else if (this.rasiBoy === '10') {
      this.nkb1 = 'Uttra Ashadha'
      this.nkb2 = 'Shravana'
      this.nkb3 = 'Dhanishta'
    } else if (this.rasiBoy === '11') {
      this.nkb1 = 'Dhanishta'
      this.nkb2 = 'Shatabhisha'
      this.nkb3 = 'Purva Bhadrapada'
    } else if (this.rasiBoy === '12') {
      this.nkb1 = 'Purva Bhadrapada'
      this.nkb2 = 'Uttra Bhadrapada'
      this.nkb3 = 'Revathi'
    }
    this.shouldDisable()
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
    if (this.rasiGirl === '1') {
      this.nkg1 = 'Ashwini'
      this.nkg2 = 'Bharani'
      this.nkg3 = 'Kirthika'
    } else if (this.rasiGirl === '2') {
      this.nkg1 = 'Kirthika'
      this.nkg2 = 'Rohini'
      this.nkg3 = 'Mrigasira'
    } else if (this.rasiGirl === '3') {
      this.nkg1 = 'Mrigsira'
      this.nkg2 = 'Ardra'
      this.nkg3 = 'Punarvasu'
    } else if (this.rasiGirl === '4') {
      this.nkg1 = 'Punarvasu'
      this.nkg2 = 'Pushyami'
      this.nkg3 = 'Ashlesha'
    } else if (this.rasiGirl === '5') {
      this.nkg1 = 'Magha'
      this.nkg2 = 'Purva Phalguni'
      this.nkg3 = 'Uttra Phalguni'
    } else if (this.rasiGirl === '6') {
      this.nkg1 = 'Uttra Phalguni'
      this.nkg2 = 'Hastra'
      this.nkg3 = 'Chitra'
    } else if (this.rasiGirl === '7') {
      this.nkg1 = 'Chitra'
      this.nkg2 = 'Swathi'
      this.nkg3 = 'Vishakha'
    } else if (this.rasiGirl === '8') {
      this.nkg1 = 'Vishakha'
      this.nkg2 = 'Anuradha'
      this.nkg3 = 'Jyestha'
    } else if (this.rasiGirl === '9') {
      this.nkg1 = 'Moola'
      this.nkg2 = 'Purva Ashadha'
      this.nkg3 = 'Uttra Ashdha'
    } else if (this.rasiGirl === '10') {
      this.nkg1 = 'Uttra Ashadha'
      this.nkg2 = 'Shravana'
      this.nkg3 = 'Dhanishta'
    } else if (this.rasiGirl === '11') {
      this.nkg1 = 'Dhanishta'
      this.nkg2 = 'Shatabhisha'
      this.nkg3 = 'Purva Bhadrapada'
    } else if (this.rasiGirl === '12') {
      this.nkg1 = 'Purva Bhadrapada'
      this.nkg2 = 'Uttra Bhadrapada'
      this.nkg3 = 'Revathi'
    }
    this.shouldDisable()
  }

  shouldDisable () {
    if (this.rasiBoy !== '0' && this.rasiGirl !== '0') {
      this.allset = true
    } else {
      this.allset = false
    }
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

  nakshatraNum (val1: string, val2: string) {
    /* return ((parseInt(val1) - 1) * 3) + parseInt(val2) */
    let val = 1
    if (parseInt(val1) === 1) {
      val = 0
    } else if (parseInt(val1) <= 4) {
      val = (parseInt(val1) - 1) * 2
    } else if (parseInt(val1) === 5) {
      val = 9
    } else if (parseInt(val1) <= 8) {
      val = 9 + (parseInt(val1) - 5) * 2
    } else if (parseInt(val1) === 9) {
      val = 18
    } else {
      val = 18 + (parseInt(val1) - 9) * 2
    }
    return val + parseInt(val2)
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
    console.log(body)
    console.log(resp)
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
