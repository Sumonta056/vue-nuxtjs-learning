<script setup>
const image = 'https://vuejs.org/images/logo.png'
const url = 'https://vuejs.org/'
const isDisabled = true
const imageWidth = 100
const imageHeight = 100

// dynamic binding
const imageInfo = {
  src: 'https://vuejs.org/images/logo.png',
  width: 30,
  height: 30,
  alt: 'Vue Logo',
}
</script>

<template>
  <div>
    <!-- Old way binding "v-blind:" -->
    <img v-bind:src="image" alt="Vue logo" :width="imageWidth" :height="imageHeight" />
    <!-- New way binding ":" -->
    <a :href="url" target="_blank">Vue.js Official Website</a>
    <button :disabled="isDisabled">Click Me</button>
    <!-- Dynamic Bindng -->
    <img :="imageInfo" />
  </div>
</template>
