<template>
  <div class="get-view">
    <div class="query-info">
      <h2>Route Information</h2>
      <div class="info-grid">
        <div class="info-item">
          <label>Search Query:</label>
          <span>{{ queryParams.search || "N/A" }}</span>
        </div>
        <div class="info-item">
          <label>Page:</label>
          <span>{{ queryParams.page || 1 }}</span>
        </div>
        <div class="info-item">
          <label>User ID (Props):</label>
          <span>{{ props.id }}</span>
        </div>
        <div class="info-item">
          <label>User ID (Route):</label>
          <span>{{ routeParams.id }}</span>
        </div>
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="loading">Loading user data...</div>

    <!-- User data display -->
    <div v-else-if="userData" class="user-data">
      <h3>User Details</h3>
      <pre>{{ userData }}</pre>
    </div>

    <!-- Error handling -->
    <div v-if="error" class="error">
      {{ error }}
    </div>

  <div class="flex gap-5">
      <button @click="useButton" class="p-4 bg-amber-500">Home</button>
    <button @click="router.go(-1)" class="p-4 bg-amber-500">Back</button>
    <button @click="router.push({ name: 'home' })" class="p-4 bg-amber-500">
      go random
    </button>
  </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

// Props with validation
const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
    validator: (value) => {
      const numValue = Number(value);
      return !isNaN(numValue) && numValue > 0;
    },
  },
});

// Composables
const route = useRoute();
const router = useRouter();

const useButton = () => {
  router.push({
    name: "home",
  });
};

// Reactive state
const loading = ref(false);
const userData = ref(null);
const error = ref(null);

// Computed properties with proper typing and defaults
const queryParams = computed(() => ({
  search: route.query.search || "",
  page: Number(route.query.page) || 1,
}));

const routeParams = computed(() => ({
  id: route.params.id,
}));

// Normalized ID (prefer props over route params)
const userId = computed(() => {
  return props.id || route.params.id;
});

// Methods
const fetchUserData = async (id) => {
  if (!id) return;

  loading.value = true;
  error.value = null;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock user data
    userData.value = {
      id: id,
      name: `User ${id}`,
      search: queryParams.value.search,
      page: queryParams.value.page,
      timestamp: new Date().toISOString(),
    };
  } catch (err) {
    error.value = "Failed to fetch user data";
    console.error("Error fetching user data:", err);
  } finally {
    loading.value = false;
  }
};

// Watchers for reactive updates
watch(
  () => userId.value,
  (newId) => {
    if (newId) {
      fetchUserData(newId);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.get-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.query-info {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.info-grid {
  display: grid;
  gap: 10px;
  margin-top: 15px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: white;
  border-radius: 4px;
  border-left: 3px solid #007acc;
}

.info-item label {
  font-weight: 600;
  color: #333;
}

.info-item span {
  font-family: monospace;
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #666;
}

.error {
  background: #fee;
  color: #c33;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid #c33;
}

.user-data {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.user-data pre {
  background: #fff;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
