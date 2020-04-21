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
      <b-field horizontal label="Time" custom-class="text-gray-600">
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
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'
import { Datetime } from 'vue-datetime'
import { GooglePlacesAutocomplete } from 'vue-better-google-places-autocomplete'
import AstroInputData from '../astro/AstroInputData'

@Component({
  components: {
    Datetime,
    GooglePlacesAutocomplete
  }
})
export default class AstroInput extends Vue {
  @Prop() astroInputData: AstroInputData | undefined
  dateTimeString: string = this.initDateTimeString()

  @Emit('close')
  dateTimeSelectorClosed () {
    return this.inputChanged()
  }

  initDateTimeString () {
    if (this.astroInputData) {
      return this.astroInputData.dateTimeValue.toISOString()
    } else {
      return new Date().toISOString()
    }
  }

  /* @Watch('dateTimeString')
  onDateChanged (value: string) {
    // TODO try to use emit annotation
    this.$emit('input', {
      dateTimeValue: new Date(value)
    })
   } */

  @Emit('input')
  inputChanged () {
    return {
      dateTimeValue: new Date(this.dateTimeString)
    }
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
