<script setup>
import { ref } from "vue";
import DefaultSlot from "@/components/DefaultSlot.vue";
import NamedSlots from "@/components/NamedSlots.vue";
import ScopedSlot from "@/components/ScopedSlot.vue";
import FallbackContent from "@/components/FallbackContent.vue";
import MultipleSlots from "@/components/MultipleSlots.vue";
import DataTable from "@/components/DataTable.vue";
import DynamicSlot from "@/components/DynamicSlot.vue";

// Sample data for scoped slots
const users = ref([
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
]);

// Sample data for table
const tableData = ref([
  {
    id: 1,
    name: "Product A",
    price: 29.99,
    stock: 10,
    status: "active",
  },
  {
    id: 2,
    name: "Product B",
    price: 49.99,
    stock: 0,
    status: "out_of_stock",
  },
  {
    id: 3,
    name: "Product C",
    price: 19.99,
    stock: 5,
    status: "active",
  },
]);

const tableColumns = ref([
  { key: "name", label: "Product Name" },
  { key: "price", label: "Price" },
  { key: "stock", label: "Stock" },
  { key: "status", label: "Status" },
]);
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-2 text-center">
        Vue Slots Tutorial
      </h1>
      <p class="text-center text-gray-600 mb-8">
        Learn different types of slots in Vue 3
      </p>

      <!-- 1. DEFAULT SLOT -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          1. Default Slot
        </h2>
        <p class="text-gray-600 mb-4">
          The simplest slot type. Content goes between component tags.
        </p>

        <DefaultSlot>
          <p class="text-blue-700">
            This content is passed to the default slot!
          </p>
          <p class="text-blue-600 text-sm mt-2">
            You can put any HTML/Vue content here.
          </p>
        </DefaultSlot>

        <div class="mt-4 bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre><code>&lt;DefaultSlot&gt;
  &lt;p&gt;This content goes into the default slot&lt;/p&gt;
&lt;/DefaultSlot&gt;</code></pre>
        </div>
      </section>

      <!-- 2. NAMED SLOTS -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          2. Named Slots
        </h2>
        <p class="text-gray-600 mb-4">
          Use multiple slots in one component with names.
        </p>

        <NamedSlots>
          <template #header>
            <span class="font-bold">Custom Header Content</span>
          </template>
          <template #body>
            <p class="text-green-700">
              This is custom body content that can be anything!
            </p>
          </template>
          <template #footer>
            <span class="text-xs">Custom Footer © 2024</span>
          </template>
        </NamedSlots>

        <div class="mt-4 bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre><code>&lt;NamedSlots&gt;
  &lt;template #header&gt;Header Content&lt;/template&gt;
  &lt;template #body&gt;Body Content&lt;/template&gt;
  &lt;template #footer&gt;Footer Content&lt;/template&gt;
&lt;/NamedSlots&gt;</code></pre>
        </div>
      </section>

      <!-- 3. SCOPED SLOTS -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          3. Scoped Slots (Slot Props)
        </h2>
        <p class="text-gray-600 mb-4">
          Child component passes data to parent for customization.
        </p>

        <ScopedSlot :users="users">
          <template #default="{ user, index }">
            <div
              class="bg-purple-100 border border-purple-300 rounded p-3 mb-2"
            >
              <div class="font-semibold text-purple-800">
                {{ index + 1 }}. {{ user.name }}
              </div>
              <div class="text-sm text-purple-600">{{ user.email }}</div>
              <div class="text-xs text-purple-500 mt-1">
                Role: {{ user.role }}
              </div>
            </div>
          </template>
        </ScopedSlot>

        <div class="mt-4 bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre><code>&lt;ScopedSlot :users="users"&gt;
  &lt;template #default="{ user, index }"&gt;
    &lt;div&gt;{{ user.name }} - {{ user.email }}&lt;/div&gt;
  &lt;/template&gt;
&lt;/ScopedSlot&gt;</code></pre>
        </div>
      </section>

      <!-- 4. FALLBACK CONTENT -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          4. Fallback Content
        </h2>
        <p class="text-gray-600 mb-4">
          Default content shown when no slot content is provided.
        </p>

        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-600 mb-2">With custom content:</p>
            <FallbackContent>
              <span class="font-bold">Save Changes</span>
            </FallbackContent>
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">
              Without content (shows fallback):
            </p>
            <FallbackContent></FallbackContent>
          </div>
        </div>

        <div class="mt-4 bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre><code>&lt;!-- With content --&gt;
&lt;FallbackContent&gt;Save Changes&lt;/FallbackContent&gt;

