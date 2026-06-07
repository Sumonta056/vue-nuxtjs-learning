<script setup>
import { ref } from 'vue'
let counter = ref(0)

const increment = () => counter.value++
const decrement = () => counter.value--
</script>

<template>
  <div>
    <p>Count : {{ counter }}</p>
    <button @click="increment">Add Values</button>
    <button @click="decrement">Subtract Values</button>
  </div>
</template>

<style></style>
