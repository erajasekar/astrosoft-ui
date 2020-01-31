require('dotenv').config()

const description = 'Vedic Astrology Learning Portal from Innovative Astro Solutions. Here you will find courses, books , articles that will help you become a highly learned vedic astrology practitioner'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'keywords', content: 'Astrology, Vedic Astrology, Learn Astrology, Astrology Course , Astrology Books'},
      { name: 'robots', content: 'index, follow'},
      { name: 'author', content: 'Muthu Vijayan Elango'},
      { name: 'og:type', content: 'website'},
      { name: 'og:title', content: process.env.npm_package_description},
      { name: 'og:description', content: description},
      { name: 'og:image', content: 'Muthu Vijayan Elango'},
      { name: 'twitter:card', content: 'website'},
      { name: 'twitter:title', content: process.env.npm_package_description},
      { name: 'twitter:description', content: description},
      { name: 'twitter:image', content: 'Muthu Vijayan Elango'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=' + process.env.GOOGLE_MAPS_API_KEY + '&libraries=geometry,places'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/global-components.ts'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-buefy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    headers: {
      post: {
        'x-api-key': process.env.INNOVATIVE_API_KEY,
        'Content-Type': 'application/json'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
