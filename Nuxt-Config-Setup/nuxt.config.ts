import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/styles/global.css'],
  runtimeConfig: {
    // private keys (server-only)
    apiSecret: process.env.API_SECRET || '',
    // public keys exposed to client
    public: {
      appName: process.env.APP_NAME || 'Nuxt Configurable Boilerplate',
      analyticsEnabled: process.env.ANALYTICS === 'true' || false
    }
  },
  typescript: {
    strict: true
  }
})
