import { defineStore } from 'pinia'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    // Computed getter - total items in cart
    totalItems: (state) => {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    },
    
    // Computed getter - total price
    totalPrice: (state) => {
      return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
  },

  actions: {
    addItem(item: Omit<CartItem, 'quantity'>) {
      const existingItem = this.items.find(i => i.id === item.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...item, quantity: 1 })
      }
    },

    removeItem(id: number) {
      const index = this.items.findIndex(i => i.id === id)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },

    updateQuantity(id: number, quantity: number) {
      const item = this.items.find(i => i.id === id)
      if (item) {
        item.quantity = quantity
      }
    },

    clearCart() {
      this.items = []
    },
  },

  persist: {
    storage: typeof window !== 'undefined' ? localStorage : undefined,
    paths: ['items'], // Only persist items array
  },
})

