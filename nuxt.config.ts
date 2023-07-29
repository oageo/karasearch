// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bulma'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: "%s - Karasearch",
      meta: [
        { name: 'og:image', content: '/karasearch_logo.svg' }
      ],
      link: [
        { rel: 'icon', href: '/karasearch_logo.svg' }
      ]
    }
  }
})
