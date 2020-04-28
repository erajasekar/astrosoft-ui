<template>
  <section class="content">
    <section class="hero card">
      <div class="hero-body bg-yellow-200 text-gray-900">
        <div class="container">
          <h1>
            Astrosoft - Free Vedic Astrology Software
          </h1>
          <p>
            Given birth details of individual it provides horoscope with details of Lagna, Rasi, Nakshata, Thithi, Paksha and many other <b><i>features</i></b> listed below
          </p>
          <ul class="list-none">
            <li class="mb-3">
              <h6>Birth Chart:</h6>
              <p>
                Provides Birth chart of individual with details of Lagna, Rasi, Nakshata, Thithi, Paksha, Siderial Time, Dasa Balance.
              </p>
            </li>
            <li class="mb-3">
              <h6>Planetary Positions:</h6>
              <p>
                Provides Longitudes, Rasi, Nakshathra Pada postion of all planets and jaimini karakas.
              </p>
            </li>
            <li class="mb-3">
              <h6>Bhava Positions:</h6>
              <p>
                Provides Start , Mid and End Positions for all bhavas.
              </p>
            </li>
            <li class="mb-3">
              <h6>Divisional Charts:</h6>
              <p>
                Computes Bhava, Navamsa and all 16 shodasha varga charts.
              </p>
            </li>
            <li class="mb-3">
              <h6>Vimshottari dasa:</h6>
              <p>
                Computes Vimshottari dasa details up to anthra.
              </p>
            </li>
            <li class="mb-3">
              <h6>Ashtavarga:</h6>
              <p>
                Computes Ashtavarga of all planets with trikona, ekathipathya reduction and gunaharas.
              </p>
            </li>
            <li class="mb-3">
              <h6>Shadbala:</h6>
              <p>
                Computes all shadbala of planets with ishta bala, kashta bala, bhava bala and ranks them based on strength.
              </p>
            </li>
            <li class="mb-3">
              <h6>Ephemeris:</h6>
              <p>
                Provides daily and monthy Ephemeris for all the planets.
              </p>
            </li>
            <li class="mb-3">
              <h6>Panchang:</h6>
              <p>
                Provides daily panchang with details of Nakshathra, Thithi, Yoga, Sunrise/Sunset, Rahu kala, Yama kanda, Auspicious time.
              </p>
            </li>
            <li class="mb-3">
              <h6>Marriage Compactibility:</h6>
              <p>
                Computes compactibility kutas and dosha for given pair of birth chart or nakshathra.
              </p>
            </li>
            <li class="mb-3">
              <h6>Ayanamsa:</h6>
              <p>
                Supports Lahari, Raman and Krishnamoorthy ayanamsa.
              </p>
            </li>
            <li class="mb-3">
              <h6>Location:</h6>
              <p>
                All calculations can be computed for any place in world by providing latitude / longitude. It also has built-in latitudes / longitudes for all cities in India.
              </p>
            </li>
            <li class="mb-3">
              <h6>Language:</h6>
              <p>
                Available in English and Tamil.
              </p>
            </li>
          </ul>
        </div>
        <div class="buttons ml-8">
          <b-button
            type="is-info"
            tag="a"
            target="_blank"
            href="https://github.com/erajasekar/Astrosoft#installation"
            size="is-medium"
            icon-left="download"
          >
            Download
          </b-button>
        </div>
      </div>
    </section>
    <section class="columns is-multiline mt-5 ml-1 mr-1 card">
      <div class="column is-half pb-10 mt-5 border-gray-600 border-b-2">
        <h2>Installation</h2>
        <ol>
          <li>Install Java JDK from <a class="no-underline hover:underline font-bold text-purple-900" href="https://www.oracle.com/java/technologies/javase-downloads.html" rel="nofollow">oracle</a> if you don't already have Java installed on your system.</li>
          <li>Run <code>java -version</code> to verify if Java is installed.</li>
          <li>You will need Java version 8 or later. If you have older version Java Installed, please install version higher than Java 8.</li>
          <li>Download code from <a class="no-underline hover:underline font-bold text-purple-900" href="https://github.com/erajasekar/Astrosoft">GitHub</a> by clicking this <a class="no-underline hover:underline font-bold text-purple-900" target="_blank" href="https://github.com/erajasekar/Astrosoft/archive/master.zip">link</a> or clicking <code>Clone or download -&gt; Download Zip</code> button in Github</li>
          <li>Unzip <code>Astrosoft - master.zip</code></li>
          <li>Open command window on windows or terminal window in Mac/Linux.</li>
          <li>Change dir to Astrosoft installation dir for e.g <code>cd C:\Astrosoft - master</code>. For help with changing dirs in Linux or Mac, watch this <a class="no-underline hover:underline font-bold text-purple-900" target="_blank" href="https://www.youtube.com/watch?v=y7mooASbLfQ">video</a>.</li>
          <li>Run <code>cd bin</code></li>
          <li>Launch Astrosoft by running command <code>./RunAstroSoft.bat</code></li> in windows
          <li>If you have Linux or MacOS, then run <code>./RunAstroSoft.sh</code></li> to Launch Astrosoft.
          <li>If you run into problems or need help contact <strong><a class="no-underline hover:underline font-bold text-purple-900" href="mailto:innovativeastrosolutions@gmail.com">innovativeastrosolutions@gmail.com</a></strong></li>
        </ol>
      </div>
      <div class="column is-half pb-10 mt-5 border-gray-600 border-b-2">
        <h2>
          Installation Instructions Video
        </h2>
        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/MbzYURTO0sc"
            width="560"
            height="315"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </section>
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

h1 {
  color: green;
}

h6 {
  color: #fd1f2a;
}

.content ul {
  list-style: none;
}

.content li {
  line-height: 40px;
}
</style>
