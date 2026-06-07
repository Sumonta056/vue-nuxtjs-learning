<script setup>
import { defineProps, ref, toRefs, watch } from "vue";

const props = defineProps({
  productInfo: {
    required: true,
  },
  currentStock: {
    required: true,
  },
  selectedVariant: {
    required: true,
  },
});

const { productInfo, selectedVariant, currentStock } = toRefs(props);
const outOfStockImage =
  "https://t4.ftcdn.net/jpg/02/65/83/15/360_F_265831541_RUAcAGkikMs2WJOZ40D1BzjWqyp0MRze.jpg";

const currentImage = ref(productInfo.value.productImage[0].url);

watch(selectedVariant, (newVariant) => {
  const object = productInfo.value.productImage.find(
    (img) => img.key == newVariant
  );

  currentImage.value = object?.url || productInfo.value.productImage[0].url;
});
</script>

<template>
  <div class="relative h-56">
    <img
      class="h-full w-full object-cover"
      :src="currentImage"
      :alt="productInfo.productName"
    />
    <div class="absolute top-3 right-3">
      <span
        v-if="productInfo.onSale"
        class="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full"
      >
        SALE
      </span>
      <span
        v-else
        class="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full"
      >
        10% OFF
      </span>
    </div>

    <div class="absolute bottom-1 right-1" v-if="currentStock <= 0">
      <img :src="outOfStockImage" class="w-40 object-cover" />
    </div>
  </div>
</template>