&lt;!-- Without content (shows fallback) --&gt;
&lt;FallbackContent&gt;&lt;/FallbackContent&gt;</code></pre>
        </div>
      </section>

      <!-- 5. MULTIPLE SLOTS WITH FALLBACK -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          5. Multiple Slots with Fallbacks
        </h2>
        <p class="text-gray-600 mb-4">
          Combine named slots, default slot, and fallback content.
        </p>

        <MultipleSlots>
          <template #header>
            <span class="font-bold">My Custom Header</span>
          </template>
          <p class="text-indigo-700">
            This is the default slot content. You can put anything here!
          </p>
          <!-- Footer uses fallback content -->
        </MultipleSlots>

        <div class="mt-4 bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre><code>&lt;MultipleSlots&gt;
  &lt;template #header&gt;Custom Header&lt;/template&gt;
  &lt;p&gt;Default slot content&lt;/p&gt;
  &lt;!-- Footer uses fallback --&gt;
&lt;/MultipleSlots&gt;</code></pre>
        </div>
      </section>

      <!-- 6. REAL-WORLD EXAMPLE: DATA TABLE -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          6. Real-World Example: Data Table
        </h2>
        <p class="text-gray-600 mb-4">
          Scoped slots allow custom rendering for each column.
        </p>

        <DataTable :data="tableData" :columns="tableColumns">
          <!-- Custom render for price column -->
          <template #price="{ value }">
            <span class="font-bold text-green-600">${{ value.toFixed(2) }}</span>
          </template>

          <!-- Custom render for stock column -->
          <template #stock="{ value }">
            <span
              :class="[
                'px-2 py-1 rounded text-xs font-semibold',
                value > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
              ]"
            >
              {{ value > 0 ? `${value} left` : "Out of stock" }}
            </span>
          </template>

          <!-- Custom render for status column -->
          <template #status="{ value }">
            <span
              :class="[
                'px-2 py-1 rounded text-xs font-semibold',
                value === 'active'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800',
              ]"
            >
              {{ value === "active" ? "✓ Active" : "✗ Out of Stock" }}
            </span>
          </template>

          <!-- Name column uses default rendering -->
        </DataTable>

        <div class="mt-4 bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre><code>&lt;DataTable :data="tableData" :columns="tableColumns"&gt;
  &lt;template #price="{ value }"&gt;
    &lt;span&gt;${{ value }}&lt;/span&gt;
  &lt;/template&gt;
  &lt;!-- Other columns use default rendering --&gt;
&lt;/DataTable&gt;</code></pre>
        </div>
      </section>

      <!-- 7. DYNAMIC SLOT NAMES -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          7. Dynamic Slot Names
        </h2>
        <p class="text-gray-600 mb-4">
          Slot names can be dynamic using brackets.
        </p>

        <DynamicSlot>
          <template #tab1>
            <div class="text-teal-700">
              <h4 class="font-semibold mb-2">Tab 1 Content</h4>
              <p>This is the content for the first tab.</p>
            </div>
          </template>
          <template #tab2>
            <div class="text-teal-700">
              <h4 class="font-semibold mb-2">Tab 2 Content</h4>
              <p>This is different content for the second tab.</p>
            </div>
          </template>
          <template #tab3>
            <div class="text-teal-700">
              <h4 class="font-semibold mb-2">Tab 3 Content</h4>
              <p>And here's content for the third tab!</p>
            </div>
          </template>
        </DynamicSlot>

        <div class="mt-4 bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre><code>&lt;DynamicSlot&gt;
  &lt;template #tab1&gt;Tab 1 content&lt;/template&gt;
  &lt;template #tab2&gt;Tab 2 content&lt;/template&gt;
  &lt;template #tab3&gt;Tab 3 content&lt;/template&gt;
&lt;/DynamicSlot&gt;</code></pre>
        </div>
      </section>

      <!-- SUMMARY -->
      <section class="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          Slot Types Summary
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Slot Type
                </th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Syntax
                </th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Use Case
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-900">
                  Default Slot
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  <code>&lt;slot&gt;&lt;/slot&gt;</code>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  Single content area
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-900">
                  Named Slot
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  <code>&lt;slot name="header"&gt;&lt;/slot&gt;</code>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  Multiple content areas
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-900">
                  Scoped Slot
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  <code>&lt;slot :data="data"&gt;&lt;/slot&gt;</code>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  Parent controls rendering
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-900">
                  Fallback
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  <code>&lt;slot&gt;Default&lt;/slot&gt;</code>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  Default content
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-gray-900">
                  Dynamic Slot
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  <code>&lt;slot :name="dynamicName"&gt;&lt;/slot&gt;</code>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">
                  Runtime slot selection
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
code {
  font-family: "Courier New", monospace;
  font-size: 12px;
}
</style>
