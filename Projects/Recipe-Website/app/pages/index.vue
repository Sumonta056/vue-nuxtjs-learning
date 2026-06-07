<script setup>
const headerInfo = ref({
  welcomeMessage: "Delicious Recipes Await",
  welcomeDescription:
    "Discover, cook, and share your favorite recipes. Find inspiration, shop for ingredients, and become a kitchen superstar — all in one place.",
  bannerImage:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
});
</script>
<template>
  <main
    class="bg-gradient-to-br from-indigo-100 via-purple-50 to-white min-h-screen"
  >
    <section class="relative">
      <div
        class="container mx-auto flex flex-col lg:flex-row items-center py-24 lg:py-36 gap-14 lg:gap-24 px-20"
      >
        <!-- Left: Intro Text -->
        <div
          class="flex-1 flex flex-col items-start lg:items-start justify-center text-left"
        >
          <h1
            class="text-5xl md:text-6xl font-extrabold leading-tight mb-5 text-indigo-800 drop-shadow-md animate-fadeInUp"
          >
            {{ headerInfo.welcomeMessage }}
          </h1>
          <p
            class="text-lg md:text-2xl text-gray-700 font-medium mb-8 max-w-xl animate-fadeInDelay"
          >
            {{ headerInfo.welcomeDescription }}
          </p>
          <button
            class="bg-gradient-to-r from-indigo-500 to-indigo-700 shadow-xl text-white px-7 py-3 rounded-2xl font-bold text-lg hover:scale-105 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 active:scale-95 flex items-center gap-2 animate-appear"
            @click="navigateTo('/recipe')"
          >
            <span>See Recipes</span>
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                d="M14 5l7 7-7 7M21 12H3"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <!-- Right: Image with some glow & decorations -->
        <div
          class="flex-1 flex justify-center items-center relative animate-appearRight"
        >
          <div
            class="absolute -inset-2 rounded-3xl blur-2xl opacity-70 bg-gradient-to-tr from-indigo-300 via-purple-200 to-white pointer-events-none -z-10"
          ></div>
          <NuxtImg
            :src="headerInfo.bannerImage"
            alt="Recipes"
            class="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-indigo-100"
          />
          <div class="absolute bottom-4 left-4 animate-bounce">
            <span
              class="inline-block bg-white/80 px-3 py-1 rounded-full text-indigo-700 font-semibold shadow-md text-sm backdrop-blur-md"
            >
              🍲 Over 10,000 Recipes!
            </span>
          </div>
          <div class="absolute top-4 right-5 animate-fadeInDelay">
            <span
              class="inline-block bg-gradient-to-br from-yellow-300 to-pink-200 px-2 py-1 rounded-xl shadow text-xs text-pink-700 font-bold"
            >
              New!
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(48px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
@keyframes appear {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 1s cubic-bezier(0.5, 1, 0.89, 1.1);
}
.animate-fadeInDelay {
  animation: fadeInUp 1.2s cubic-bezier(0.5, 1, 0.89, 1.1);
}
.animate-appear {
  animation: appear 0.9s cubic-bezier(0.5, 1, 0.89, 1.1);
}
.animate-appearRight {
  animation: fadeInRight 1.1s cubic-bezier(0.5, 0.85, 0.55, 1.1);
}
</style>

