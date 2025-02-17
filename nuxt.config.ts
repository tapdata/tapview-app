// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 5000,
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/pro',
      prefix: 'U',
      pathPrefix: false,
    },
  ],

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
  ],

  compatibilityDate: '2025-02-10',

  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },
})
