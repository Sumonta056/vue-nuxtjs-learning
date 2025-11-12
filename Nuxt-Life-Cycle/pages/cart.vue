<script setup lang="ts">
// Use the cart store
const cartStore = useCartStore()

// Sample products
interface Product {
  id: number
  name: string
  price: number
}

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
  { id: 4, name: 'Monitor', price: 299 },
]

const addToCart = (product: Product) => {
  cartStore.addItem(product)
}
</script>

<template>
  <div class="p-8 text-white bg-slate-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Shopping Cart with Pinia</h1>
    
    <!-- Products Section -->
    <div class="mb-8">
      <h2 class="text-2xl mb-4">Products</h2>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="product in products" :key="product.id" class="p-4 bg-slate-800 rounded">
          <h3 class="font-bold">{{ product.name }}</h3>
          <p class="text-green-400">${{ product.price }}</p>
          <button 
            @click="addToCart(product)"
            class="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <!-- Cart Section -->
    <div class="p-4 bg-slate-800 rounded">
      <h2 class="text-2xl mb-4">Cart ({{ cartStore.totalItems }} items)</h2>
      
      <div v-if="cartStore.items.length === 0" class="text-gray-400">
        Cart is empty
      </div>
      
      <div v-else class="space-y-2">
        <div v-for="item in cartStore.items" :key="item.id" class="flex justify-between items-center p-2 bg-slate-700 rounded">
          <div>
            <span class="font-bold">{{ item.name }}</span>
            <span class="text-gray-400 ml-2">x{{ item.quantity }}</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-green-400">${{ item.price * item.quantity }}</span>
            <button 
              @click="cartStore.removeItem(item.id)"
              class="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        </div>
        
        <div class="mt-4 pt-4 border-t border-slate-600">
          <div class="flex justify-between text-xl">
            <span>Total:</span>
            <span class="text-green-400 font-bold">${{ cartStore.totalPrice }}</span>
          </div>
          <button 
            @click="cartStore.clearCart()"
            class="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700"
          >
            Clear Cart
          </button>
        </div>
      </div>
      
      <p class="mt-4 text-sm text-gray-400">
        💡 Cart is persisted to localStorage - refresh the page to see it persists!
      </p>
    </div>

    <NuxtLink to="/" class="mt-4 text-blue-400 underline block">Back to Home</NuxtLink>
  </div>
</template>

