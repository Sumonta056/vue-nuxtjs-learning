<template>
  <div class="p-8 max-w-2xl mx-auto space-y-8">
    <h1 class="text-2xl font-bold">watch vs computed</h1>

    <!-- COMPUTED: derives value from state -->
    <section class="border p-4 rounded">
      <h2 class="text-lg font-semibold mb-2">computed — derive value</h2>
      <p class="text-sm text-gray-500 mb-3">
        Use computed when you need a <strong>value</strong> derived from other state.
        Result is cached — only recalculates when dependency changes.
      </p>
      <input v-model="firstName" placeholder="First name" class="border p-1 mr-2 rounded" />
      <input v-model="lastName" placeholder="Last name" class="border p-1 rounded" />
      <p class="mt-2">Full name: <strong>{{ fullName }}</strong></p>
      <p class="text-xs text-gray-400 mt-1">
        fullName is cached. Accessing it 100x = computed once.
      </p>
    </section>

    <!-- WATCH: side effects when state changes -->
    <section class="border p-4 rounded">
      <h2 class="text-lg font-semibold mb-2">watch — react to change (side effect)</h2>
      <p class="text-sm text-gray-500 mb-3">
        Use watch when a change should trigger a <strong>side effect</strong>:
        API call, logging, writing to localStorage, etc.
      </p>
      <input v-model="searchQuery" placeholder="Type to search..." class="border p-1 rounded w-full" />
      <p class="mt-2 text-sm">
        API calls made: <strong>{{ apiCallCount }}</strong>
      </p>
      <p class="text-xs text-gray-400">
        watch fires on every change — triggers async fetch simulation.
      </p>
      <ul v-if="results.length" class="mt-2 list-disc list-inside text-sm">
        <li v-for="r in results" :key="r">{{ r }}</li>
      </ul>
    </section>

    <!-- WATCH: old vs new value + immediate + deep -->
    <section class="border p-4 rounded">
      <h2 class="text-lg font-semibold mb-2">watch options: immediate + deep</h2>
      <p class="text-sm text-gray-500 mb-3">
        <code>immediate: true</code> runs on mount. <code>deep: true</code> watches nested objects.
        computed cannot do either.
      </p>
      <button @click="user.age++" class="border px-3 py-1 rounded mr-2">Age +1</button>
      <button @click="user.name = 'Alice'" class="border px-3 py-1 rounded">Set name Alice</button>
      <p class="mt-2 text-sm">User: {{ user.name }}, {{ user.age }}</p>
      <div class="mt-2 text-xs text-gray-500 space-y-1">
        <p v-for="(log, i) in watchLog" :key="i">{{ log }}</p>
      </div>
    </section>

    <!-- SIDE BY SIDE COMPARISON -->
    <section class="border p-4 rounded bg-gray-50">
      <h2 class="text-lg font-semibold mb-3">Summary</h2>
      <table class="text-sm w-full">
        <thead>
          <tr class="text-left border-b">
            <th class="pb-2">Feature</th>
            <th class="pb-2">computed</th>
            <th class="pb-2">watch</th>
          </tr>
        </thead>
        <tbody class="space-y-1">
          <tr><td>Returns value</td><td>✅</td><td>❌</td></tr>
          <tr><td>Cached</td><td>✅</td><td>❌</td></tr>
          <tr><td>Async support</td><td>❌</td><td>✅</td></tr>
          <tr><td>Old/new value</td><td>❌</td><td>✅</td></tr>
          <tr><td>immediate option</td><td>❌</td><td>✅</td></tr>
          <tr><td>deep option</td><td>❌</td><td>✅</td></tr>
          <tr><td>Side effects</td><td>❌ (anti-pattern)</td><td>✅</td></tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup lang="ts">
// Nuxt auto-imports: ref, reactive, computed, watch — no explicit import needed

// ─── COMPUTED example ───────────────────────────────────────────────
const firstName = ref('John')
const lastName = ref('Doe')

// computed: derive a value — cached until firstName or lastName changes
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// ─── WATCH example: async side effect ───────────────────────────────
const searchQuery = ref('')
const apiCallCount = ref(0)
const results = ref<string[]>([])

// watch: run side effect when searchQuery changes
// can be async — computed cannot
watch(searchQuery, async (newVal: string) => {
  if (!newVal.trim()) {
    results.value = []
    return
  }

  apiCallCount.value++

  // simulate async API fetch
  await new Promise(resolve => setTimeout(resolve, 300))
  results.value = [`Result for "${newVal}" #1`, `Result for "${newVal}" #2`]
})

// ─── WATCH: deep + immediate ─────────────────────────────────────────
const user = reactive({ name: 'Bob', age: 25 })
const watchLog = ref<string[]>([])

// immediate: fires on mount, not just on change
// deep: detects nested property mutations in objects/arrays
watch(
  user,
  (newVal: typeof user) => {
    watchLog.value.unshift(`[${new Date().toLocaleTimeString()}] name=${newVal.name}, age=${newVal.age}`)
    if (watchLog.value.length > 5) watchLog.value.pop()
  },
  { immediate: true, deep: true }
)
</script>
