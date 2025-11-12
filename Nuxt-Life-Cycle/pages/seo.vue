<script setup>
// SEO, Meta, and Head management
useHead({
  title: 'SEO Example Page - Nuxt Life Cycle',
  meta: [
    { name: 'description', content: 'This is an example page demonstrating SEO features in Nuxt' },
    { name: 'keywords', content: 'nuxt, vue, seo, meta tags' },
    { property: 'og:title', content: 'SEO Example Page' },
    { property: 'og:description', content: 'Learn about SEO in Nuxt' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com/seo' }
  ]
})

// Or use useSeoMeta for simpler syntax
useSeoMeta({
  title: 'SEO Example Page',
  description: 'This is an example page demonstrating SEO features in Nuxt',
  ogTitle: 'SEO Example Page',
  ogDescription: 'Learn about SEO in Nuxt',
  ogImage: 'https://example.com/image.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="p-8 text-white bg-slate-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">SEO, Meta, and Head Example</h1>
    
    <div class="p-4 bg-slate-800 rounded">
      <h2 class="text-xl mb-4">Check the page source or DevTools to see:</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>Custom title tag</li>
        <li>Meta description</li>
        <li>Open Graph tags (for social sharing)</li>
        <li>Twitter Card tags</li>
        <li>Canonical link</li>
      </ul>
      
      <p class="mt-4 text-sm text-gray-400">
        💡 Open DevTools → Elements → &lt;head&gt; to see all meta tags
      </p>
    </div>

    <NuxtLink to="/" class="mt-4 text-blue-400 underline block">Back to Home</NuxtLink>
  </div>
</template>

