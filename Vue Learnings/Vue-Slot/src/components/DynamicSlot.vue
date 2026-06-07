<!--
  DYNAMIC SLOT NAMES Example
  
  Slot names can be dynamic using v-slot with brackets.
  This allows you to create flexible, reusable components.
-->
<script setup>
import { ref } from "vue";

const activeTab = ref("tab1");
const tabs = ["tab1", "tab2", "tab3"];
</script>

<template>
  <div class="border-2 border-teal-500 rounded-lg p-4 bg-teal-50">
    <h3 class="text-lg font-semibold text-teal-800 mb-4">
      Dynamic Slot Names Example
    </h3>

    <!-- Tab buttons -->
    <div class="flex gap-2 mb-4">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        :class="[
          'px-4 py-2 rounded-lg transition-colors',
          activeTab === tab
            ? 'bg-teal-500 text-white'
            : 'bg-white text-teal-700 hover:bg-teal-100',
        ]"
      >
        {{ tab.toUpperCase() }}
      </button>
    </div>

    <!-- Dynamic slot based on activeTab -->
    <div class="bg-white p-4 rounded-lg min-h-[100px]">
      <slot :name="activeTab">
        <p class="text-gray-500">No content for {{ activeTab }}</p>
      </slot>
    </div>
  </div>
</template>

<style scoped></style>






