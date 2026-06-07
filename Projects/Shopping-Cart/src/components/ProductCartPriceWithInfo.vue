<script setup>
import { computed, defineProps, toRefs } from "vue";

const props = defineProps({
  productInfo: {},
  selectedVariant: {},
});

const { productInfo, selectedVariant } = toRefs(props);

const currentPrice = computed(() => {
  const inventoryItem = productInfo.value.price.find(
    (item) => item.key === selectedVariant.value
  );
  return inventoryItem ? inventoryItem.amount : 0;
});

const discountedPrice = computed(() => {
  const price = (currentPrice.value * productInfo.value.salesAmount) / 100;
  return currentPrice.value - price;
});
</script>

<template>
  <!-- Product Details -->
  <div class="mb-4">
    <label class="block text-gray-200 text-xs font-semibold mb-2"
      >Product Details</label
    >
    <ul class="space-y-1">
      <li
        v-for="(detail, index) in productInfo.details"
        :key="index"
        class="text-gray-300 text-xs flex items-center gap-2"
      >
        <span class="w-1 h-1 bg-purple-400 rounded-full"></span>
        {{ detail }}
      </li>
    </ul>
  </div>

  <div class="text-gray-300 text-xs mb-4 flex gap-1">
    <div :class="[productInfo.onSale ? 'line-through' : '']">
      <span class="font-semibold">Price :</span>
      {{ currentPrice }} BDT
    </div>
    <span v-if="productInfo.onSale" class="text-yellow-300">
      Discounted Price {{ discountedPrice }} BDT</span
    >
  </div>
</template>
