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
        I am currently creating an online Astrology course in English and Tamil Language. The course will be available in udemy.
        Please fill this <a class="no-underline hover:underline text-orange-800" href="http://bit.ly/3aHf2Eu" target="_blank">survey </a> to book your enrollment.
        You will receive a notification as soon as the course is launched and you will get a discount in appreciation of your input.
      </p>
      <h1>Course Content </h1>
      <p>
        The course content is published online and you view it by clicking <a class="no-underline hover:underline text-orange-800" href=" http://bit.ly/2sVotis" target="_blank">this link. </a>
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
