import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Tosho Ajibade',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Quicksand|Playball'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  workbox: {
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/res\.cloudinary\.com/,
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheName: 'Videos',
          cacheableResponse: { statuses: [0, 200] }
        }
      }
    ]
  },
  meta: {
    name: 'Tosho Ajibade',
    theme_color: '#4f81ff'
  },
  manifest: {
    name: 'Tosho Ajibade',
    short_name: 'TA',
    lang: 'en',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#4f81ff'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#4f81ff' },
  css: ['~/assets/styles/app.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
