<template>
  <ul v-if="data">
    <img :src="data.sprites" />
    <li>Pokemon ID: {{ data.id }}</li>
    <li>Pokemon Name: {{ data.name }}</li>
  </ul>
  <div v-else>Loading or Error...</div>
</template>

<script setup>
const { data } = await useFetch("/api/ditto");
</script>

