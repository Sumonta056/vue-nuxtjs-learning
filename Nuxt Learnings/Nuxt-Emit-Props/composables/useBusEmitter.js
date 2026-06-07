// Event Bus Emitter composable for emitting events
// Using a singleton pattern to ensure all components share the same event bus instance

const listeners = new Map()

export const useBusEmitter = () => {
  const emit = (event, data) => {
    if (listeners.has(event)) {
      listeners.get(event).forEach(callback => {
        callback(data)
      })
    }
  }

  return {
    emit
  }
}

// Export listeners map for useBusListener
export { listeners }

