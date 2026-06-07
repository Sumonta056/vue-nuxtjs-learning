<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  productInfo: {
    required: true,
  },

  selectedVariant: {
    required: true,
  },
  selectedSize: {
    required: true,
  },
});

const { productInfo, selectedVariant, selectedSize } = toRefs(props);
const emits = defineEmits(["update-variant", "update-size"]);

const updateVariant = (variant) => {
  emits("update-variant", variant);
};

const updateSize = (size) => {
  emits("update-size", size);
};
</script>

<template>
  <!-- Color Variants & Sizes Side by Side -->
  <div class="flex gap-4 mb-4">
    <!-- Color Variants -->
    <div class="flex-1">
      <label class="block text-gray-200 text-xs font-semibold mb-2"
        >Colors</label
      >
      <div class="flex gap-2">
        <button
          v-for="variant in productInfo.variant"
          :key="variant"
          @click="updateVariant(variant)"
          :class="[
            'w-8 h-8 rounded-full transition-all duration-200',
            selectedVariant === variant
              ? 'ring-2 ring-white scale-110'
              : 'hover:scale-105',
            variant === 'Default' ? 'bg-gray-700' : '',
            variant === 'Green' ? 'bg-green-600' : '',
            variant === 'Blue' ? 'bg-blue-500' : '',
          ]"
          :title="variant"
        ></button>
      </div>
    </div>

    <!-- Sizes -->
    <div class="flex-1">
      <label class="block text-gray-200 text-xs font-semibold mb-2"
        >Sizes</label
      >
      <div class="flex gap-2">
        <button
          v-for="size in productInfo.sizes"
          :key="size"
          @click="updateSize(size)"
          :class="[
            'px-3 py-1 text-sm font-semibold rounded-lg transition-all duration-200',
            selectedSize === size
              ? 'bg-purple-600 text-white'
              : 'bg-white/10 text-gray-300 hover:bg-white/20',
          ]"
        >
          {{ size }}
        </button>
      </div>
    </div>
  </div>
</template>
