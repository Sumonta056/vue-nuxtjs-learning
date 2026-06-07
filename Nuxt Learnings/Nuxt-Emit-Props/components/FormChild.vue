<template>
  <div class="form-child">
    <h3>Form Child Component</h3>
    <p>Submit the form to send data to the parent via emit.</p>
    
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>
          Name:
          <input v-model="form.name" type="text" required />
        </label>
      </div>
      <div class="form-group">
        <label>
          Email:
          <input v-model="form.email" type="email" required />
        </label>
      </div>
      <div class="form-group">
        <label>
          Age:
          <input v-model.number="form.age" type="number" min="0" required />
        </label>
      </div>
      <button type="submit">Submit Form</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['form-submitted'])

const form = ref({
  name: '',
  email: '',
  age: null
})

const handleSubmit = () => {
  emit('form-submitted', { ...form.value })
  // Reset form
  form.value = {
    name: '',
    email: '',
    age: null
  }
}
</script>

<style scoped>
.form-child {
  padding: 1.5rem;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.form-group input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #9c27b0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #7b1fa2;
}
</style>

