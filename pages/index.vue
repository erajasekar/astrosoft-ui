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
      <p class="text-xl">
        Have you ever wanted to learn astrology for yourself to find the deeper meaning from your birth chart?
        or aspired to become a full-time astrologer with a deep understanding of astrological principles,
        and ready to guide other people by this noble profession? If so, let us continue.
      </p>
      <p class="text-xl">
        The hugely rewarding aspect of being an astrologer is enabling people to advance in life in a practical and meaningful way.
        Throughout this training course, you'll learn to add massive value to people’s lives by helping them to read their birth chart to find inherent strengths and weaknesses and guide them in life.
      </p>
      <section class="hero card course-intro">
        <div class="hero-body columns font-medium">
          <div class="tick-list column is-half">
            <h3>Who this course is for?</h3>
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
          <div class="column is-half check-list">
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
      <section class="hero card bg-red-100 mt-10">
        <div class="hero-body course-body columns">
          <div class="column is-half font-semibold">
            <h2>In this course, You will learn</h2>
            <ol class="text-lg">
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
            </ol>
          </div>
          <div class="column is-half" itemscope itemtype="http://schema.org/Person">
            <h2>
              About the Author
            </h2>
            <p class="text-yellow-200 text-lg font-extrabold">
              <span class="italic" itemprop="name">Muthu Vijayan Elango</span> is an <span itemprop="jobTitle">astrologer and a certified life coach</span> at <a class="border-dotted border-b-2 hover:text-gray-700" itemprop="url" href="https://www.innovativeastrosolutions.com/" target="_blank">innovativeastrosolutions.com</a>
              . He learnt astrology from his father Elango and has been practicing it for more than 18 years.
              After completing his Master degree in engineering from College of Engineering Guindy a premier institute in India , he worked in a well known MNC for a decade before he found his calling in astrology.
              He is passionate on sharing his astrological wisdom to the common man.
              He is one of the most popular writers on <a class="border-dotted border-b-2 hover:text-gray-700" href="https://www.quora.com/profile/Elango-Muthu-Vijayan/answers" target="_blank">Quora</a> pertaining to the topic of astrology.
            </p>
            <div class="buttons level">
              <div class="level-item">
                <b-button
                  type="is-info"
                  tag="a"
                  target="_blank"
                  href="https://www.udemy.com/course/fundamentals-of-vedic-astrology-beginner-to-intermediate/"
                  size="is-medium"
                  icon-left="school"
                >
                  Enroll in English Course
                </b-button>
              </div>
              <div class="level-item">
                <b-button
                  type="is-light"
                  tag="a"
                  target="_blank"
                  href="https://www.udemy.com/course/fundamentals-of-vedic-astrology-in-tamil-beginner-level/"
                  size="is-medium"
                  icon-left="school"
                >
                  Enroll in Tamil Course
                </b-button>
              </div>
            </div>
            <b-notification
              type="is-dark"
              has-icon
              aria-close-label="Close notification"
            >
              <p class="text-lg italic font-semibold text-yellow-400">
                Looking for discounts? Please fill this <a href="https://bit.ly/353VF69" target="_blank">survey </a> to get notified when we announce special offers.
              </p>
            </b-notification>
          </div>
        </div>
      </section>
      <h1>Course Preview </h1>
      <p>
        Watch the sneak peek videos of the course go get glimpse of the course.
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

.course-body {
  background-color: #4A586F;
  color: white;
  padding: 30px 10px 10px 10px;
  margin: 0px;
}

.course-intro {
  background-color: #dcf6e5;
  color: #05130a;
}

h1 {
  color: #2e68da;
}

h2 {
  color: #F3CA6B;
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

.tick-list ul {
  list-style: none;
}

.tick-list li:before {
  content: "\2714    ";
}

.check-list ul {
  list-style: none;
}

.check-list li:before {
  content: "\274F    ";
}

</style>
