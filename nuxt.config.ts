// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools totally broken, not sure why
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg', href: '/logo.svg' }],

    },
  },
  runtimeConfig: {
    public: {
      siteUrl: '',
      umamiHost: '',
      umamiId: '',
    },
    browserlessApiKey: '',
    github: {
      clientId: '',
      clientSecret: '',
    },
    session: {
      name: 'nuxt-session',
      password: '',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-auth-utils',
    '@nuxtseo/module',
    '@nuxt/content',
    '@nuxtjs/supabase'
  ],
  extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      version: 2,
      ignoreLocalhost: true,
    },
  },
  shadcn: {
    prefix: 'Ui',
  },
  supabase: {
    url: 'https://qqjdnvpfusuvdjwfkijh.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxamRudnBmdXN1dmRqd2ZraWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3MDQyMjQsImV4cCI6MjAyODI4MDIyNH0.xIaty3OXkYe3sW_8BowpYrG3kncJjnVMudf9JWJ8vRM'
  },
  tailwindcss: {
    viewer: false,
  },
  hooks: {
    'vite:extendConfig': (config, { isClient }) => {
      if (isClient)
      // @ts-expect-error it has alias of vue
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js'
    },
  },
  googleFonts: {
    families: {
      Inter: '400..800',
    },
  },
  site: {
    name: 'LaunchGala',
    description: 'Host events',
    defaultLocale: 'en',
  },
  plugins: [
    { src: '~/plugins/toast.client.js', mode: 'client' }  // Register the plugin only on the client side
  ]
})
