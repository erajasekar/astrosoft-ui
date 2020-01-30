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
    <h1>Course </h1>
    <p>
      I am currently creating an online Astrology course in English and Tamil Language. The course will be available in udemy.
      Please fill this <a class="no-underline hover:underline text-orange-800" href="http://bit.ly/3aHf2Eu" target="_blank">survey </a> to book your enrollment.
      You will receive a notification as soon as the course is launched and you will get a discount in appreciation of your input.
    </p>
    <h1>Course Preview </h1>
    <h3> Introduction to Astrology in English </h3>
    <b-collapse :open="true" aria-id="contentIdForA11y1">
      <button
        slot="trigger"
        class="button is-info"
        aria-controls="contentIdForA11y1"
      >
        View Course Content
      </button>
      <div class="notification is-white max-h-full">
        <div class="video-container">
          <iframe
            id="preview-iframe"
            src="https://doculet.net/doc/fe11ed64e486edebee8f24f27fad8291"
            align="middle"
            width="100%"
            height="3359"
            allowfullscreen="true"
            scrolling="no"
            frameborder="0">
          </iframe>
        </div>
      </div>
    </b-collapse>
    <h1>Learning Tools</h1>
    <ul class="list-none">
      <li>
        <nuxt-link to="/ephemeris">
          <span class="subtitle text-orange-800">
            Planetary Ephemeris
          </span>
        </nuxt-link>
      </li>
      <li>
        <a href="https://www.innovativeastrosolutions.com/astrology-software" target="_blank">
          <span class="subtitle text-orange-800"> Astrology Software</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">

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
