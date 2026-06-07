<template>
  <ul>
    <li><img :src="scizor.sprites.front_default" /></li>
    <li>Pokemon ID: {{ scizor.id }}</li>
    <li>Pokemon Name: {{ scizor.name }}</li>
    <li>Pokemon Types: {{ scizor.types }}</li>
  </ul>
  <div>
    <pre>
      {{ scizor }}
    </pre>
  </div>
</template>

<script setup>
// Type 1
// Issue it's a client side rendering fetch
const scizor1 = await fetch("https://pokeapi.co/api/v2/pokemon/scizor").then(
  (res) => res.json()
);

// Type 2
// UseAsyncData is composables
const { data: scizor2 } = await useAsyncData("scizor", () => {
  return $fetch("https://pokeapi.co/api/v2/pokemon/scizor");
});

// Type 3
const { data: scizor } = await useFetch(
  "https://pokeapi.co/api/v2/pokemon/scizor"
);
</script>

