Implement this topic in the project

- computed() with getters/setters
- Global state management with Pinia
- Create a Shopping Cart Store
- Use defineStore() for cart
- Use persistedState plugin for localStorage
- Nuxt Middleware + Plugins + Composables Integration

```
plugins/
 ┣ axios.client.ts      → Global HTTP instance
 ┣ logger.ts            → Custom hook logger
middleware/
 ┣ auth.global.ts       → Runs before every page
composables/
 ┣ useAuth.ts           → Reusable login/logout logic
```

- Nuxt server API
- SEO, Meta, and Head • Code-splitting (defineAsyncComponent)
  • Lazy hydration
  • Server caching (Nitro built-in)
  • Prefetching routes
  • Using <Suspense> and async setup

Note: Code should be simple and easy. The goal is to help me understand all the implementations with easy simple examples.
****