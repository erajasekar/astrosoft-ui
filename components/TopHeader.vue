<template>
  <section class="hero is-warning max-w-full  border-b-4 border-yellow-700">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img class="h-24" src="~assets/logo.png" alt="Innovative Astro Solutions"> </img>
        <h1 class="title">
          Learn Vedic Astrology
        </h1>
        <h2 class="italic text-lg text-yellow-800">
          Divine Subject, Demystified For You!
        </h2>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li :class="isMenuActive('index')">
              <a href="/">Course</a>
            </li>
            <li :class="isMenuActive('astrology-books')">
              <nuxt-link to="/astrology-books">
                Books
              </nuxt-link>
            </li>
            <li :class="isMenuActive('ephemeris')">
              <nuxt-link to="/ephemeris">
                Ephemeris
              </nuxt-link>
            </li>
            <li :class="isMenuActive('panchang')">
              <nuxt-link to="/panchang">
                Panchang
              </nuxt-link>
            </li>
            <li :class="isMenuActive('software')">
              <nuxt-link to="/software">
                Software
              </nuxt-link>
            </li>
            <li>
              <a href="https://www.innovativeastrosolutions.com/articles" target="_blank">Articles</a>
            </li>
            <li>
              <a href="https://www.innovativeastrosolutions.com/" target="_blank">Consulting</a>
            </li>
            <li>
              <a href="https://www.innovativeastrosolutions.com/about" target="_blank">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script lang="ts">

import { Vue } from 'nuxt-property-decorator'
export default class extends Vue {
  isMenuActive (menuName: string) {
    return this.$route.name === menuName ? 'is-active' : ''
  }
}

</script>
<style>
</style>
