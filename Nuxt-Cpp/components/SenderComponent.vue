<template>
  <div class="sender-component">
    <h2>Sender Component</h2>
    <p>This component emits events that other components can listen to.</p>
    
    <div class="sender-controls">
      <div class="control-group">
        <label>
          Message:
          <input 
            v-model="message" 
            type="text" 
            placeholder="Enter a message"
            @keyup.enter="sendMessage"
          />
        </label>
        <button @click="sendMessage">Send Message</button>
      </div>
      
      <div class="control-group">
        <label>
          Status:
          <select v-model="status">
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="away">Away</option>
            <option value="busy">Busy</option>
          </select>
        </label>
        <button @click="updateStatus">Update Status</button>
      </div>
      
      <div class="control-group">
        <button @click="shareData">Share Random Data</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBusEmitter } from '~/composables/useBusEmitter'

const { emit } = useBusEmitter()
const message = ref('')
const status = ref('online')

const sendMessage = () => {
  if (message.value.trim()) {
    emit('user-message', {
      message: message.value,
      sender: 'SenderComponent',
      timestamp: new Date().toISOString()
    })
    message.value = ''
  }
}

const updateStatus = () => {
  emit('status-update', {
    status: status.value,
    timestamp: new Date().toISOString()
  })
}

const shareData = () => {
  const randomData = {
    id: Math.floor(Math.random() * 1000),
    value: Math.random() * 100,
    timestamp: new Date().toISOString()
  }
  emit('data-shared', randomData)
}
</script>

<style scoped>
.sender-component {
  padding: 1.5rem;
  background-color: #e1f5fe;
  border: 2px solid #03a9f4;
  border-radius: 8px;
}

.sender-controls {
  margin-top: 1rem;
}

.control-group {
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
}

.control-group label {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.control-group input,
.control-group select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #03a9f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}

button:hover {
  background-color: #0288d1;
}
</style>

