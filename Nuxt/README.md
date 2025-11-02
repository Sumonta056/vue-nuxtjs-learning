# How Nuxt 3 Server-Side Rendering (SSR) Works - Complete Example

## Overview

This document explains how Nuxt 3 performs server-side rendering (SSR) using a complete real-world example - a cryptocurrency tracker application that displays currency data from an external API.

## 1. Application Entry Point (`app.vue`)

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

**Role in SSR:**

- This is the root component that wraps the entire application
- Provides the Vue application context
- `NuxtLayout` wraps layouts, and `NuxtPage` renders the current page
- Executes on both server and client

## 2. SSR Request Flow - Step by Step

### Step 1: Initial HTTP Request

```
User visits: http://localhost:3000/currency/90
     ↓
Nuxt server receives the request
```

### Step 2: Server-Side Rendering Process

```
1. Nuxt Server Router determines route: /currency/90
                    ↓
2. Finds matching page: pages/currency/[id].vue
                    ↓
3. Executes <script setup> on SERVER
```

**In `pages/currency/[id].vue`:**

```vue
<script setup>
const route = useRoute(); // ✅ Works on server - gets route from request
const { data: coin } = await useFetch("/api/ticker?id=" + route.params.id);
// ⚡ CRITICAL: This 'await' blocks rendering until data is fetched
</script>
```

**What happens:**

1. `useRoute()` extracts `id: "90"` from the URL path
2. `useFetch()` executes **on the server** before rendering
3. Nuxt makes an internal API call to `/api/ticker?id=90`

### Step 3: Server API Route Execution

**`server/api/[...].js`:**

```js
export default defineEventHandler(async (event) => {
  const url = `https://api.coinlore.net${event.node.req.url}`;
  // event.node.req.url = "/api/ticker?id=90"
  // Final URL: "https://api.coinlore.net/api/ticker?id=90"

  return await $fetch(url); // Fetches from external API
});
```

**Flow:**

```
useFetch("/api/ticker?id=90")
        ↓
Internal server route handler
        ↓
Fetches from: https://api.coinlore.net/api/ticker?id=90
        ↓
Returns data: [{ id: "90", name: "Bitcoin", ... }]
        ↓
Returns to page component
```

### Step 4: HTML Generation on Server

Once data is fetched, Nuxt renders the template:

```vue
<template>
  <div>
    <!-- ✅ HTML is generated here with ACTUAL DATA -->
    <h2>Bitcoin Detail page</h2>
    <!-- coin[0].name rendered -->
    <table>
      <tr>
        <td>BTC</td>
        <!-- coin[0].symbol rendered -->
        <td>1</td>
        <!-- coin[0].rank rendered -->
        ...
      </tr>
    </table>
  </div>
</template>
```

**Result:** Complete HTML with data already embedded!

### Step 5: Response to Browser

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Currency Detail</title>
  </head>
  <body>
    <div id="__nuxt">
      <!-- ✅ FULLY RENDERED HTML WITH DATA -->
      <div>
        <h2>Bitcoin Detail page</h2>
        <table>
          <tr>
            <td>BTC</td>
            <td>1</td>
            <td>110360.59</td>
            ...
          </tr>
        </table>
      </div>
    </div>

    <!-- Nuxt hydration script -->
    <script>
      // Nuxt state with SSR data
      window.__NUXT_DATA__ = {
        data: {
          coin: [{ id: "90", name: "Bitcoin", ... }]
        }
      };
    </script>
    <script src="/_nuxt/client.js"></script>
  </body>
</html>
```

### Step 6: Client-Side Hydration

```
1. Browser receives HTML (already rendered!)
2. Browser displays content IMMEDIATELY
3. Vue.js loads and "hydrates" the page
4. Page becomes interactive
```

**Hydration** = Vue attaches to existing HTML instead of creating it from scratch.

## 3. Key SSR Concepts in Your Example

### A. `useFetch()` Composable

```vue
const { data: coin } = await useFetch("/api/ticker?id=" + route.params.id);
```

**Why it's perfect for SSR:**

- Automatically runs on **server during SSR**
- Automatically runs on **client for client-side navigation**
- Automatically deduplicates requests
- Provides reactive state
- Works seamlessly with `await` (top-level await in `<script setup>`)

**What happens:**

```
Server (SSR):     await useFetch() → Blocks HTML generation until data ready
Client (Hydration):  useFetch() → Reuses SSR data (no new request needed)
Client (Navigation): useFetch() → Makes new request if navigating to page
```

### B. Server Routes (`server/api/[...].js`)

**Why server routes are crucial:**

1. **Runs only on server** - Never exposed to client
2. **Can call external APIs** - No CORS issues
3. **Acts as a proxy** - Protects API keys, handles authentication
4. **Synchronous with SSR** - Data ready before HTML is sent

**Request Flow:**

```
Browser → Nuxt Server → server/api/[...].js → External API → Response
                                          ↓
                                    (Proxied back)
```

### C. Layout System

```
app.vue
  └─ NuxtLayout (default)
       └─ layouts/default.vue
            └─ <slot /> (your page content)
```

**In SSR:** Layouts are rendered on server with page content included.

## 4. Complete SSR Lifecycle Example

**Request:** `http://localhost:3000/`

