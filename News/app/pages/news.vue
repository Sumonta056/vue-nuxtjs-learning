<script setup lang="ts">
import type { Article, NewsResponse } from "~/types/NewsType";

const {
  data: news,
  pending,
  error,
} = await useFetch<NewsResponse>("/api/news");

const articles = computed<Article[]>(() => news.value?.articles || []);
const { data } = await useFetch("/api/posty?age=10", {
  method: "post",
  body: { name: "sumonta" },
});
</script>

<template>
  <h1 class="font-bold underline text-7xl">DN!</h1>
  {{ data }}
  <h1 v-if="pending">Data is Loading! ...</h1>
  <div v-else-if="error">Error loading news: {{ error }}</div>
  <div v-else>
    <div v-for="article in articles" :key="article.url" class="p-10">
      <img :src="article.urlToImage" alt="Hi" class="w-40" />
      <li>{{ article.title }}</li>
      <li>{{ article.author }}</li>
      <li>{{ article.publishedAt }}</li>
    </div>
  </div>
</template>

