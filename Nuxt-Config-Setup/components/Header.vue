<template>
  <header class="w-full p-4 bg-neutral-800 border-b border-neutral-700">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <h2 class="text-lg font-semibold text-brand-primary">Nuxt Boilerplate</h2>
      <div class="text-sm text-gray-300">Env: {{ env }}</div>
    </div>
  </header>
</template>

<script setup lang="ts">
const env = process.env.NODE_ENV || 'development'
</script>
