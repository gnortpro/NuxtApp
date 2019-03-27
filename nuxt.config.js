import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      // }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  server: {
    port: 3333,
    host: '0.0.0.0'
  },
  /*
   ** Axios module configuration
   */
  axios: {
    withCredentials: false, // This is the default
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    baseURL: 'https://blog.trongggg.com/wp-json/'
    // See https://github.com/nuxt-community/axios-module#options
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'login/login',
            method: 'post',
            propertyName: 'data.token'
          },
          user: { url: 'users/2', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/course',
      user: '/profile'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
