<template>
  <div class="receiver-component">
    <h2>Receiver Component</h2>
    <p>This component listens to events from other components.</p>
    
    <div class="received-data">
      <div class="data-section">
        <h3>Last Message</h3>
        <div v-if="lastMessage" class="data-display">
          <p><strong>From:</strong> {{ lastMessage.sender }}</p>
          <p><strong>Message:</strong> {{ lastMessage.message }}</p>
          <p><strong>Time:</strong> {{ formatTime(lastMessage.timestamp) }}</p>
        </div>
        <p v-else class="no-data">No messages received yet</p>
      </div>
      
      <div class="data-section">
        <h3>Current Status</h3>
        <div v-if="currentStatus" class="data-display">
          <p><strong>Status:</strong> 
            <span :class="['status-badge', currentStatus.status]">
              {{ currentStatus.status }}
            </span>
          </p>
          <p><strong>Updated:</strong> {{ formatTime(currentStatus.timestamp) }}</p>
        </div>
        <p v-else class="no-data">No status update yet</p>
      </div>
      
      <div class="data-section">
        <h3>Shared Data</h3>
        <div v-if="sharedData" class="data-display">
          <p><strong>ID:</strong> {{ sharedData.id }}</p>
          <p><strong>Value:</strong> {{ sharedData.value.toFixed(2) }}</p>
          <p><strong>Time:</strong> {{ formatTime(sharedData.timestamp) }}</p>
        </div>
        <p v-else class="no-data">No shared data yet</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useBusListener } from '~/composables/useBusListener'

const { on } = useBusListener()
const lastMessage = ref(null)
const currentStatus = ref(null)
const sharedData = ref(null)

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString()
}

onMounted(() => {
  // Listen to user messages
  const unsubscribeMessage = on('user-message', (data) => {
    lastMessage.value = data
  })
  
  // Listen to status updates
  const unsubscribeStatus = on('status-update', (data) => {
    currentStatus.value = data
  })
  
  // Listen to shared data
  const unsubscribeData = on('data-shared', (data) => {
    sharedData.value = data
  })
  
  // Cleanup on unmount
  onUnmounted(() => {
    unsubscribeMessage()
    unsubscribeStatus()
    unsubscribeData()
  })
})
</script>

<style scoped>
.receiver-component {
  padding: 1.5rem;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  border-radius: 8px;
}

.received-data {
  margin-top: 1rem;
}

.data-section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 4px;
}

.data-section h3 {
  margin-top: 0;
  color: #ff9800;
}

.data-display p {
  margin: 0.5rem 0;
}

.no-data {
  color: #999;
  font-style: italic;
}

.status-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.status-badge.online {
  background-color: #4caf50;
  color: white;
}

.status-badge.offline {
  background-color: #9e9e9e;
  color: white;
}

.status-badge.away {
  background-color: #ff9800;
  color: white;
}

.status-badge.busy {
  background-color: #f44336;
  color: white;
}
</style>

