export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-application',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@node_modules/bootstrap/dist/css/bootstrap.min.css',
    '@/assets/fonts/fonts.css',
    '@/assets/scss/main.scss'
  ],

  loading: {color: '#fff'},

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    ['nuxt-fontawesome', {
    component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebookF']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faTwitter']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faInstagram']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faLinkedinIn']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faInfo']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faKey']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faPhoneAlt']
        }
      ]
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
