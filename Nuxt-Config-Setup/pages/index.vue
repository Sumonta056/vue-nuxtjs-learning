<template>
  <div class="min-h-screen">
    <Header />
    <main class="p-6 flex items-center justify-center">
      <div class="max-w-3xl w-full bg-neutral-800 rounded-2xl p-8 shadow-lg">
        <h1 class="text-3xl font-bold text-brand-primary mb-4">{{ appName }}</h1>
        <p class="text-gray-300 mb-6">This Nuxt 3 boilerplate demonstrates:</p>

        <ul class="list-disc list-inside space-y-2 text-gray-200 mb-6">
          <li>Custom Tailwind breakpoints & tokens</li>
          <li>Type-safe environment-based config (dev / prod)</li>
          <li>Feature flags toggled at runtime</li>
        </ul>

        <div v-if="features.enableDiscountBanner" class="p-4 rounded-lg bg-brand-secondary text-black mb-4">
          🎉 Discount banner is ON (toggle in <code>config/features.ts</code> or panel)
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-neutral-900 rounded">
            <p class="text-sm text-gray-400">API Base</p>
            <p class="font-mono">{{ config.apiBase }}</p>
          </div>
          <div class="p-4 bg-neutral-900 rounded">
            <p class="text-sm text-gray-400">Logging</p>
            <p>{{ config.enableLogging ? 'Enabled' : 'Disabled' }}</p>
          </div>
        </div>

        <div class="mt-6 text-sm text-gray-400">
          <p>Try changing <code>config/dev.ts</code> and <code>config/features.ts</code> or use the panel (dev only).</p>
        </div>
      </div>
    </main>

    <FeatureTogglePanel />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import FeatureTogglePanel from '~/components/FeatureTogglePanel.vue'
import { useAppConfig } from '~/composables/useConfig'

const { config, features } = useAppConfig()
const runtime = useRuntimeConfig()
const appName = runtime.public.appName || 'Nuxt App'
</script>
