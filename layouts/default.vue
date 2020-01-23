<template>
  <section class="center">
    <logo />
    <div class="container">
      <nuxt />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '@/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class extends Vue {
}

</script>
<style>
@import url('https://fonts.googleapis.com/css?family=KoHo|Share+Tech+Mono|Roboto|Titillium+Web');
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: 'Titillium Web', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
   'Helvetica Neue', Arial, sans-serif;
  color: black;
}

</style>
