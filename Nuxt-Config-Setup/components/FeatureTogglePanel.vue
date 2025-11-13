<template>
  <div v-if="isDev" class="fixed bottom-4 right-4 bg-neutral-800 p-4 rounded-lg shadow-lg w-64 z-50">
    <h4 class="text-sm font-bold mb-2">Feature Flags (dev)</h4>
    <div v-for="(value, key) in flags" :key="key" class="flex items-center justify-between mb-2">
      <div class="text-xs">{{ key }}</div>
      <label class="inline-flex items-center">
        <input type="checkbox" v-model="flags[key]" @change="save" class="mr-2" />
      </label>
    </div>
    <button @click="reset" class="mt-2 text-xs underline">Reset</button>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const flags = nuxtApp.$flags as Record<string, boolean>
const isDev = process.env.NODE_ENV !== 'production'

function save() {
  localStorage.setItem('runtimeFlags', JSON.stringify(flags))
}

function reset() {
  localStorage.removeItem('runtimeFlags')
  window.location.reload()
}

// load saved flags from localStorage on mount
if (process.client) {
  const saved = localStorage.getItem('runtimeFlags')
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      Object.assign(flags, parsed)
    } catch(e) {}
  }
}
</script>
