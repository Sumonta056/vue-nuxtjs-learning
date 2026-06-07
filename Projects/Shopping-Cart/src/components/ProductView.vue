<script setup>
import { computed, defineProps, ref, toRefs } from "vue";
import ProductCardButtons from "./ProductCardButtons.vue";
import ProductCardDetails from "./ProductCardDetails.vue";
import ProductCardImageHeader from "./ProductCardImageHeader.vue";
import ProductCardVariants from "./ProductCardVariants.vue";
import ProductCartPriceWithInfo from "./ProductCartPriceWithInfo.vue";

const props = defineProps({
  productInfo: {
    required: true,
  },
});

const { productInfo } = toRefs(props);
const emit = defineEmits(["add-to-cart"]);

const selectedVariant = ref("Default");
const selectedSize = ref(null);

const currentStock = computed(() => {
  const inventoryItem = productInfo.value.productInventory.find(
    (item) => item.key === selectedVariant.value
  );
  return inventoryItem ? inventoryItem.stock : 0;
});

const updateVariant = (variant) => {
  selectedVariant.value = variant;
};

const updateSize = (size) => {
  selectedSize.value = size;
  console.log(selectedSize);
};

const addToCart = () => {
  emit("add-to-cart");
  const inventoryItem = productInfo.value.productInventory.find(
    (item) => item.key === selectedVariant.value
  );
  inventoryItem.stock--;
};
</script>

<template>
  <div
    class="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20"
  >
    <ProductCardImageHeader
      :productInfo="productInfo"
      :currentStock="currentStock"
      :selectedVariant="selectedVariant"
    />

    <div class="p-5">
      <ProductCardDetails
        :productInfo="productInfo"
        :currentStock="currentStock"
      />

      <ProductCardVariants
        :productInfo="productInfo"
        :selectedVariant="selectedVariant"
        :selectedSize="selectedSize"
        @update-variant="updateVariant"
        @update-size="updateSize"
      />

      <ProductCartPriceWithInfo
        :productInfo="productInfo"
        :selectedVariant="selectedVariant"
      />

      <ProductCardButtons
        :productLink="productInfo.productLink"
        :currentStock="currentStock"
        @adding-to-cart="addToCart"
      />
    </div>
  </div>
</template>
