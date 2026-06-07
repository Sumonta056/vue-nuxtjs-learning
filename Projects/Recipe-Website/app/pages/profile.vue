<template>
  <div
    class="font-montserrat min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-100 py-0 w-full"
  >
    <!-- Full-width gradient strip with avatar in center -->
    <div v-if="store.user.username !== ''" class="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-12 flex flex-col items-center justify-center relative shadow-lg">
      <div class="absolute left-10 top-10">
        <NuxtIcon name="github" class="text-white drop-shadow-lg opacity-60" size="48" />
      </div>
      <NuxtImg
        :src="userInfo.avatar_url"
        :alt="userInfo.name"
        class="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover mb-4"
      />
      <h1 class="text-4xl font-black text-white drop-shadow-lg mb-1 flex items-center gap-3">
        <NuxtIcon name="user-circle" class="text-indigo-200" size="42" />
        {{ userInfo.name }}
      </h1>
      <a
        :href="userInfo.html_url"
        target="_blank"
        class="text-lg text-indigo-100 flex items-center gap-2 hover:underline"
      >
        <NuxtIcon name="github" /> {{ userInfo.login }}
      </a>
      <p v-if="userInfo.bio" class="text-indigo-100 font-medium mt-2 text-center max-w-2xl mb-2">
        <NuxtIcon name="quote" class="inline-block text-white mr-1" size="16" /> {{ userInfo.bio }}
      </p>
    </div>
    
    <div
      class="flex flex-col items-center w-full"
    >
      <div
        v-if="store.user.username == ''"
        class="font-montserrat flex flex-col items-center gap-4 justify-center min-h-[60vh] w-full"
      >
        <NuxtIcon name="user-circle" class="text-indigo-400" size="100" />
        <p class="text-2xl text-gray-600 font-semibold mb-2">
          You are not logged in.
        </p>
        <NuxtLink
          to="/login"
          class="mt-2 bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 text-white font-bold py-3 px-14 rounded-full shadow-lg text-lg transition-all duration-200"
        >
          <NuxtIcon name="log-in" class="mr-2 text-xl" /> Login
        </NuxtLink>
      </div>
      <div v-else class="flex flex-col items-center w-full max-w-5xl mx-auto mt-[-50px]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
          <!-- LEFT: Profile Detail Card -->
          <div class="bg-white bg-opacity-90 rounded-2xl px-8 py-7 shadow-xl flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <NuxtIcon name="briefcase" class="text-indigo-600" size="26"/>
              <span class="text-gray-700 font-bold">Company:</span>
              <span class="text-gray-900">{{ userInfo.company || "N/A" }}</span>
            </div>
            <div class="flex items-center gap-4">
              <NuxtIcon name="globe" class="text-blue-600" size="26"/>
              <span class="text-gray-700 font-bold">Website:</span>
              <a
                v-if="userInfo.blog"
                :href="userInfo.blog"
                target="_blank"
                class="text-blue-700 hover:text-blue-900 hover:underline break-all font-medium"
              >{{ userInfo.blog }}</a>
              <span v-else class="text-gray-400">N/A</span>
            </div>
            <div class="flex items-center gap-4">
              <NuxtIcon name="map-pin" class="text-pink-500" size="26"/>
              <span class="text-gray-700 font-bold">Location:</span>
              <span class="text-gray-900">{{ userInfo.location || "N/A" }}</span>
            </div>
            <div class="flex items-center gap-4">
              <NuxtIcon name="calendar" class="text-green-500" size="26"/>
              <span class="text-gray-700 font-bold">Joined:</span>
              <span class="text-gray-900">
                {{ new Date(userInfo.created_at).toLocaleDateString() }}
              </span>
            </div>
          </div>

          <!-- RIGHT: User Stats Card -->
          <div class="bg-white bg-opacity-90 rounded-2xl px-8 py-7 shadow-xl flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <NuxtIcon name="user-group" class="text-indigo-600" size="28"/>
              <span class="text-gray-700 font-bold">Followers:</span>
              <span class="text-gray-900 text-lg">{{ userInfo.followers }}</span>
            </div>
            <div class="flex items-center gap-4">
              <NuxtIcon name="user-add" class="text-purple-600" size="28"/>
              <span class="text-gray-700 font-bold">Following:</span>
              <span class="text-gray-900 text-lg">{{ userInfo.following }}</span>
            </div>
            <div class="flex items-center gap-4">
              <NuxtIcon name="book-open" class="text-blue-700" size="28"/>
              <span class="text-gray-700 font-bold">Public Repos:</span>
              <span class="text-gray-900 text-lg">{{ userInfo.public_repos }}</span>
            </div>
            <div class="flex items-center gap-4">
              <NuxtIcon name="code" class="text-pink-500" size="28"/>
              <span class="text-gray-700 font-bold">Public Gists:</span>
              <span class="text-gray-900 text-lg">{{ userInfo.public_gists }}</span>
            </div>
            <div class="flex items-center gap-4" v-if="userInfo.hireable">
              <NuxtIcon name="check-circle" class="text-green-500" size="28"/>
              <span class="text-green-700 font-bold"
                >Available for hire</span
              >
            </div>
          </div>
        </div>
        <div class="w-full flex items-center justify-center mt-12">
          <a
            :href="userInfo.html_url"
            target="_blank"
            class="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 transition text-white font-bold py-4 px-10 rounded-full shadow-2xl text-xl"
          >
            <NuxtIcon name="github" class="text-white" size="28" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useStore();
const username = store.user.username;

const { data: userInfo } = await useFetch(
  `https://api.github.com/users/${username || "Sumonta056"}`
);
</script>
