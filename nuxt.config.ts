export default defineNuxtConfig({
  compatibilityDate: '2026-08-08',
  modules: ['@nuxt/content', '@unocss/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: 'Abra X — Full-Stack Engineer',
      meta: [
        { name: 'description', content: 'Abra X · 全栈工程师，专注 Vue / React / NestJS / PostgreSQL / Redis / Docker' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Sora:wght@400;600;700;800&display=swap',
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/books', '/sports', '/life'],
      crawlLinks: true,
    },
  },
})
