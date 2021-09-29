<template>
  <section class="center">
    <b-loading :active.sync="isLoading" />
    <form class="nakshatra-form">
      <div class="form-inputs">
      <div class="boy">
        <h1> Boy Details</h1>
        <label class="label text-gray-600">Name</label><input type="text"><br>
        <label class="label text-gray-600">Rasi</label>
        <select v-model="rasiBoy" @change="isAshwini()" class="rasiBoy" id="Rasi" :key="dkey">
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
        <select v-model="nakshatraBoy" name="NakshatraValBoy">
        <option disabled value="">Please select one</option>
        <option value="1">{{nakshOp1B}}</option>
        <option value="2">{{nakshOp2B}}</option>
        <option value="3">{{nakshOp1B}}</option>
        </select>
      </div>
      <div class="girl">
        <h1> Girl Details</h1>
        <label class="label text-gray-600">Name</label><input type="text"><br>
        <label class="label text-gray-600">Rasi</label>
        <select v-model="rasiGirl" name="RasiGirl" id="Rasi">
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
        <select v-model="nakshatraGirl" name="NakshatraValGirl">
        <option disabled value="">Please select one</option>
        <option :value="1">{{nakshOp1G}}</option>
        <option :value="2">{{nakshOp2G}}</option>
        <option :value="3">{{nakshOp3G}}</option>
        </select>
      </div>
      </div>
      <button
          v-on:click="calculate"
          class="button is-info m-2"
          type="button"
        >
          Calculate
        </button>
    </form>
  </section>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator'
import { getCurrentPageUrl } from '../mixins/AppUtils'
@Component({
  components: {
  }
})
export default class NakshatraVue extends Vue {
  isLoading = false

  nakshOp1G= 'pop'
  nakshOp2G= 'p'
  nakshOp3G= 'p'
  /* @Prop()
  nakshOp1B= 'p'
  @Prop()
  nakshOp2B= 'p'
  @Prop()
  nakshOp3B= 'p' */

  head () {
    return {
      titleTemplate: 'Nakshatra| Innovative Astro Solutions',
      meta: [
        { name: 'og:url', content: getCurrentPageUrl('/nakshatra') },
        { name: 'twitter:url', content: getCurrentPageUrl('/nakshatra') }
      ]
    }
  }

  @Emit('change')
  isAshwini () {
    return this.rasiBoy === '1'
  }

  rasiBoy=''

  rasiGirl=''

  nakshatraBoy=''

  nakshatraGirl=''

  data () {
    if (this.rasiBoy === '1') {
      return {
        rasiBoy: '0',
        nakshOp1B: 'Ashwini',
        nakshOp2B: 'Bharani',
        nakshOp3B: 'Kirthika'
      }
    } else if (this.rasiBoy === '2') {
      return {
        rasiBoy: '0',
        nakshOp1B: 'Ashwini',
        nakshOp2B: 'Rohini',
        nakshOp3B: 'Mrigasira'
      }
    } else if (this.rasiBoy === '3') {
      return {
        rasiBoy: '0',
        nakshOp1B: 'Mrigsira',
        nakshOp2B: 'Ardra',
        nakshOp3B: 'Punarvasu'
      }
    } else if (this.rasiBoy === '4') {
      return {
        rasiBoy: '0',
        nakshOp1B: 'Punarvasu',
        nakshOp2B: 'Pushyami',
        nakshOp3B: 'Ashlesha'
      }
    } else if (this.rasiBoy === '5') {
      return {
        rasiBoy: '0',
        nakshOp1B: 'Magha',
        nakshOp2B: 'Purva Phalguni',
        nakshOp3B: 'Uttra Phalguni'
      }
    } else {
      return {
        rasiBoy: '0',
        nakshOp1B: '',
        nakshOp2B: '',
        nakshOp3B: ''
      }
    }
    /*  if (this.rasiBoy === '6') {
      this.nakshboy[0] = 'Uttra Phalguni'
      this.nakshboy[1] = 'Hastra'
      this.nakshboy[2] = 'Chitra'
    }
    if (this.rasiBoy === '7') {
      this.nakshboy[0] = 'Chitra'
      this.nakshboy[1] = 'Swathi'
      this.nakshboy[2] = 'Vishakha'
    }
    if (this.rasiBoy === '8') {
      this.nakshboy[0] = 'Vishakha'
      this.nakshboy[1] = 'Anuradha'
      this.nakshboy[2] = 'Jyestha'
    }
    if (this.rasiBoy === '9') {
      this.nakshboy[0] = 'Molla'
      this.nakshboy[1] = 'Purva Ashadha'
      this.nakshboy[2] = 'Uttra Ashdha'
    }
    if (this.rasiBoy === '10') {
      this.nakshboy[0] = 'Uttra Ashdha'
      this.nakshboy[1] = 'Shravana'
      this.nakshboy[2] = 'Dhanishta'
    }
    if (this.rasiBoy === '11') {
      this.nakshboy[0] = 'Dhanishta'
      this.nakshboy[1] = 'Shatabhisha'
      this.nakshboy[2] = 'Purva Bhadrapada'
    }
    if (this.rasiBoy === '12') {
      this.nakshboy[0] = 'Purva Bhadrapada'
      this.nakshboy[1] = 'Uttra Bhadrapada'
      this.nakshboy[2] = 'Revathi'
    }
    console.log(this.nakshOp1B)
    console.log(this.nakshOp2B)
    console.log(this.nakshOp3B)
    */
  }

