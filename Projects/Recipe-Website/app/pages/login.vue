<script setup>
definePageMeta({
  layout: "login",
});

const store = useStore();
const router = useRouter();
const username = ref("");
const password = ref("");

const login = () => {
  store.setUser(username.value, password.value);
  console.log(store.user);
  router.push("/profile");
};
</script>

<template>
  <div class="flex items-center justify-center px-4 py-4">
    <div class="w-full max-w-md bg-violet-200 rounded-2xl shadow-lg p-8">
      <h1 class="text-3xl font-bold mb-6 text-center text-purple-800">
        Login to Your Account
      </h1>
      <form @submit.prevent="login">
        <div class="mb-5">
          <label
            for="username"
            class="block mb-2 text-sm font-semibold text-gray-700"
            >GitHub Username</label
          >
          <input
            type="text"
            v-model="username"
            id="username"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
            placeholder="Enter your GitHub Username"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-semibold text-gray-700"
            >Password</label
          >
          <input
            type="password"
            v-model="password"
            id="password"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg shadow transition mb-4"
        >
          Login
        </button>
        <p class="text-center text-sm text-gray-600">
          Don't have an account?
          <NuxtLink
            to="/register"
            class="text-purple-700 font-semibold hover:underline"
            >Register</NuxtLink
          >
        </p>
      </form>
    </div>
  </div>
</template>

