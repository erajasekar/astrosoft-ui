<template>
  <section class="center site bg-gray-100">
    <logo />
    <div class="container main">
      <nuxt />
    </div>
    <footer class="p-5 bg-red-900">
      <div class="level  text-red-100 text-xl">
        <p class="level-item">
          &copy; by &nbsp; <a href="https://www.innovativeastrosolutions.com/"> Innovative Astro Solutions</a>.
        </p>
        <p class="level-item">
          Contact : innovativeastrosolutions@gmail.com
        </p>
        <p class="level-item">
          Phone : +91 9008477228
        </p>
      </div>
    </footer>
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
