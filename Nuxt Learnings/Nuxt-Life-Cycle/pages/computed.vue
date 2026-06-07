<script setup>
import { computed, ref } from 'vue'

// Example 1: Simple computed (getter only)
const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

// Example 2: Computed with getter and setter
const price = ref(100)
const discount = ref(10)

const finalPrice = computed({
  // Getter
  get() {
    return price.value - (price.value * discount.value / 100)
  },
  // Setter
  set(newValue) {
    // When setting finalPrice, calculate discount needed
    discount.value = ((price.value - newValue) / price.value) * 100
  }
})

// Example 3: Computed with multiple dependencies
const quantity = ref(5)
const unitPrice = ref(20)

const total = computed(() => {
  return quantity.value * unitPrice.value
})
</script>

<template>
  <div class="p-8 text-white bg-slate-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Computed() Examples</h1>
    
    <!-- Example 1: Simple computed -->
    <div class="mb-8 p-4 bg-slate-800 rounded">
      <h2 class="text-xl mb-4">Example 1: Simple Computed (Getter Only)</h2>
      <div class="space-y-2">
        <input v-model="firstName" placeholder="First Name" class="p-2 bg-slate-700 rounded text-white" />
        <input v-model="lastName" placeholder="Last Name" class="p-2 bg-slate-700 rounded text-white" />
        <p class="text-green-400">Full Name: {{ fullName }}</p>
      </div>
    </div>

    <!-- Example 2: Computed with getter/setter -->
    <div class="mb-8 p-4 bg-slate-800 rounded">
      <h2 class="text-xl mb-4">Example 2: Computed with Getter & Setter</h2>
      <div class="space-y-2">
        <div>
          <label>Price: $</label>
          <input v-model.number="price" type="number" class="p-2 bg-slate-700 rounded text-white" />
        </div>
        <div>
          <label>Discount: </label>
          <input v-model.number="discount" type="number" class="p-2 bg-slate-700 rounded text-white" />%
        </div>
        <div>
          <label>Final Price: $</label>
          <input v-model.number="finalPrice" type="number" class="p-2 bg-slate-700 rounded text-white" />
          <p class="text-sm text-gray-400 mt-2">Try changing final price - discount will auto-calculate!</p>
        </div>
      </div>
    </div>

    <!-- Example 3: Multiple dependencies -->
    <div class="mb-8 p-4 bg-slate-800 rounded">
      <h2 class="text-xl mb-4">Example 3: Computed with Multiple Dependencies</h2>
      <div class="space-y-2">
        <div>
          <label>Quantity: </label>
          <input v-model.number="quantity" type="number" class="p-2 bg-slate-700 rounded text-white" />
        </div>
        <div>
          <label>Unit Price: $</label>
          <input v-model.number="unitPrice" type="number" class="p-2 bg-slate-700 rounded text-white" />
        </div>
        <p class="text-green-400 text-xl">Total: ${{ total }}</p>
      </div>
    </div>

    <NuxtLink to="/" class="text-blue-400 underline">Back to Home</NuxtLink>
  </div>
</template>

