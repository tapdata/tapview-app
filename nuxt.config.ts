// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

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
})
