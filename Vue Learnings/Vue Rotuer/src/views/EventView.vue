<script setup>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/service/EventService";
import { computed, defineProps, onMounted, ref, watch } from "vue";

const props = defineProps(["page"]);
const perPage = 2;
const events = ref([]);
const loading = ref(false);
const totalEvents = ref(0);

const fetchEvent = () => {
  loading.value = true;
  EventService.getEvent(perPage, props.page)
    .then((response) => {
      events.value = response.data;
      loading.value = false;
      console.log(response.headers);
      totalEvents.value = response.headers["x-total-count"];
    })
    .catch((error) => console.log(error));
};

const hasNext = computed(() => {
  const totalPage = Math.ceil(totalEvents.value / 2);
  return props.page < totalPage;
});

onMounted(() => {
  fetchEvent();
});

watch(
  () => props.page,
  () => {
    events.value = null;
    fetchEvent();
  }
);
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1
          class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
        >
          Upcoming Events
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover and join amazing events happening around you
        </p>
        <div
          class="mt-6 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
        ></div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-16">
        <div class="text-center">
          <div class="relative">
            <div
              class="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"
            ></div>
            <div
              class="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-400 rounded-full animate-spin mx-auto"
              style="animation-delay: 0.15s"
            ></div>
          </div>
          <h3
            class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
          >
            Loading Events
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Please wait while we fetch the latest events for you...
          </p>
        </div>
      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <EventCard v-for="data in events" :datas="data" :key="data.id" />
      </div>

      <!-- Enhanced Pagination Section -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6"
      >
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <!-- Previous Button -->
          <RouterLink
            :to="{ name: 'events', query: { page: page - 1 } }"
            v-if="page != 1"
            type="button"
            class="group flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm font-medium text-gray-800 dark:text-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label="Previous event"
          >
            <svg
              class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous Events
          </RouterLink>

          <!-- Center Info -->

          <div
            class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1"
          >
            Event Navigation
          </div>

          <!-- Next Button -->
          <RouterLink
            :to="{ name: 'events', query: { page: page + 1 } }"
            v-if="hasNext"
            class="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-sm font-medium text-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Next event"
          >
            More Events
            <svg
              class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
