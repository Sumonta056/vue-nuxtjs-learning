<template>
  <div class="container">
    <h1>SSR — Server-Side Rendering</h1>
    <p class="badge">Rendered on <strong>EVERY REQUEST</strong></p>

    <section class="info">
      <h2>How it works</h2>
      <ul>
        <li>Node server runs <code>useAsyncData</code> / <code>useFetch</code> on each HTTP request</li>
        <li>Fresh HTML sent to browser every time — always up-to-date</li>
        <li>Requires a running server (Node / edge runtime)</li>
        <li>Slightly slower TTFB than SSG, but data is never stale</li>
      </ul>
    </section>

    <section class="demo">
      <h2>Live data (fetched on this request)</h2>
      <p class="note">
        Timestamp below was set <em>on the server</em> when your browser made this request.
        Hard-refresh to see it change — proof the server ran again.
      </p>
      <p class="timestamp">Server time: <strong>{{ serverTime }}</strong></p>

      <h3>Random post (different each request)</h3>
      <div v-if="post" class="post-card">
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
      </div>
      <p v-else>Loading failed.</p>
    </section>

    <section class="when-to-use">
      <h2>Use SSR when</h2>
      <ul>
        <li>Data changes frequently or is user-specific (dashboards, feeds)</li>
        <li>Personalised / authenticated content per request</li>
        <li>SEO needed on dynamic content (e-commerce product pages)</li>
        <li>You can't afford stale data from a build-time snapshot</li>
      </ul>
    </section>

    <section class="comparison">
      <h2>SSG vs SSR at a glance</h2>
      <table>
        <thead>
          <tr><th></th><th>SSG</th><th>SSR</th></tr>
        </thead>
        <tbody>
          <tr><td>Data freshness</td><td>Build time</td><td>Every request</td></tr>
          <tr><td>TTFB</td><td>Fastest (CDN)</td><td>Slower (server)</td></tr>
          <tr><td>Server needed</td><td>No</td><td>Yes</td></tr>
          <tr><td>Personalisation</td><td>No</td><td>Yes</td></tr>
          <tr><td>Best for</td><td>Blogs, docs, marketing</td><td>Dashboards, e-commerce</td></tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * useAsyncData runs server-side on every request in SSR mode.
 * The result is serialised into the HTML payload so the client
 * doesn't refetch — hydration uses the server's data directly.
 *
 * No special config needed: SSR is Nuxt's default mode.
 * For SSG, run `nuxt generate` instead of `nuxt build`.
 */
const randomId = Math.floor(Math.random() * 100) + 1

const { data: post } = await useAsyncData(`ssr-post-${randomId}`, () =>
  $fetch<{ title: string; body: string }>(
    `https://jsonplaceholder.typicode.com/posts/${randomId}`
  )
)

// new Date() executes on the server — proves SSR ran for this request
const serverTime = new Date().toLocaleTimeString('en-US', { hour12: false })
</script>

<style scoped>
.container { max-width: 700px; margin: 2rem auto; font-family: sans-serif; padding: 0 1rem; }
.badge { display: inline-block; background: #2196f3; color: white; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.9rem; }
.info, .demo, .when-to-use, .comparison { margin-top: 1.5rem; padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; }
.note { font-size: 0.85rem; color: #666; font-style: italic; }
.timestamp { font-size: 1.1rem; }
.post-card { background: #f9f9f9; padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem; }
.post-card h4 { margin: 0 0 0.5rem; text-transform: capitalize; }
table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
th, td { padding: 0.5rem 0.75rem; border: 1px solid #ddd; text-align: left; }
th { background: #f4f4f4; }
li { margin: 0.4rem 0; }
code { background: #f4f4f4; padding: 0.1rem 0.3rem; border-radius: 3px; }
</style>
