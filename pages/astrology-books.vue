<template>
  <section class="content">
    <section class="hero is-large">
      <div class="book-body columns">
        <div class="column is-half">
          <b-carousel :indicator-inside="false" :autoplay="false" >
            <b-carousel-item>
              <span class="image" key="1">
                <img width="600px" src="~assets/AstrologyBook-FrontCover.jpg" alt="Book: Achieving Success Through Astrological Guidance">
              </span>
            </b-carousel-item>
            <b-carousel-item key="2">
              <span class="image">
                <img width="600px" src="~assets/AstrologyBook-BackCover.jpg" alt="Book: Achieving Success Through Astrological Guidance">
              </span>
            </b-carousel-item>
            <template slot="indicators">
                <span class="al image">
                  front
                </span>
            </template>
          </b-carousel>
        </div>
        <div class="column is-half font-semibold text-2xl">
          <p>
            Most astrology books talk about astrological concepts but they have a minimal focus on clearing myths about astrology and in guiding a common man to best utilize astrological guidance.
            This book will explain the importance of astrological guidance in human advancement.
            After reading this book if you are able <i>to make better decisions in your life</i>, then my purpose is met.
          </p>
          <div>
            <b-button
              type="is-info"
              tag="a"
              target="_blank"
              href="https://www.amazon.in/Achieving-Astrological-Guidance-Paperback-Book-100_Muthu/dp/B07WVXP7PH"
              size="is-large"
              icon-left="cart">
              Order
            </b-button>
          </div>
        </div>
      </div>
    </section>
    <h1>Course </h1>
    <p>
      I am currently creating an online Astrology course in English and Tamil Language. The course will be available in udemy.
      Please fill this <a class="no-underline hover:underline text-orange-800" href="http://bit.ly/3aHf2Eu" target="_blank">survey </a> to book your enrollment.
      You will receive a notification as soon as the course is launched and you will get a discount in appreciation of your input.
    </p>
  </section>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import { getCurrentPageUrl } from '../mixins/AppUtils'

@Component
export default class extends Vue {
  head () {
    return {
      titleTemplate: 'Book: Achieving Success Through Astrological Guidance | %s',
      meta: [
        { name: 'og:url', content: getCurrentPageUrl('/astrology-books') },
        { name: 'twitter:url', content: getCurrentPageUrl('/astrology-books') }
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

.book-body {
  background-color: #5b4e4b;
  color: white;
  padding: 100px 10px 10px 10px;
}

.content ul {
  list-style: none;
}

.content li:before {
  content: "\2650 ";
}

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