  /*   get eleboy1 () {
    return this.nakshboy[0]
  }

  get eleboy2 () {
    return this.nakshboy[1]
  }

  get eleboy3 () {
    return this.nakshboy[2]
  }

  @Emit('change')
  getnakB1 () {
    return this.nakshOp1B
  }

  @Emit('change')
  getnakB2 () {
    return this.nakshOp2B
  }

  @Emit('change')
  getnakB3 () {
    return this.nakshOp3B
  }
  */

  calcgirl () {
    console.log(this.rasiGirl)
    /* Vue.set(this.nakshgirl, this.nakshgirl[1], 'startUpdating')
    if (this.rasiGirl === '1') {
      this.nakshOp1G = 'Ashwini'
      this.nakshOp2G = 'Bharani'
      this.nakshOp3G = 'Kirthika'
    }
    if (this.rasiGirl === '2') {
      this.nakshOp1G = 'Kirthika'
      this.nakshOp2G = 'Rohini'
      this.nakshOp3G = 'Mrigasira'
    }
    if (this.rasiGirl === '3') {
      this.nakshOp1G = 'Mrigsira'
      this.nakshOp2G = 'Ardra'
      this.nakshOp3G = 'Punarvasu'
    }
    if (this.rasiGirl === '4') {
      this.nakshOp1G = 'Punarvasu'
      this.nakshOp2G = 'Pushyami'
      this.nakshOp3G = 'Ashlesha'
    }
    if (this.rasiGirl === '5') {
      this.nakshgirl[0] = 'Magha'
      this.nakshgirl[1] = 'Purva Phalguni'
      this.nakshgirl[2] = 'Uttra Phalguni'
    }
    if (this.rasiGirl === '6') {
      this.nakshgirl[0] = 'Uttra Phalguni'
      this.nakshgirl[1] = 'Hastra'
      this.nakshgirl[2] = 'Chitra'
    }
    if (this.rasiGirl === '7') {
      this.nakshgirl[0] = 'Chitra'
      this.nakshgirl[1] = 'Swathi'
      this.nakshgirl[2] = 'Vishakha'
    }
    if (this.rasiGirl === '8') {
      this.nakshgirl[0] = 'Vishakha'
      this.nakshgirl[1] = 'Anuradha'
      this.nakshgirl[2] = 'Jyestha'
    }
    if (this.rasiGirl === '9') {
      this.nakshgirl[0] = 'Molla'
      this.nakshgirl[1] = 'Purva Ashadha'
      this.nakshgirl[2] = 'Uttra Ashdha'
    }
    if (this.rasiGirl === '10') {
      this.nakshgirl[0] = 'Uttra Ashdha'
      this.nakshgirl[1] = 'Shravana'
      this.nakshgirl[2] = 'Dhanishta'
    }
    if (this.rasiGirl === '11') {
      this.nakshgirl[0] = 'Dhanishta'
      this.nakshgirl[1] = 'Shatabhisha'
      this.nakshgirl[2] = 'Purva Bhadrapada'
    }
    if (this.rasiGirl === '12') {
      this.nakshgirl[0] = 'Purva Bhadrapada'
      this.nakshgirl[1] = 'Uttra Bhadrapada'
      this.nakshgirl[2] = 'Revathi'
    }
    */
  }

  get elegirl1 () {
    return this.nakshgirl[0]
  }

  get elegirl2 () {
    return this.nakshgirl[1]
  }

  get elegirl3 () {
    return this.nakshgirl[2]
  }

  nakshboy=['', '', '']

  nakshgirl=['', '', '']
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
    max-width: 30rem;
    border: 1px solid black;
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

select {
    border: 1px solid black;
    background-color: cornsilk;
}

input {
    border: 1px solid black;
    background-color: cornsilk;
}
button {
    align-items: center;
}
</style>
