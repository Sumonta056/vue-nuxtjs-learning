<script setup>
const { data, error } = await useFetch(
  "https://dummyjson.com/recipes?limit=12"
);
</script>
<template>
  <main>
    <section class="bg-[f1f1f1]">
      >
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-8 cursor-pointer"
      >
        <div
          v-for="recipe in data?.recipes"
          :key="recipe.id"
          class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow"
        >
          <NuxtLink :to="`/recipe/${recipe.id}`">
            <NuxtImg
              :src="recipe.image"
              :alt="recipe.name"
              class="h-56 w-full object-cover"
            />
            <div class="p-6 flex flex-col flex-1">
              <div class="flex items-center justify-between mb-2">
                <h2 class="text-xl font-bold text-indigo-700">
                  {{ recipe.name }}
                </h2>
                <div class="flex items-center space-x-2">
                  <span class="text-yellow-500 font-semibold text-lg">
                    ★ {{ recipe.rating }}
                  </span>
                  <span class="text-gray-500 text-sm">
                    ({{ recipe.reviewCount }})
                  </span>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold mr-2"
                  v-for="tag in recipe.tags"
                  :key="tag"
                  >{{ tag }}</span
                >
                <span
                  class="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold"
                  v-for="type in recipe.mealType"
                  :key="type"
                  >{{ type }}</span
                >
              </div>
              <div class="text-gray-500 text-sm mb-4">
                <span class="mr-2"
                  >Cuisine:
                  <span class="font-medium text-gray-700">{{
                    recipe.cuisine
                  }}</span></span
                >
                <span class="mr-2"
                  >• Difficulty:
                  <span class="font-medium text-gray-700">{{
                    recipe.difficulty
                  }}</span></span
                >
              </div>
              <div
                class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 mb-4"
              >
                <span
                  >Prep:
                  <span class="font-medium text-gray-700"
                    >{{ recipe.prepTimeMinutes }} min</span
                  ></span
                >
                <span
                  >Cook:
                  <span class="font-medium text-gray-700"
                    >{{ recipe.cookTimeMinutes }} min</span
                  ></span
                >
                <span
                  >Servings:
                  <span class="font-medium text-gray-700">{{
                    recipe.servings
                  }}</span></span
                >
                <span
                  >Calories:
                  <span class="font-medium text-gray-700">{{
                    recipe.caloriesPerServing
                  }}</span></span
                >
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

