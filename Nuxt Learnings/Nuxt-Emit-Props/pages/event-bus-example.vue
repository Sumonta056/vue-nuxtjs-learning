<template>
  <div class="example-container">
    <h1>Component → Component Communication (Event Bus)</h1>
    <p>In this example, components communicate with each other using an event bus, without a direct parent-child relationship.</p>
    
    <div class="components-grid">
      <SenderComponent />
      <ReceiverComponent />
    </div>
    
    <div class="event-log">
      <h2>Event Log</h2>
      <div class="log-entries">
        <div 
          v-for="(log, index) in eventLog" 
          :key="index" 
          class="log-entry"
        >
          <span class="timestamp">{{ log.timestamp }}</span>
          <span class="event-name">{{ log.event }}</span>
          <span class="event-data">{{ JSON.stringify(log.data) }}</span>
        </div>
        <p v-if="eventLog.length === 0" class="no-logs">No events yet...</p>
      </div>
      <button @click="clearLog" class="clear-btn">Clear Log</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useBusListener } from '~/composables/useBusListener'

const { on } = useBusListener()
const eventLog = ref([])

const addLog = (event, data) => {
  eventLog.value.unshift({
    timestamp: new Date().toLocaleTimeString(),
    event,
    data
  })
  // Keep only last 20 entries
  if (eventLog.value.length > 20) {
    eventLog.value = eventLog.value.slice(0, 20)
  }
}

const clearLog = () => {
  eventLog.value = []
}

// Listen to all events for logging
onMounted(() => {
  // Listen to specific events
  const unsubscribeMessage = on('user-message', (data) => {
    addLog('user-message', data)
  })
  
  const unsubscribeStatus = on('status-update', (data) => {
    addLog('status-update', data)
  })
  
  const unsubscribeData = on('data-shared', (data) => {
    addLog('data-shared', data)
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
.example-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.components-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.event-log {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.log-entries {
  max-height: 400px;
  overflow-y: auto;
  margin: 1rem 0;
}

.log-entry {
  display: grid;
  grid-template-columns: 100px 150px 1fr;
  gap: 1rem;
  padding: 0.5rem;
  margin: 0.25rem 0;
  background-color: white;
  border-radius: 4px;
  font-size: 0.9rem;
}

.timestamp {
  color: #666;
  font-size: 0.85rem;
}

.event-name {
  font-weight: bold;
  color: #2196f3;
}

.event-data {
  color: #333;
  word-break: break-all;
}

.no-logs {
  text-align: center;
  color: #999;
  padding: 2rem;
}

.clear-btn {
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.clear-btn:hover {
  background-color: #d32f2f;
}
</style>

