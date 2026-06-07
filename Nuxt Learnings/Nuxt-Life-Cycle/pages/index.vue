<script setup>
import { onMounted, onUnmounted, watchEffect } from "vue";

// Nuxt server + client data fetching
const { data, pending, error } = await useFetch("/api/hello", {
  server: true, // Run on server during SSR
});

console.log("🧠 [Nuxt] Page setup() running...");

// WatchEffect example (runs whenever data changes)
watchEffect(() => {
  if (data.value) {
    console.log("👀 [Vue] Data changed:", data.value);
  }
});

// Vue lifecycle
onMounted(() => {
  console.log("✅ [Vue] Component Mounted (Hydration Done)");
});

onUnmounted(() => {
  console.log("🧹 [Vue] Component Unmounted");
});

// Use logger plugin
const { $logger } = useNuxtApp()
$logger.info('Home page loaded')
</script>

<template>
  <div class="p-8 text-white bg-slate-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-center">Nuxt Life Cycle Examples</h1>

    <div v-if="pending" class="text-center">⏳ Loading...</div>
    <div v-else-if="error" class="text-center">❌ Error: {{ error.message }}</div>
    <div v-else class="text-center mb-8">
      <p>
        Server Message: <b>{{ data.message }}</b>
      </p>
    </div>

    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <NuxtLink to="/computed" class="p-6 bg-slate-800 rounded hover:bg-slate-700 transition">
        <h2 class="text-xl font-bold mb-2">📊 Computed()</h2>
        <p class="text-gray-400 text-sm">Getters & Setters examples</p>
      </NuxtLink>

      <NuxtLink to="/cart" class="p-6 bg-slate-800 rounded hover:bg-slate-700 transition">
        <h2 class="text-xl font-bold mb-2">🛒 Shopping Cart</h2>
        <p class="text-gray-400 text-sm">Pinia store with localStorage</p>
      </NuxtLink>

      <NuxtLink to="/auth" class="p-6 bg-slate-800 rounded hover:bg-slate-700 transition">
        <h2 class="text-xl font-bold mb-2">🔐 Auth Composable</h2>
        <p class="text-gray-400 text-sm">Reusable auth logic</p>
      </NuxtLink>

      <NuxtLink to="/seo" class="p-6 bg-slate-800 rounded hover:bg-slate-700 transition">
        <h2 class="text-xl font-bold mb-2">🔍 SEO & Meta</h2>
        <p class="text-gray-400 text-sm">Head management</p>
      </NuxtLink>

      <NuxtLink to="/performance" class="p-6 bg-slate-800 rounded hover:bg-slate-700 transition">
        <h2 class="text-xl font-bold mb-2">⚡ Performance</h2>
        <p class="text-gray-400 text-sm">Code-splitting, lazy loading, caching</p>
      </NuxtLink>

      <NuxtLink to="/about" class="p-6 bg-slate-800 rounded hover:bg-slate-700 transition">
        <h2 class="text-xl font-bold mb-2">ℹ️ About</h2>
        <p class="text-gray-400 text-sm">Lifecycle hooks demo</p>
      </NuxtLink>
    </div>

    <div class="mt-8 p-4 bg-slate-800 rounded max-w-4xl mx-auto">
      <h3 class="text-lg font-bold mb-2">📁 Project Structure</h3>
      <pre class="text-xs text-gray-400 overflow-x-auto"><code>plugins/
 ┣ axios.client.ts      → Global HTTP instance
 ┣ logger.ts            → Custom hook logger
 ┣ persistedstate.client.ts → Pinia persistence
middleware/
 ┣ auth.global.ts       → Runs before every page
composables/
 ┣ useAuth.ts           → Reusable login/logout logic
stores/
 ┣ cart.ts              → Shopping cart with Pinia</code></pre>
    </div>
  </div>
</template>

<style scoped>
body {
  background: #111;
}
</style>
