<template>
  <div class="button-child">
    <h3>Button Child Component</h3>
    <p>Click the button to emit an event to the parent.</p>
    <button @click="handleClick">Click Me!</button>
    
    <div class="message-section">
      <input 
        v-model="message" 
        type="text" 
        placeholder="Enter a message"
        @keyup.enter="sendMessage"
      />
      <button @click="sendMessage">Send Message</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['button-clicked', 'message-sent'])
const message = ref('')

const handleClick = () => {
  emit('button-clicked')
}

const sendMessage = () => {
  if (message.value.trim()) {
    emit('message-sent', message.value)
    message.value = ''
  }
}
</script>

<style scoped>
.button-child {
  padding: 1.5rem;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  border-radius: 8px;
  margin-bottom: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
}

button:hover {
  background-color: #45a049;
}

.message-section {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}

.message-section input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>

