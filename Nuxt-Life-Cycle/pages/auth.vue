<script setup>
// Use the auth composable
const { user, login, logout } = useAuth()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  await login(email.value, password.value)
  email.value = ''
  password.value = ''
}
</script>

<template>
  <div class="p-8 text-white bg-slate-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Auth Composable Example</h1>
    
    <div v-if="!user.isAuthenticated" class="p-4 bg-slate-800 rounded max-w-md">
      <h2 class="text-xl mb-4">Login</h2>
      <div class="space-y-4">
        <input 
          v-model="email" 
          type="email" 
          placeholder="Email" 
          class="w-full p-2 bg-slate-700 rounded text-white"
        />
        <input 
          v-model="password" 
          type="password" 
          placeholder="Password" 
          class="w-full p-2 bg-slate-700 rounded text-white"
        />
        <button 
          @click="handleLogin"
          class="w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>

    <div v-else class="p-4 bg-slate-800 rounded max-w-md">
      <h2 class="text-xl mb-4">User Profile</h2>
      <div class="space-y-2">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p class="text-green-400">✅ Authenticated</p>
        <button 
          @click="logout"
          class="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>

    <NuxtLink to="/" class="mt-4 text-blue-400 underline block">Back to Home</NuxtLink>
  </div>
</template>

