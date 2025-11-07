<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = computed(() => route.params.id);

const { data, error } = await useFetch(
  `https://dummyjson.com/recipes/${id.value}`
);
const recipe = data.value;
</script>
<template>
  <div class="px-4 flex flex-col items-center">
    <div
      class="max-w-5xl w-full bg-white bg-opacity-95 rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_8px_40px_0_rgba(112,51,225,0.20)] transition-shadow duration-500"
    >
      <NuxtImg
        :src="recipe.image"
        :alt="recipe.name"
        class="h-72 sm:h-80 md:h-96 w-full object-cover object-center rounded-t-3xl"
      />
      <div class="py-8 px-6 sm:px-10 flex flex-col flex-1">
        <!-- Header: Name & Rating -->
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4"
        >
          <h2
            class="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-1 md:mb-0"
          >
            {{ recipe.name }}
          </h2>
          <div class="flex items-center space-x-2">
            <span class="text-2xl text-yellow-400 font-bold drop-shadow"
              >★</span
            >
            <span class="text-xl font-semibold text-indigo-700">
              {{ recipe.rating }}
            </span>
            <span class="text-gray-500 text-base"
              >({{ recipe.reviewCount }})</span
            >
          </div>
        </div>

        <!-- Tags & Meal Types -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tag in recipe.tags"
            :key="tag"
            class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold shadow-sm"
            >{{ tag }}</span
          >
          <span
            v-for="type in recipe.mealType"
            :key="type"
            class="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold shadow-sm"
            >{{ type }}</span
          >
        </div>

        <!-- Meta Info -->
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:gap-x-6 text-gray-600 text-base mb-6"
        >
          <div class="mb-2 sm:mb-0">
            <span class="font-semibold text-indigo-700">Cuisine:</span>
            <span class="font-medium">{{ recipe.cuisine }}</span>
          </div>
          <div>
            <span class="font-semibold text-indigo-700">Difficulty:</span>
            <span class="font-medium">{{ recipe.difficulty }}</span>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div
            class="bg-purple-50 rounded-xl flex flex-col items-center p-3 shadow"
          >
            <span class="text-indigo-800 font-bold text-lg">
              {{ recipe.prepTimeMinutes }}<span class="text-sm ml-1">min</span>
            </span>
            <span class="text-xs text-gray-500 mt-1 font-semibold"
              >Prep Time</span
            >
          </div>
          <div
            class="bg-purple-50 rounded-xl flex flex-col items-center p-3 shadow"
          >
            <span class="text-indigo-800 font-bold text-lg">
              {{ recipe.cookTimeMinutes }}<span class="text-sm ml-1">min</span>
            </span>
            <span class="text-xs text-gray-500 mt-1 font-semibold"
              >Cook Time</span
            >
          </div>
          <div
            class="bg-purple-50 rounded-xl flex flex-col items-center p-3 shadow"
          >
            <span class="text-indigo-800 font-bold text-lg">
              {{ recipe.servings }}
            </span>
            <span class="text-xs text-gray-500 mt-1 font-semibold"
              >Servings</span
            >
          </div>
          <div
            class="bg-purple-50 rounded-xl flex flex-col items-center p-3 shadow"
          >
            <span class="text-indigo-800 font-bold text-lg">
              {{ recipe.caloriesPerServing }}
            </span>
            <span class="text-xs text-gray-500 mt-1 font-semibold"
              >Calories</span
            >
          </div>
        </div>

        <!-- Ingredients -->
        <div class="mb-7">
          <h3 class="font-bold text-2xl text-indigo-600 mb-2 flex items-center">
            <span class="inline-block mr-2">🥕</span> Ingredients
          </h3>
          <ul class="list-disc pl-7 text-gray-800 text-base grid gap-y-1">
            <li v-for="(ingredient, idx) in recipe.ingredients" :key="idx">
              {{ ingredient }}
            </li>
          </ul>
        </div>
        <!-- Instructions -->
        <div>
          <h3 class="font-bold text-2xl text-indigo-600 mb-2 flex items-center">
            <span class="inline-block mr-2">👩‍🍳</span> Instructions
          </h3>
          <ol
            class="list-decimal pl-7 text-gray-800 text-base grid gap-y-2 marker:text-indigo-400 marker:font-bold"
          >
            <li v-for="(step, idx) in recipe.instructions" :key="idx">
              {{ step }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Give some nice fade in */
div[max-w-3xl] {
  animation: fadeInUp 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(32px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