```
┌─────────────────────────────────────────────────┐
│ 1. SERVER RECEIVES REQUEST                      │
│    URL: /                                       │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 2. ROUTE MATCHING                               │
│    Found: pages/index.vue                       │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 3. EXECUTE SCRIPT SETUP (SERVER)                │
│    const { data } = await useFetch(             │
│      "/api/tickers?limit=10"                    │
│    );                                           │
│    ⏸️  Blocks here until data arrives          │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 4. SERVER API CALL                              │
│    server/api/[...].js handles:                 │
│    /api/tickers?limit=10                       │
│    → Proxies to CoinLore API                    │
│    → Returns: { data: [...] }                  │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 5. RENDER HTML (SERVER)                         │
│    <table>                                       │
│      <tr v-for="currency in data.data">        │
│        <td>{{ currency.name }}</td> ✅          │
│      </tr>                                       │
│    </table>                                      │
│    → Generates complete HTML with data          │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 6. SEND TO BROWSER                               │
│    Complete HTML + Nuxt hydration script        │
│    User sees content immediately! 🚀            │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 7. CLIENT HYDRATION                              │
│    Vue.js attaches to HTML                      │
│    Page becomes interactive                     │
│    No data refetch needed (already in HTML)     │
└─────────────────────────────────────────────────┘
```

## 5. Benefits Demonstrated in Your Example

### 1. **SEO (Search Engine Optimization)**

- Search engines see fully rendered HTML with actual currency data
- Not just empty `<div>` elements

### 2. **Fast Initial Load**

- HTML arrives with data embedded
- User sees content immediately (no waiting for JavaScript)

### 3. **Works Without JavaScript** (at first render)

- If JavaScript fails, users still see the content

### 4. **No CORS Issues**

- Server routes handle external API calls
- Browser never directly accesses external API

## 6. SSR vs CSR Comparison

### SSR (What Nuxt Does)

```
User Request → Server renders HTML → Browser shows HTML → Vue hydrates
                    ↑
              (Data fetched here)
```

### CSR (Traditional SPA)

```
User Request → Empty HTML → Browser loads JS → JS fetches data → Renders
                                         ↑
                                  (Data fetched here, slow!)
```

## 7. Important Points to Remember

### 1. `await` in `<script setup>` Blocks Rendering

```vue
const { data } = await useFetch(...); // Server waits for this
```

This ensures data is ready before HTML is generated and sent to browser.

### 2. Server Routes Are Internal

- `/api/ticker?id=90` is a **Nuxt server route**
- Not directly accessible from browser
- Only runs on the server

### 3. Hydration Must Match

- Server HTML must match what Vue expects on client
- Mismatches cause hydration errors (like missing `<tr>` in `<thead>`)

## 8. File Structure Summary

```
Nuxt/
├── app.vue              # Root component
├── layouts/
│   └── default.vue      # Default layout
├── pages/
│   ├── index.vue        # Home page (uses useFetch)
│   └── currency/
│       └── [id].vue     # Dynamic route (uses useFetch)
├── server/
│   └── api/
│       └── [...].js     # API proxy route
└── nuxt.config.ts       # Nuxt configuration
```

## 9. How Each File Contributes to SSR

| File                      | SSR Role                                                   |
| ------------------------- | ---------------------------------------------------------- |
| `app.vue`                 | Entry point, wraps layouts and pages                       |
| `layouts/default.vue`     | Provides consistent structure, renders on server           |
| `pages/index.vue`         | Uses `useFetch()` to fetch data on server before rendering |
| `pages/currency/[id].vue` | Dynamic route, fetches specific currency data on server    |
| `server/api/[...].js`     | Proxy route, fetches from external API on server side      |

## 10. Real Example: Loading Currency Data

**When user visits `/currency/90`:**

1. **Server receives request** for `/currency/90`
2. **Nuxt matches route** to `pages/currency/[id].vue`
3. **Script executes on server:**
   ```js
   const route = useRoute(); // Gets { id: '90' }
   const { data: coin } = await useFetch("/api/ticker?id=90");
   ```
4. **Server API route is called:**
   ```js
   // server/api/[...].js runs
   // Fetches from: https://api.coinlore.net/api/ticker?id=90
   // Returns: [{ id: "90", name: "Bitcoin", symbol: "BTC", ... }]
   ```
5. **HTML is rendered on server:**
   ```html
   <h2>Bitcoin Detail page</h2>
   <table>
     <tr>
       <td>BTC</td>
       <td>1</td>
       <td>110360.59</td>
     </tr>
   </table>
   ```
6. **Complete HTML sent to browser** (with data embedded)
7. **Vue hydrates** the page (makes it interactive)

**Result:** User sees Bitcoin details immediately, no loading spinner!

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Conclusion

Nuxt 3's SSR provides:

- ✅ **Server-side rendering** - HTML generated on server with data
- ✅ **Fast initial load** - Content visible immediately
- ✅ **SEO friendly** - Search engines see full content
- ✅ **Progressive enhancement** - Works even if JavaScript fails
- ✅ **Automatic hydration** - Vue makes page interactive seamlessly

Your application demonstrates all these benefits through the combination of:

- `useFetch()` composable for data fetching
- Server API routes for proxying external APIs
- Top-level `await` for blocking rendering until data is ready
- Proper component structure with layouts and pages

This is why Nuxt 3 is a powerful framework for building modern web applications!

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

