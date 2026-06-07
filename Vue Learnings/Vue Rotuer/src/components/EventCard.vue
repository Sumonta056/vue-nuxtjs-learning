<script setup>
import { defineProps } from "vue";

defineProps({
  datas: {},
});
</script>

<template>
  <div
    class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700"
  >
    <!-- Gradient overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-900/20 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <div class="relative p-6">
      <div class="flex items-start space-x-4">
        <!-- Enhanced Icon -->
        <div
          class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300"
        >
          <svg
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        <div class="flex-1 min-w-0">
          <!-- Enhanced Title -->
          <h2
            class="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-2"
          >
            {{ datas.title }}
          </h2>

          <!-- Enhanced Date/Time Info -->
          <div class="flex flex-wrap items-center gap-3 mb-3">
            <span
              class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              <svg
                class="w-3 h-3 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3M3 11h18"
                />
              </svg>
              {{ datas.date }}
            </span>
          </div>

          <!-- Enhanced Description -->
          <p
            v-if="datas.description"
            class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-1"
          >
            {{ datas.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
