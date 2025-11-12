<script setup lang="ts">
// This component will be lazy loaded
const props = defineProps<{
  message: string
}>()
</script>

<template>
  <div class="p-4 bg-blue-900 rounded">
    <p class="text-white">{{ message }}</p>
    <p class="text-sm text-gray-300 mt-2">This component was lazy loaded!</p>
  </div>
</template>

