// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    '@lui-ui/lui-nuxt',
    "@nuxt/image",
    "@nuxt/scripts"
  ]
})