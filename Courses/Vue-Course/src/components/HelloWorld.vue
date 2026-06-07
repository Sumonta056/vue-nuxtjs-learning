<!-- HTML -->
<template>
  <div class="hero">
    <h1>Hello Vue 3 + Vite!</h1>
    <p>This is a simple Vue 3 component.</p>
  </div>
</template>

<!-- CSS -->
<style scoped>
h1 {
  color: #42b983;
}
p {
  font-size: 1.2em;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

<!-- JS -->
<script setup>
console.log('HelloWorld component loaded')
</script>
