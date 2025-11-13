import { defineNitroPlugin } from '#imports'
import features from '~/config/features'

export default defineNitroPlugin(() => {
  // Example: attach feature flags to nitro event context or provide server-side access
  return {
    provide: {
      serverFeatures: features
    }
  }
})
