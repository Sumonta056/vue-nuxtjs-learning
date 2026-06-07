<script setup>
import { defineEmits, reactive } from "vue";

const review = reactive({
  name: "",
  content: "",
  rating: null,
});

const emits = defineEmits(["review-form"]);

const onSubmit = () => {
  if (review.name == "" || review.content == "" || review.rating == null) {
    alert("Please fillup all information");
    return;
  }

  emits("review-form", { ...review });

  review.name = "";
  review.content = "";
  review.rating = null;
};
</script>

<template>
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <h3 class="text-2xl font-bold text-gray-800 mb-6">Leave a review</h3>

      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2"
          >Name:</label
        >
        <input
          id="name"
          v-model="review.name"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label for="review" class="block text-sm font-medium text-gray-700 mb-2"
          >Review:</label
        >
        <textarea
          id="review"
          v-model="review.content"
          rows="4"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Write your review here..."
        ></textarea>
      </div>

      <div>
        <label for="rating" class="block text-sm font-medium text-gray-700 mb-2"
          >Rating:</label
        >
        <select
          id="rating"
          v-model.number="review.rating"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="" disabled>Select a rating</option>
          <option value="5">⭐⭐⭐⭐⭐ (5)</option>
          <option value="4">⭐⭐⭐⭐ (4)</option>
          <option value="3">⭐⭐⭐ (3)</option>
          <option value="2">⭐⭐ (2)</option>
          <option value="1">⭐ (1)</option>
        </select>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit Review
      </button>
    </form>
  </div>
</template>
