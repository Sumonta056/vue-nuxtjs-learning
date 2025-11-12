<script setup>
import { onBeforeUnmount, onMounted } from "vue";

onMounted(() => {
  console.log("📄 [Vue] About page mounted");
});

onBeforeUnmount(() => {
  console.log("🚪 [Vue] Leaving About page");
});
</script>

<template>
  <div class="p-8 text-center text-white bg-slate-800 min-h-screen">
    <h2 class="text-2xl mb-4">About Page</h2>
    <NuxtLink to="/" class="text-blue-400 underline">Back to Home</NuxtLink>
  </div>
</template>
