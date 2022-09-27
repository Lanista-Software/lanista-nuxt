// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  typescript: {
    shim: false
  },
  app: {
    head: {
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css' }
      ]
    }
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  tailwindcss: {
    // Options
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    // apiSecret: "123",
    // Keys within public are also exposed client-side
    // public: {
    //   apiBase: "/api",
    // },
  },
  nitro: {
    // Sitemap generator to static run generate command
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
