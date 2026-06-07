<!--
  TABLE with Scoped Slots Example
  
  A practical example showing how scoped slots work in a real-world scenario.
  The parent component controls how each column is rendered.
-->
<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="border-2 border-red-500 rounded-lg overflow-hidden bg-white">
    <h3 class="text-lg font-semibold text-red-800 px-4 py-3 bg-red-50">
      Table with Scoped Slots
    </h3>
    <table class="w-full">
      <thead class="bg-red-100">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="px-4 py-2 text-left text-sm font-semibold text-gray-700"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in data"
          :key="index"
          class="border-t border-gray-200 hover:bg-gray-50"
        >
          <td v-for="column in columns" :key="column.key" class="px-4 py-3">
            <!-- 
              Scoped slot passes row data and column info to parent
              Parent can customize rendering for each column
            -->
            <slot
              :name="column.key"
              :row="row"
              :column="column"
              :value="row[column.key]"
            >
              <!-- Fallback: just show the value -->
              {{ row[column.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

