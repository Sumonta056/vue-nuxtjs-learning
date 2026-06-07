<script setup>
// Async component using async setup
const { data } = await useFetch('/api/products')

const products = computed(() => data.value?.products || [])
</script>

<template>
  <div class="p-4 bg-purple-900 rounded">
    <p class="text-white mb-2">Async Setup Component Loaded!</p>
    <p class="text-sm text-gray-300">Products fetched: {{ products.length }}</p>
  </div>
</template>

