<template>
  <div class="container">
    <h1>SSG — Static Site Generation</h1>
    <p class="badge">Pre-rendered at <strong>BUILD TIME</strong></p>

    <section class="info">
      <h2>How it works</h2>
      <ul>
        <li>Nuxt runs <code>useFetch</code> / <code>useAsyncData</code> once during <code>nuxt generate</code></li>
        <li>Output: static HTML + JSON files, served from CDN</li>
        <li>No Node server needed at runtime</li>
        <li>Data is frozen at build time — stale until next build</li>
      </ul>
    </section>

    <section class="demo">
      <h2>Posts (fetched at build time)</h2>
      <p class="note">
        This data was fetched <em>once</em> when the site was built.
        Refreshing the page hits the CDN — no API call happens.
      </p>
      <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id">
          <strong>{{ post.id }}.</strong> {{ post.title }}
        </li>
      </ul>
      <p v-else>No posts found.</p>
    </section>

    <section class="when-to-use">
      <h2>Use SSG when</h2>
      <ul>
        <li>Content changes infrequently (blogs, docs, marketing pages)</li>
        <li>You want maximum performance — pure CDN delivery</li>
        <li>No personalisation or auth-gated content per request</li>
        <li>SEO is critical and content is public</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * useAsyncData with $fetch is the standard SSG pattern.
 * During `nuxt generate`, Nuxt calls this and serialises
 * the result into a static payload file alongside the HTML.
 */
const { data } = await useAsyncData('ssg-posts', () =>
  $fetch<{ id: number; title: string }[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  )
)

const posts = computed(() => data.value ?? [])
</script>

<style scoped>
.container { max-width: 700px; margin: 2rem auto; font-family: sans-serif; padding: 0 1rem; }
.badge { display: inline-block; background: #4caf50; color: white; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.9rem; }
.info, .demo, .when-to-use { margin-top: 1.5rem; padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; }
.note { font-size: 0.85rem; color: #666; font-style: italic; }
li { margin: 0.4rem 0; }
code { background: #f4f4f4; padding: 0.1rem 0.3rem; border-radius: 3px; }
</style>
