<template>
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
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Datetime } from 'vue-datetime'
import { GooglePlacesAutocomplete } from 'vue-better-google-places-autocomplete'

@Component({
  components: {
    Datetime,
    GooglePlacesAutocomplete
  }
})
export default class AstroInput extends Vue {
  dateTimeValue = new Date()
  dateTimeString: string = this.dateTimeValue.toISOString()

  dateTimeSelectorClosed () {
    this.dateTimeValue = new Date(this.dateTimeString)
    // this.ephData = [] TODO: figure this out
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
