<template>
  <div class="container mx-auto">
    <div>
      <logo />
      <h1 class="text-3xl mt-10">
        Planetary Positions
      </h1>
      <form class="mt-10 w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Date and time
            </label>
          </div>
          <div class="md:w-2/3">
            <datetime v-model="dateTime" :phrases="{ok: 'Continue', cancel: 'Exit'}" use12-hour type="datetime" input-class="bg-gray-200 appearance-none border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Place
            </label>
          </div>
          <div class="md:w-2/3">
            <input id="inline-full-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value="Tampa">
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3" />
          <div class="md:w-2/3">
            <button v-on:click="calculate" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Calculate
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Datetime } from 'vue-datetime'
import Logo from '@/components/Logo.vue'

@Component({
  components: {
    Logo,
    Datetime
  }
})
export default class Index extends Vue {
  dateTime: string = ''

  calculate () {
    console.log(this.dateTime)
  }
}
</script>

<style>

</style>
