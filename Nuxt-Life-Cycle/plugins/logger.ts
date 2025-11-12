// Custom logger plugin that runs on both server and client
export default defineNuxtPlugin((nuxtApp) => {
  const logger = {
    info: (message: string, ...args: any[]) => {
      if (process.client) {
        console.log(`📝 [Client] ${message}`, ...args)
      } else {
        console.log(`📝 [Server] ${message}`, ...args)
      }
    },
    error: (message: string, ...args: any[]) => {
      if (process.client) {
        console.error(`❌ [Client] ${message}`, ...args)
      } else {
        console.error(`❌ [Server] ${message}`, ...args)
      }
    },
    warn: (message: string, ...args: any[]) => {
      if (process.client) {
        console.warn(`⚠️ [Client] ${message}`, ...args)
      } else {
        console.warn(`⚠️ [Server] ${message}`, ...args)
      }
    },
  }

  // Make logger available globally
  nuxtApp.provide('logger', logger)
})

