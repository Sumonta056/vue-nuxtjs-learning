<template>
  <h1>Using V - Bind</h1>
  <img :src="imageSrc" :alt="imageAlt" />
  <p :class="rating > 0 ? 'green' : 'red'">
    {{ rating }}
  </p>
</template>

<script setup>
const imageSrc = 'https://picsum.photos/id/237/300/300'
const imageAlt = 'No Image'
const rating = 20
</script>

<style scoped>
.green {
  color: green;
  font-size: 30px;
}
.red {
  color: red;
  font-size: 30px;
}
</style>

<!--
 * v-bind is how Vue connects your JavaScript data to HTML attributes.
-->
