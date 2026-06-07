<script setup>
import ReviewForm from "@/components/ReviewForm.vue";
import { ref } from "vue";

const formDatas = ref([]);

const addReview = (review) => {
  formDatas.value.push(review);
};
</script>

<template>
  <div class="max-w-7xl mx-auto py-8 px-4">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">Customer Reviews</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Left Side - Reviews List -->
      <div class="space-y-6">
        <div v-if="formDatas.length > 0" class="space-y-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            All Reviews ({{ formDatas.length }})
          </h3>
          <div
            v-for="(review, index) in formDatas"
            :key="index"
            class="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-200"
          >
            <div class="flex items-start justify-between mb-3">
              <div>
                <h4 class="text-lg font-semibold text-gray-800">
                  {{ review.name }}
                </h4>
                <div class="flex items-center mt-1">
                  <span class="text-yellow-400 text-xl">
                    {{ "⭐".repeat(review.rating) }}
                  </span>
                  <span class="ml-2 text-sm text-gray-600"
                    >({{ review.rating }}/5)</span
                  >
                </div>
              </div>
            </div>
            <p class="text-gray-700 leading-relaxed">{{ review.content }}</p>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="bg-gray-50 rounded-lg p-12 text-center border-2 border-dashed border-gray-300"
        >
          <div class="text-6xl mb-4">📝</div>
          <p class="text-gray-500 text-lg font-medium">
            No reviews yet. Be the first to review!
          </p>
        </div>
      </div>

      <!-- Right Side - Review Form -->
      <div class="lg:sticky lg:top-8 lg:self-start">
        <ReviewForm @review-form="addReview" />
      </div>
    </div>
  </div>
</template>
