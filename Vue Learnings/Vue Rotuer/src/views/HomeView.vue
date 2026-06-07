<script setup></script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-md mx-auto space-y-6">
      <h1 class="text-3xl font-bold text-gray-900 text-center mb-8">
        Navigation
      </h1>
      
      <RouterLink
        :to="{
          name: 'get-view',
          params: { id: 1 },
          query: { search: 'show', page: 1 },
        }"
        class="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg shadow-md transition-colors duration-200 text-center"
      >
        Go to id : 1
      </RouterLink>
      
      <RouterLink
        :to="{
          name: 'events',
        }"
        class="block w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-lg shadow-md transition-colors duration-200 text-center"
      >
        Events View
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
