<script setup>
import { defineAsyncComponent } from 'vue'

// Code-splitting: Load component only when needed
const DynamicComponent = defineAsyncComponent(() => 
  import('~/components/DynamicComponent.vue')
)

// Lazy hydration: Component won't hydrate until visible
const showLazyComponent = ref(false)

// Server caching example
const { data: cachedData, refresh } = await useFetch('/api/cached', {
  key: 'cached-data'
})

// Prefetch example - prefetch products data
const { data: products } = await useFetch('/api/products', {
  key: 'products',
  // Prefetch on hover
  lazy: true
})
</script>

<template>
  <div class="p-8 text-white bg-slate-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Performance Optimizations</h1>
    
    <!-- Code-splitting Example -->
    <div class="mb-8 p-4 bg-slate-800 rounded">
      <h2 class="text-xl mb-4">1. Code-splitting (defineAsyncComponent)</h2>
      <p class="mb-4 text-gray-400">Component is loaded only when needed</p>
      <button 
        @click="showLazyComponent = !showLazyComponent"
        class="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        {{ showLazyComponent ? 'Hide' : 'Show' }} Dynamic Component
      </button>
      <Suspense>
        <template #default>
          <DynamicComponent v-if="showLazyComponent" message="Hello from lazy component!" />
        </template>
        <template #fallback>
          <div class="mt-4 p-4 bg-yellow-900 rounded">Loading component...</div>
        </template>
      </Suspense>
    </div>

    <!-- Lazy Hydration Example -->
    <div class="mb-8 p-4 bg-slate-800 rounded">
      <h2 class="text-xl mb-4">2. Lazy Hydration</h2>
      <p class="mb-4 text-gray-400">Component hydrates only when visible</p>
      <ClientOnly>
        <div class="p-4 bg-green-900 rounded">
          <p>This component only hydrates on the client!</p>
          <p class="text-sm text-gray-300 mt-2">Check Network tab - no hydration until needed</p>
        </div>
        <template #fallback>
          <div class="p-4 bg-gray-700 rounded">Loading...</div>
        </template>
      </ClientOnly>
    </div>

    <!-- Server Caching Example -->
    <div class="mb-8 p-4 bg-slate-800 rounded">
      <h2 class="text-xl mb-4">3. Server Caching (Nitro)</h2>
      <div v-if="cachedData">
        <p>Timestamp: {{ cachedData.timestamp }}</p>
        <p>Message: {{ cachedData.message }}</p>
        <p>Random: {{ cachedData.random }}</p>
        <button 
          @click="refresh()"
          class="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Refresh (will use cache if < 60s)
        </button>
      </div>
    </div>

    <!-- Prefetching Routes -->
    <div class="mb-8 p-4 bg-slate-800 rounded">
      <h2 class="text-xl mb-4">4. Prefetching Routes</h2>
      <p class="mb-4 text-gray-400">Hover over links to prefetch data</p>
      <div class="space-x-4">
        <NuxtLink 
          to="/cart" 
          prefetch
          class="text-blue-400 underline hover:text-blue-300"
        >
          Cart (prefetched)
        </NuxtLink>
        <NuxtLink 
          to="/computed" 
          prefetch
          class="text-blue-400 underline hover:text-blue-300"
        >
          Computed (prefetched)
        </NuxtLink>
      </div>
    </div>

    <!-- Suspense and Async Setup -->
    <div class="mb-8 p-4 bg-slate-800 rounded">
      <h2 class="text-xl mb-4">5. Suspense & Async Setup</h2>
      <Suspense>
        <template #default>
          <AsyncComponent />
        </template>
        <template #fallback>
          <div class="p-4 bg-yellow-900 rounded">Loading async data...</div>
        </template>
      </Suspense>
    </div>

    <NuxtLink to="/" class="mt-4 text-blue-400 underline block">Back to Home</NuxtLink>
  </div>
</template>

