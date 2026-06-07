// Event Bus Listener composable for listening to events
import { listeners } from './useBusEmitter'

export const useBusListener = () => {
  const on = (event, callback) => {
    if (!listeners.has(event)) {
      listeners.set(event, [])
    }
    listeners.get(event).push(callback)

    // Return unsubscribe function
    return () => {
      const callbacks = listeners.get(event)
      if (callbacks) {
        const index = callbacks.indexOf(callback)
        if (index > -1) {
          callbacks.splice(index, 1)
        }
      }
    }
  }

  const off = (event, callback) => {
    if (listeners.has(event)) {
      const callbacks = listeners.get(event)
      const index = callbacks.indexOf(callback)
      if (index > -1) {
        callbacks.splice(index, 1)
      }
    }
  }

  return {
    on,
    off
  }
}

