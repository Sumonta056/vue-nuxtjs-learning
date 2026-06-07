<script setup>
import Navbar from "@/components/Navbar.vue";
import ProductView from "@/components/ProductView.vue";
import { products } from "@/data/data";
import { ref } from "vue";
import ReviewView from "../components/ReviewView.vue";

const cartValue = ref(null);
const addToCart = () => {
  cartValue.value += 1;
};
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
  >
    <Navbar :cartValue="cartValue" />
    <div
      class="grid grid-cols-3 gap-4 p-16 pt-24 min-h-screen place-items-center"
    >
      <ProductView
        v-for="product in products"
        :key="product.id"
        :productInfo="product"
        @add-to-cart="addToCart"
      />
    </div>

    <ReviewView />
  </div>
</template>
