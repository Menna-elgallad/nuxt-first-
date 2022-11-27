export default defineNuxtConfig({
  modules: ['nuxt-graphql-client'],
  css: ["@/assets/style/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/style/globals.scss" as *;`,
        },
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
 
  'graphql-client': {
    clients: {
        default: {
            host: 'https://board.humm.world/graphql',
            // Basic
            // token: process.env.API_KEY,
            // Advanced
           
        }
    }}
});
