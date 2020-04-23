require('dotenv').config()

const description = 'Vedic Astrology Learning Portal from Innovative Astro Solutions. Here you will find courses, books , articles that will help you become a highly learned vedic astrology practitioner'
const baseUrl = 'https://learn.innovativeastrosolutions.com'

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
      { name: 'google-site-verification', content: 'dEjBnsCAemk2rBsYmFEiNwPlhVYyjl7D-k1dz9A3s0g'},
      { name: 'author', content: 'Muthu Vijayan Elango'},
      { property: 'og:type', content: 'website'},
      { property: 'og:title', content: process.env.npm_package_description},
      { property: 'og:site_name', content: 'Learn Vedic Astrology'},
      { property: 'og:description', content: description},
      { property: 'og:image', content: baseUrl + '/social_image2.png'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:title', content: process.env.npm_package_description},
      { property: 'twitter:site', content: 'Learn Vedic Astrology'},
      { name: 'twitter:description', content: description},
      { name: 'twitter:image', content: baseUrl + '/social_image2.png'}
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
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
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
  googleAnalytics: {
    id: 'UA-97127621-2'
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
