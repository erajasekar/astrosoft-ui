<template>
  <section class="content">
    <section class="hero card">
      <div class="hero-body bg-teal-500 text-gray-900">
        <div class="container">
          <h1>
            Astrosoft - Free Vedic Astrology Software
          </h1>
          <h2>Features </h2>
          <p>
            Given birth details of individual it provides horoscope with details of Lagna, Rasi, Nakshata, Thithi, Paksha and many other features listed below
          </p>
          <ul class="list-none">
            <li>
              <h3>Birth Chart:</h3>
              <p>
                Provides Birth chart of individual with details of Lagna, Rasi, Nakshata, Thithi, Paksha, Siderial Time, Dasa Balance.
              </p>
            </li>
            <li>
              <h3>Planetary Positions:</h3>
              <p>
                Provides Longitudes, Rasi, Nakshathra Pada postion of all planets and jaimini karakas.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <h2>Installation</h2>
    <ol>
      <li>Install Java JDK from <a class="no-underline hover:underline text-blue-900" href="https://www.oracle.com/java/technologies/javase-downloads.html" rel="nofollow">oracle</a> if you don't already have Java installed on your system.</li>
      <li>Run <code>java -version</code> to verify if Java is installed.</li>
      <li>Download code from <a class="no-underline hover:underline text-blue-900" href="https://github.com/erajasekar/Astrosoft">GitHub</a> by clicking this <a href="https://github.com/erajasekar/Astrosoft/archive/master.zip">link</a> or clicking <code>Clone or download -&gt; Download Zip</code> button in Github</li>
      <li>Unzip <code>Astrosoft - master.zip</code></li>
      <li>Open command window on windows or terminal window in Mac/Linux.</li>
      <li>Change dir to Astrosoft installation dir for e.g <code>cd C:\Astrosoft - master</code></li>
      <li>Run <code>cd bin</code></li>
      <li>Launch Astrosoft by running command <code>./RunAstroSoft.bat</code></li>
      <li>If you run into problems or need help contact <strong><a class="no-underline hover:underline text-blue-900" href="mailto:innovativeastrosolutions@gmail.com">innovativeastrosolutions@gmail.com</a></strong></li>
    </ol>
  </section>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import { getCurrentPageUrl } from '../mixins/AppUtils'

@Component
export default class extends Vue {
  head () {
    return {
      titleTemplate: 'Free Vedic Astrology Software From %s',
      meta: [
        { name: 'og:url', content: getCurrentPageUrl('/') },
        { name: 'twitter:url', content: getCurrentPageUrl('/') }
      ]
    }
  }
}

</script>

<style scoped>

h1 {
  color: #2e68da;
}

.content blockquote {
  background-color:transparent;
}

.content ul {
  list-style: none;
}

/* TODO .content li:before {
  content: "\2650 ";
}*/

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  height: 95%;
}

</style>
