<script setup>
import { defineProps } from "vue";

const props = defineProps({
  cartValue: {
    type: Number,
  },
});
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex items-center gap-2">
          <svg
            class="w-8 h-8 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
          <span class="text-white text-xl font-bold">Vue Store</span>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center gap-6">
          <a
            href="#"
            class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >Home</a
          >
          <a
            href="#"
            class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >Products</a
          >
          <a
            href="#"
            class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >About</a
          >
          <a
            href="#"
            class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >Contact</a
          >
        </div>

        <!-- Cart Button -->
        <div class="flex items-center gap-4">
          <button
            class="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 group"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m1.5-6h10m0 0v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
              ></path>
            </svg>
            <span
              v-if="cartValue > 0"
              class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse"
            >
              {{ cartValue }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
