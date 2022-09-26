// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss",  '@nuxt/content'],
  typescript: {
    shim: false,
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    // apiSecret: "123",
    // Keys within public are also exposed client-side
    // public: {
    //   apiBase: "/api",
    // },
  },
});