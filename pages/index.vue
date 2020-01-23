<template>
  <section class="content mt-5">
    <b-notification :closable="false" type="is-info">
      <blockquote class="text-xl font-bold">
        Guide a person through astrology, he will make his life better. Teach astrology to a person, he will make other people's lives better
      </blockquote>
    </b-notification>
    <p class="mt-3">
      Too much information over the Internet can easily divert your learning.
      We aim at providing the most relevant information to you and help you become a highly learned Vedic astrology practitioner.
      My father Elango has more than 45 years of experience in this field. I am combining his expertise in this learning portal.
    </p>
    <h1>Tools </h1>
    <ul>
      <li>
        <nuxt-link to="/ephemeris">
          <h3>Planetary Ephemeris</h3>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">

</script>

<style>

.content blockquote {
    background-color:transparent;
}

</style>
