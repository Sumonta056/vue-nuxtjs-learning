<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";

// Access plugins via getCurrentInstance (for Composition API)
const instance = getCurrentInstance();
const toast = instance.appContext.config.globalProperties.$toast;
const currency = instance.appContext.config.globalProperties.$currency;

// Example data
const amount = ref(1234.56);
const formattedAmount = ref("");
const parsedAmount = ref(0);

// Format currency on mount
onMounted(() => {
  formattedAmount.value = currency.format(amount.value);
});

// Methods to demonstrate plugins
const showSuccessToast = () => {
  toast.success("Operation completed successfully!");
};

const showErrorToast = () => {
  toast.error("Something went wrong!");
};

const showWarningToast = () => {
  toast.warning("Please check your input!");
};

const showInfoToast = () => {
  toast.info("Here is some useful information!");
};

const formatCurrency = () => {
  formattedAmount.value = currency.format(amount.value);
  toast.info(`Formatted: ${formattedAmount.value}`);
};

const parseCurrency = () => {
  parsedAmount.value = currency.parse(formattedAmount.value);
  toast.success(`Parsed amount: ${parsedAmount.value}`);
};

const formatAsEUR = () => {
  formattedAmount.value = currency.format(amount.value, "EUR");
  toast.info(`Formatted as EUR: ${formattedAmount.value}`);
};

const formatAsGBP = () => {
  formattedAmount.value = currency.format(amount.value, "GBP");
  toast.info(`Formatted as GBP: ${formattedAmount.value}`);
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-6">
        <router-link
          to="/comparison"
          class="inline-block bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors mb-4"
        >
          🔄 View Plugins vs Composables Comparison →
        </router-link>
      </div>
      <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">
        Vue Plugins Example
      </h1>

      <!-- Toast Plugin Demo -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          Toast Notification Plugin
        </h2>
        <p class="text-gray-600 mb-4">
          Click the buttons below to see different types of toast notifications.
          These are available globally via
          <code class="bg-gray-100 px-2 py-1 rounded">this.$toast</code>
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            @click="showSuccessToast"
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Success Toast
          </button>
          <button
            @click="showErrorToast"
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Error Toast
          </button>
          <button
            @click="showWarningToast"
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Warning Toast
          </button>
          <button
            @click="showInfoToast"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Info Toast
          </button>
        </div>
      </div>

      <!-- Currency Plugin Demo -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          Currency Formatter Plugin
        </h2>
        <p class="text-gray-600 mb-4">
          Format and parse currency values using
          <code class="bg-gray-100 px-2 py-1 rounded">this.$currency</code>
        </p>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Amount:
            </label>
            <input
              v-model.number="amount"
              type="number"
              step="0.01"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Formatted Amount:
            </label>
            <div class="px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg">
              <span class="text-lg font-semibold text-gray-800">{{
                formattedAmount
              }}</span>
            </div>
          </div>

          <div v-if="parsedAmount > 0">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Parsed Amount:
            </label>
            <div class="px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg">
              <span class="text-lg font-semibold text-gray-800">{{
                parsedAmount
              }}</span>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              @click="formatCurrency"
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Format (USD)
            </button>
            <button
              @click="formatAsEUR"
              class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Format (EUR)
            </button>
            <button
              @click="formatAsGBP"
              class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Format (GBP)
            </button>
            <button
              @click="parseCurrency"
              class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Parse Currency
            </button>
          </div>
        </div>
      </div>

      <!-- Plugin Usage Examples -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          How to Use Plugins
        </h2>
        <div class="space-y-4 text-sm">
          <div>
            <h3 class="font-semibold text-gray-700 mb-2">In Options API:</h3>
            <pre
              class="bg-gray-100 p-4 rounded-lg overflow-x-auto"
            ><code>export default {
  methods: {
    showMessage() {
      this.$toast.success('Hello!');
      const formatted = this.$currency.format(1234.56);
    }
  }
}</code></pre>
          </div>
          <div>
            <h3 class="font-semibold text-gray-700 mb-2">
              In Composition API:
            </h3>
            <pre
              class="bg-gray-100 p-4 rounded-lg overflow-x-auto"
            ><code>import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
const toast = instance.appContext.config.globalProperties.$toast;
const currency = instance.appContext.config.globalProperties.$currency;

// Or use inject:
import { inject } from 'vue';
const toast = inject('toast');
const currency = inject('currency');</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
code {
  font-family: "Courier New", monospace;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.3s ease-out;
}
</style>

