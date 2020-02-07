<template>
  <section class="content">
    <section class="hero is-large">
      <div class="book-body columns">
        <div class="column is-half">
          <b-carousel :indicator-inside="false" :autoplay="false">
            <b-carousel-item>
              <span class="image">
                <img width="600px" src="~assets/AstrologyBook-FrontCover.jpg" alt="Book: Achieving Success Through Astrological Guidance">
              </span>
            </b-carousel-item>
            <b-carousel-item>
              <span class="image">
                <img width="600px" src="~assets/AstrologyBook-BackCover.jpg" alt="Book: Achieving Success Through Astrological Guidance">
              </span>
            </b-carousel-item>
            <template slot="indicators" slot-scope="key">
              <span class="al image">
                {{ getCoverSlideText(key) }}
              </span>
            </template>
          </b-carousel>
        </div>
        <div class="column is-half font-semibold text-2xl">
          <section class="mb-20">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/pR5kBA6TXA0"
                width="560"
                height="315"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </section>
          <p>
            Most astrology books talk about astrological concepts but they have a minimal focus on clearing myths about astrology and in guiding a common man to best utilize astrological guidance.
            This book will explain the importance of astrological guidance in human advancement.
            After reading this book if you are able <i>to make better decisions in your life</i>, then my purpose is met.
          </p>
          <div>
            <div class="buttons level">
              <div class="level-item">
                <b-button
                  type="is-info"
                  tag="a"
                  target="_blank"
                  href="https://www.amazon.in/Achieving-Astrological-Guidance-Paperback-Book-100_Muthu/dp/B07WVXP7PH"
                  size="is-large"
                  icon-left="cart"
                >
                  Order
                </b-button>
              </div>
              <div class="level-item">
                <b-button
                  type="is-light"
                  tag="a"
                  target="_blank"
                  href="https://78033ec1-ab1b-44c0-8cec-9f40e2fb171b.filesusr.com/ugd/16b291_915afccc9d6341c6ab1abccca81e6e22.pdf"
                  size="is-medium"
                  icon-left="book-open-variant"
                >
                  Read Sample
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="hero bg-teal-500 card mt-10">
      <div class="hero-body text-white font-bold">
        <b-rate
          v-model="reviewRating"
          :spaced="true"
          :disabled="true"
          custom-text="Reviews from Amazon"
        />
        <b-carousel :indicator-inside="true" :autoplay="true">
          <b-carousel-item v-for="(item, i) in 3" :key="i">
            <span class="image">
              <img :src="`/book-review-${i}.png`" alt="Book: Achieving Success Through Astrological Guidance Amazon Review">
            </span>
          </b-carousel-item>
        </b-carousel>
      </div>
    </div>
    <h1>Is this book for you? </h1>
    <ul class="list-none">
      <li>
        If you are a strong believer of astrology, but unsure on how to use astrological guidance wisely
      </li>
      <li>
        You know that astrology works but don’t know how astrology really works?
      </li>
      <li>
        If you want to lead an exceptional life by understanding what you are good at
      </li>
    </ul>
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

  getCoverSlideText (key: any) {
    return key.i === 0 ? 'Front' : 'Back'
  }

  get reviewRating () {
    return 5.0
  }
}

</script>

<style scoped>

h1 {
  color: #2e68da;
}

h6 {
  color: white
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
