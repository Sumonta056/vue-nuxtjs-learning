<template>
  <div class="example-container">
    <h1>Child → Parent Communication (Emits)</h1>
    <p>In this example, the child component sends data to the parent component using emits.</p>
    
    <div class="parent-display">
      <h2>Parent Component</h2>
      <div class="status">
        <p><strong>Button Clicked:</strong> {{ buttonClickCount }} times</p>
        <p><strong>Last Message:</strong> {{ lastMessage || 'No message yet' }}</p>
        <p><strong>Form Data:</strong></p>
        <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
      </div>
    </div>

    <ButtonChild 
      @button-clicked="handleButtonClick"
      @message-sent="handleMessage"
    />
    
    <FormChild @form-submitted="handleFormSubmit" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ButtonChild from '~/components/ButtonChild.vue'
import FormChild from '~/components/FormChild.vue'

const buttonClickCount = ref(0)
const lastMessage = ref('')
const formData = ref({})

const handleButtonClick = () => {
  buttonClickCount.value++
}

const handleMessage = (message) => {
  lastMessage.value = message
}

const handleFormSubmit = (data) => {
  formData.value = data
}
</script>

<style scoped>
.example-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.parent-display {
  padding: 1.5rem;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.status {
  margin-top: 1rem;
}

.status p {
  margin: 0.5rem 0;
}

pre {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}
</style>

