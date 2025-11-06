<template>
  <div class="font-montserrat flex flex-col items-center justify-centerpy-10">
    <div
      class="bg-white bg-opacity-80 shadow-xl rounded-2xl p-8 flex flex-col items-center max-w-md w-full"
    >
      <div v-if="store.user.email == ''" class="font-montserrat container">
        <NuxtLink
          to="/login"
          class="mt-2 bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 text-white font-bold py-2 px-8 rounded-full shadow-md transition-all duration-200"
        >
          Login
        </NuxtLink>
      </div>

      <div v-else>
        <NuxtImg
          src="https://avatars.githubusercontent.com/u/61287791?v=4"
          alt="Profile Image"
          class="w-32 h-32 rounded-full border-4 border-indigo-300 shadow-lg mb-4"
        />
        <h1 class="text-3xl font-bold text-indigo-700 mb-2">Your Profile</h1>
        <p class="text-gray-600 text-xl mb-6">
          Manage your account details below.
        </p>
        <div class="w-full mb-4">
          <div class="bg-indigo-50 rounded-lg px-4 py-3 mb-3 flex items-center">
            <span class="text-indigo-600 font-semibold w-24">Email:</span>
            <span class="text-gray-800 break-all">{{ store.user.email }}</span>
          </div>
          <div class="bg-indigo-50 rounded-lg px-4 py-3 flex items-center">
            <span class="text-indigo-600 font-semibold w-24">Password:</span>
            <span class="text-gray-800">{{ store.user.password }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useStore();
</script>

