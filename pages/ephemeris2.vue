<template>
  <section class="center">
    <AstroInput />
    <div>{{ astroInputData }}</div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AstroInputData from '../astro/AstroInputData'
import AstroInput from '@/components/AstroInput.vue'

@Component({
  components: {
    AstroInput
  }
})
export default class EphemerisVue extends Vue {
  astroInputData = new AstroInputData();
}
</script>

<style scoped>

.planet-pos {
  font-family: 'Share Tech Mono', Courier, monospace
}

h1 {
  font-family: 'KoHo', sans-serif;
}
</style>
