<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  productLink: {},
  currentStock: {},
});

const { productLink, currentStock } = toRefs(props);
const emit = defineEmits(["adding-to-cart"]);

const addToCart = () => {
  emit("adding-to-cart");
};
</script>

<template>
  <div class="flex gap-2">
    <a
      :href="productLink"
      class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <span>Shop Now</span>
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        ></path>
      </svg>
    </a>
    <button
      :class="[
        'flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5   font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105',
        currentStock <= 0
          ? 'bg-red-700 text-white cursor-not-allowed'
          : 'bg-gradient-to-r from-gray-300 to-stone-200 text-black cursor-pointer',
      ]"
      v-on:click="addToCart"
      :disabled="currentStock <= 0"
    >
      <svg
        class="w-4 h-4"
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
      <span v-if="currentStock > 0"> Add to Cart</span>
      <span v-else>Out of Stock</span>
    </button>
  </div>
</template>
