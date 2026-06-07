<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import { useToast } from "@/composables/useToast";
import { useCurrency } from "@/composables/useCurrency";

// ============================================
// PLUGIN APPROACH
// ============================================
const instance = getCurrentInstance();
const pluginToast = instance.appContext.config.globalProperties.$toast;
const pluginCurrency = instance.appContext.config.globalProperties.$currency;

const pluginAmount = ref(1000);
const pluginFormatted = ref("");

onMounted(() => {
  pluginFormatted.value = pluginCurrency.format(pluginAmount.value);
});

const showPluginToast = () => {
  pluginToast.success("This is from a PLUGIN!");
};

const formatPluginCurrency = () => {
  pluginFormatted.value = pluginCurrency.format(pluginAmount.value);
};

// ============================================
// COMPOSABLE APPROACH
// ============================================
const composableToast = useToast();
const composableCurrency = useCurrency({ currency: "USD", locale: "en-US" });

const composableAmount = ref(1000);
const composableFormatted = ref("");

onMounted(() => {
  composableFormatted.value = composableCurrency.format(composableAmount.value);
});

const showComposableToast = () => {
  composableToast.success("This is from a COMPOSABLE!");
};

const formatComposableCurrency = () => {
  composableFormatted.value = composableCurrency.format(composableAmount.value);
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-6">
        <router-link
          to="/"
          class="inline-block bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors mb-4"
        >
          ← Back to Plugins Example
        </router-link>
      </div>
      <h1 class="text-4xl font-bold text-gray-800 mb-4 text-center">
        Plugins vs Composables Comparison
      </h1>
      <p class="text-center text-gray-600 mb-8">
        See the difference between global plugins and composables side by side
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- PLUGIN COLUMN -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
              PLUGIN
            </div>
            <h2 class="text-2xl font-semibold text-gray-700">
              Global Plugin Approach
            </h2>
          </div>

          <div class="mb-4 p-4 bg-blue-50 rounded-lg">
            <p class="text-sm text-gray-700 mb-2">
              <strong>Registration:</strong> Once in <code>main.js</code>
            </p>
            <p class="text-sm text-gray-700 mb-2">
              <strong>Access:</strong> Via <code>getCurrentInstance()</code>
            </p>
            <p class="text-sm text-gray-700">
              <strong>Scope:</strong> Available app-wide
            </p>
          </div>

          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-700 mb-2">Toast Example:</h3>
              <button
                @click="showPluginToast"
                class="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Show Plugin Toast
              </button>
              <pre class="mt-2 bg-gray-100 p-3 rounded text-xs overflow-x-auto"><code>const instance = getCurrentInstance();
const toast = instance.appContext
  .config.globalProperties.$toast;
toast.success('Message');</code></pre>
            </div>

            <div>
              <h3 class="font-semibold text-gray-700 mb-2">
                Currency Example:
              </h3>
              <input
                v-model.number="pluginAmount"
                type="number"
                step="0.01"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
                placeholder="Enter amount"
              />
              <button
                @click="formatPluginCurrency"
                class="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors mb-2"
              >
                Format Currency
              </button>
              <div class="px-4 py-2 bg-gray-50 border rounded-lg">
                <span class="font-semibold">{{ pluginFormatted }}</span>
              </div>
              <pre class="mt-2 bg-gray-100 p-3 rounded text-xs overflow-x-auto"><code>const currency = instance.appContext
  .config.globalProperties.$currency;
currency.format(1000);</code></pre>
            </div>
          </div>
        </div>

        <!-- COMPOSABLE COLUMN -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center mb-4">
            <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
              COMPOSABLE
            </div>
            <h2 class="text-2xl font-semibold text-gray-700">
              Composable Function Approach
            </h2>
          </div>

          <div class="mb-4 p-4 bg-green-50 rounded-lg">
            <p class="text-sm text-gray-700 mb-2">
              <strong>Registration:</strong> Import in each component
            </p>
            <p class="text-sm text-gray-700 mb-2">
              <strong>Access:</strong> Direct function call
            </p>
            <p class="text-sm text-gray-700">
              <strong>Scope:</strong> Component-level
            </p>
          </div>

          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-700 mb-2">Toast Example:</h3>
              <button
                @click="showComposableToast"
                class="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Show Composable Toast
              </button>
              <pre class="mt-2 bg-gray-100 p-3 rounded text-xs overflow-x-auto"><code>import { useToast } from '@/composables/useToast';

const toast = useToast();
toast.success('Message');</code></pre>
            </div>

            <div>
              <h3 class="font-semibold text-gray-700 mb-2">
                Currency Example:
              </h3>
              <input
                v-model.number="composableAmount"
                type="number"
                step="0.01"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
                placeholder="Enter amount"
              />
              <button
                @click="formatComposableCurrency"
                class="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors mb-2"
              >
                Format Currency
              </button>
              <div class="px-4 py-2 bg-gray-50 border rounded-lg">
                <span class="font-semibold">{{ composableFormatted }}</span>
              </div>
              <pre class="mt-2 bg-gray-100 p-3 rounded text-xs overflow-x-auto"><code>import { useCurrency } from '@/composables/useCurrency';

const currency = useCurrency();
currency.format(1000);</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- KEY DIFFERENCES -->
      <div class="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          Key Differences Summary
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold text-blue-700 mb-3">Plugins ✅</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>✅ Registered once globally</li>
              <li>✅ Available everywhere</li>
              <li>✅ Great for third-party libraries</li>
              <li>✅ Shared state across app</li>
              <li>✅ Use when needed in most components</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-green-700 mb-3">Composables ✅</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>✅ Import where needed</li>
              <li>✅ Component-level scope</li>
              <li>✅ Better tree-shaking</li>
              <li>✅ More flexible per component</li>
              <li>✅ Use for reusable component logic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
code {
  font-family: "Courier New", monospace;
  font-size: 11px;
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

