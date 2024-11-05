export default defineAppConfig({
  myLayer: {
    name: 'Lanista Nuxt Layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
