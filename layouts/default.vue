<template>
  <section class="center site">
    <TopHeader />
    <div class="container main">
      <nuxt />
    </div>
    <BottomFooter />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TopHeader from '@/components/TopHeader.vue'
import BottomFooter from '@/components/BottomFooter.vue'

@Component({
  components: {
    TopHeader,
    BottomFooter
  }
})
export default class extends Vue {
}

</script>
<style>
@import url('https://fonts.googleapis.com/css?family=KoHo|Share+Tech+Mono|Roboto|Titillium+Web');
html {
  font-size: 18px;
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
  background-image: url("~assets/background8.png")
}

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main {
  flex: 1;
}

</style>
