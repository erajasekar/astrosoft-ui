<template>
  <section class="content">
    <section class="hero card">
      <div class="hero-body bg-green-500 text-gray-900">
        <div class="container">
          <blockquote class="text-xl font-bold italic p-5">
            Guide a person through astrology, he will make his life better. Teach astrology to a person, he will make other people's lives better
          </blockquote>
          <p class="text-lg font-semibold text-yellow-200">
            Too much information over the Internet can easily divert your learning.
            We aim at providing the most relevant information to you and help you become a highly learned Vedic astrology practitioner.
            My father Elango has more than 45 years of experience in this field. I am combining his expertise in this learning portal.
          </p>
        </div>
      </div>
    </section>
    <section class="m-2">
      <h1>Course </h1>
      <p>
        Have you ever wanted to learn astrology for yourself to find the deeper meaning from your birth chart?
        or aspired to become a full-time astrologer with a deep understanding of astrological principles,
        and ready to guide other people by this noble profession? If so, let us continue.
      </p>
      <p>
        The hugely rewarding aspect of being an astrologer is enabling people to advance in life in a practical and meaningful way.
        Throughout this training course, you'll learn to add massive value to people’s lives by helping them to read their birth chart to find inherent strengths and weaknesses and guide them in life.
      </p>
      <section class="hero card bg-red-100 p-5">
        <div class="book-body columns">
          <div class="column is-half">
            <h3>Who this course is for:</h3>
            <ul>
              <li>If you want to learn astrology from the scratch.</li>
              <li>If you want to understand the science behind the astrology.</li>
              <li>Confidently apply Vedic astrological principles in your own birth chart.</li>
              <li>If you want to leverage astrological guidance to make the best decisions in your life.</li>
              <li>If you want to take up astrology as a part-time career.</li>
              <li>If you want to become a full-time astrologer in the future</li>
              <li>If you want to move from beginner level to intermediate level in astrology.</li>
              <li>If you want to teach astrology to the budding astrologers.</li>
            </ul>
          </div>
          <div class="column is-half">
            <h3>Why should you learn through an online course?</h3>
            <ul>
              <li>You can learn astrology sitting at your home.</li>
              <li>After enrollment, you can watch any videos any number of times.</li>
              <li>No time restrictions, you can learn at your own free time.</li>
              <li>One time payment and you will get lifetime access to 63 lectures, ~7 hours of on-demand videos, 42 downloadable resources, exercises, quizzes, and many more.</li>
              <li>You will get our own astrology software for free as part of this course.</li>
              <li>Course completion certification at the end of the course.</li>
            </ul>
          </div>
        </div>
      </section>
      <h2>In this course, You will learn</h2>
      <ul>
        <li>What is astrology?</li>
        <li>The astronomical evidence in astrology</li>
        <li>What is Ayanamsa?</li>
        <li>What is Rahu/Ketu?</li>
        <li>The Zodiac, and its significance</li>
        <li>12 Zodiac signs and its characteristics</li>
        <li>Planets in Vedic astrology and its characteristics</li>
        <li>The casting of Rashi chart</li>
        <li>The casting of Navamsa Chart</li>
        <li>Shadbala</li>
        <li>Dasa bukti calculations</li>
        <li>Raja Yogas in Vedic astrology</li>
        <li>Prediction techniques for Career</li>
        <li>Prediction techniques for marriage</li>
        <li>Prediction techniques for wealth</li>
        <li>Prediction techniques for health</li>
        <li>Longevity predictions, etc.</li>
      </ul>
      <p>
        Join your instructor, Muthu Vijayan Elango he is an astrologer and a certified life coach at Innovativeastrosolutions.
        He learnt astrology from his father Elango and has been practicing it for more than 18 years.
        After completing his Master's degree in engineering from the College of Engineering Guindy a premier institute in India,
        he worked in a well-known MNC for a decade before he found his calling in astrology.
        He is passionate about sharing his astrological wisdom to the common man.
        He is one of the most popular writers on Quora pertaining to the topic of astrology.
      </p>
      <h1>Course Preview </h1>
      <p>
        You can watch the sneak peek video of the course.
      </p>
      <div class="columns is-multiline mt-5 ml-1 mr-1 bg-gray-200 card">
        <div v-for="(preview, index) in previewVideos" v-bind:key="index" class="column is-half pb-10 mt-5 border-gray-600 border-b-2">
          <h3>
            {{ preview.title }}
          </h3>
          <div class="video-container">
            <iframe
              :src="preview.src"
              width="560"
              height="315"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import { getCurrentPageUrl } from '../mixins/AppUtils'
import { previewVideos } from '../mixins/CoursePreview'

@Component
export default class extends Vue {
  head () {
    return {
      titleTemplate: 'Best Vedic Astrology Course Online| Divine subject Demystified For You from %s',
      meta: [
        { name: 'og:url', content: getCurrentPageUrl('/') },
        { name: 'twitter:url', content: getCurrentPageUrl('/') }
      ]
    }
  }

  get previewVideos () {
    return previewVideos
  }
}

</script>

<style scoped>

h1 {
  color: #2e68da;
}

h3 {
  color: darkslategrey;
}

.content blockquote {
  background-color:transparent;
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
