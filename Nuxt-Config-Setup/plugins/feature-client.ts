import { defineNuxtPlugin, useState } from '#app'
import features from '~/config/features'

export default defineNuxtPlugin(() => {
  // expose a reactive features object on the nuxt app so components can toggle at runtime
  const runtimeFlags = useState('runtimeFlags', () => ({ ...features }))
  return {
    provide: {
      flags: runtimeFlags
    }
  }
})
