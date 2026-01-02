<template>
  <div class="example-container">
    <h1>Parent → Child Communication (Props)</h1>
    <p>In this example, the parent component passes data to the child component using props.</p>
    
    <div class="controls">
      <label>
        Message:
        <input v-model="message" type="text" placeholder="Enter a message" />
      </label>
      <label>
        Count:
        <input v-model.number="count" type="number" />
      </label>
      <label>
        <input v-model="isActive" type="checkbox" />
        Is Active
      </label>
    </div>

    <ChildComponent 
      :message="message" 
      :count="count" 
      :is-active="isActive"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from '~/components/ChildComponent.vue'

const message = ref('Hello from Parent!')
const count = ref(0)
const isActive = ref(true)
</script>

<style scoped>
.example-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.controls label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.controls input[type="text"],
.controls input[type="number"] {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
}

.controls input[type="checkbox"] {
  width: 20px;
  height: 20px;
}
</style>

