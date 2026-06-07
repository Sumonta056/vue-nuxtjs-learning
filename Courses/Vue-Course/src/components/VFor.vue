<template>
  <h1>Using V - For</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      My name is {{ user.name }}, My age is {{ user.age }}
    </li>
  </ul>
</template>

<script setup>
const users = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Jane',
    age: 25,
  },
  {
    name: 'Jim',
    age: 35,
  },
]
</script>

<!--
 * Looping through arrays and objects in Vue.js using the v-for directive.

-->
