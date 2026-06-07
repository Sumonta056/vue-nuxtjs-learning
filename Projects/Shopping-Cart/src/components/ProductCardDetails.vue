<script setup>
import { computed, defineProps, toRefs } from "vue";

const props = defineProps({
  productInfo: {
    required: true,
  },
  currentStock: {
    required: true,
  },
});

const { productInfo, currentStock } = toRefs(props);

const onSaleMessage = computed(() => {
  return (
    productInfo.value.salesOccasion +
    " Sales " +
    productInfo.value.salesAmount +
    "%"
  );
});
</script>

<template>
  <div class="flex items-start justify-between mb-2">
    <h2 class="text-xl font-bold text-white flex gap-2">
      {{ productInfo.productName }}
      <p
        class="text-yellow-300 text-sm font-normal"
        v-if="productInfo.onSale == true"
      >
        {{ onSaleMessage }}
      </p>
    </h2>

    <div class="flex items-center gap-1">
      <div
        class="w-2 h-2 rounded-full"
        :class="{
          'bg-green-400': currentStock >= 30,
          'bg-yellow-400': currentStock >= 11 && currentStock <= 29,
          'bg-red-400': currentStock < 11,
        }"
      ></div>
      <span class="text-gray-300 text-xs"> {{ currentStock }} in stock </span>
    </div>
  </div>

  <!-- Description -->

  <p class="text-gray-300 text-sm mb-4 line-clamp-1">
    {{ productInfo.productDescription }}
  </p>
</template>
