<!--
✅ When firstName or lastName changes → fullName updates automatically.

So instead of repeating logic everywhere, you define it once — and Vue keeps it in sync.
-->

<template>
  <div>
    <h2>Computed Properties Example</h2>
    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => `${firstName.value} ${lastName.value}`)
</script>
