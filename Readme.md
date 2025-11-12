## Vue.js Learning Resources

**This** document tracks the Vue.js concepts and features I have learned and implemented in this workspace.

| #   | Concept                 | Description                                                        | Use Case                                   | Example                                          |
| --- | ----------------------- | ------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------------ |
| 1   | **ref()**               | Reactive variable that holds value and enables reactivity in Vue 3 | Creating reactive primitive values         | `const count = ref(0)`                           |
| 2   | **reactivity**          | System that makes data reactive between script and template        | Automatic UI updates when data changes     | Data binding, computed properties                |
| 3   | **v-bind**              | Dynamically bind data to HTML attributes                           | Dynamic attribute binding                  | `:class="active"`, `:style="styles"`             |
| 4   | **v-if**                | Conditional rendering based on boolean expression                  | Show/hide elements conditionally           | `v-if="isVisible"`, `v-else-if`, `v-else`        |
| 5   | **v-for**               | Render lists by iterating over arrays/objects                      | Display dynamic lists                      | `v-for="item in items" :key="item.id"`           |
| 6   | **watch()**             | Watch reactive data changes and execute functions                  | Side effects on data changes               | API calls, validation, logging                   |
| 7   | **v-on (@)**            | Listen to DOM events and execute methods                           | Event handling                             | `@click="handleClick"`, `@submit="onSubmit"`     |
| 8   | **Class/Style Binding** | Dynamic binding of classes and styles                              | Conditional styling                        | `:class="{ active: isActive }"`                  |
| 9   | **computed()**          | Create derived state from reactive data (cached)                   | Calculated values                          | Filtered lists, formatted data                   |
| 10  | **toRefs()**            | Convert reactive object to plain object with refs                  | Destructuring while maintaining reactivity | `const { name, age } = toRefs(user)`             |
| 11  | **emit()**              | Send custom events from child to parent                            | Component communication                    | `emit('update', value)`                          |
| 12  | **defineProps()**       | Define props a component accepts from parent                       | Component input validation                 | `defineProps(['id', 'name'])`                    |
| 13  | **reactive()**          | Create reactive object with deep reactivity                        | Complex object state                       | `const state = reactive({ user: {} })`           |
| 14  | **v-model**             | Two-way data binding for form inputs                               | Form handling                              | `v-model="inputValue"`                           |
| 15  | **onMounted()**         | Lifecycle hook called after DOM mounting                           | Initialization tasks                       | API calls, DOM manipulation                      |
| 16  | **useRoute()**          | Access current route object information                            | Route data access                          | `route.params.id`, `route.query.search`          |
| 17  | **useRouter()**         | Access router instance for navigation                              | Programmatic navigation                    | `router.push()`, `router.replace()`              |
| 18  | **v-show**              | Toggle element visibility using CSS display property               | Frequent show/hide toggles                 | `v-show="isVisible"`                             |
| 19  | **v-html**              | Render raw HTML content                                            | Displaying HTML from data                  | `v-html="htmlContent"`                           |
| 20  | **v-text**              | Set element text content                                           | Text content binding                       | `v-text="message"`                               |
| 21  | **defineEmits()**       | Define events a component can emit                                 | Type-safe event emission                   | `const emit = defineEmits(['update'])`           |
| 22  | **defineExpose()**      | Expose component methods/properties to parent                      | Accessing child component methods          | `defineExpose({ method })`                       |
| 23  | **provide/inject**      | Dependency injection for ancestor-descendant communication         | Sharing data across component tree         | `provide('key', value)`, `inject('key')`         |
| 24  | **watchEffect()**       | Automatically track dependencies and run effect                    | Reactive side effects                      | `watchEffect(() => console.log(count.value))`    |
| 25  | **onUnmounted()**       | Lifecycle hook called before component unmount                     | Cleanup tasks                              | `onUnmounted(() => clearInterval(id))`           |
| 26  | **onUpdated()**         | Lifecycle hook called after component updates                      | DOM updates after re-render                | `onUpdated(() => console.log('updated'))`        |
| 27  | **onBeforeMount()**     | Lifecycle hook called before DOM mounting                          | Pre-mount setup                            | `onBeforeMount(() => {})`                        |
| 28  | **onBeforeUnmount()**   | Lifecycle hook called before component unmount                     | Pre-unmount cleanup                        | `onBeforeUnmount(() => {})`                      |
| 29  | **Slots**               | Placeholder for parent-provided content                            | Flexible component composition             | `<slot />`, `<slot name="header" />`             |
| 30  | **Scoped Slots**        | Slots with data passed from child to parent                        | Custom rendering with child data           | `<slot :user="user" />`, `#default="{ user }"`   |
| 31  | **Plugins**             | Global functionality registered at app level                       | Third-party libraries, global utilities    | `app.use(myPlugin)`                              |
| 32  | **Composables**         | Reusable logic functions using Composition API                     | Shared component logic                     | `const { data } = useApi()`                      |
| 33  | **RouterView**          | Component that renders matched route component                     | Displaying route components                | `<RouterView />`                                 |
| 34  | **RouterLink**          | Component for navigation links                                     | Declarative navigation                     | `<RouterLink to="/about">About</RouterLink>`     |
| 35  | **useFetch()**          | Nuxt composable for data fetching with SSR support                 | Server-side data fetching                  | `const { data } = await useFetch('/api')`        |
| 36  | **useAsyncData()**      | Nuxt composable for async data with manual control                 | Custom async data fetching                 | `const { data } = await useAsyncData('key', fn)` |
| 37  | **useState()**          | Nuxt composable for shared reactive state                          | Cross-component state sharing              | `const state = useState('key', () => value)`     |
| 38  | **useCookie()**         | Nuxt composable for reactive cookie access                         | Cookie management                          | `const cookie = useCookie('name')`               |
| 39  | **NuxtLink**            | Nuxt component for client-side navigation                          | Navigation with prefetching                | `<NuxtLink to="/page">Link</NuxtLink>`           |
| 40  | **NuxtLayout**          | Nuxt component that wraps pages with layouts                       | Layout system                              | `<NuxtLayout><NuxtPage /></NuxtLayout>`          |
| 41  | **NuxtPage**            | Nuxt component that renders current page                           | Page rendering                             | `<NuxtPage />`                                   |
| 42  | **definePageMeta()**    | Define page metadata and options                                   | Page configuration                         | `definePageMeta({ layout: 'custom' })`           |
| 43  | **useAuth()**           | Nuxt composable for authentication                                 | User authentication                        | `const { status, signIn } = useAuth()`           |
| 44  | **Server Routes**       | API routes running on server only                                  | Backend API endpoints                      | `server/api/[...].ts`                            |
| 45  | **SSR**                 | Server-Side Rendering - HTML generated on server                   | SEO, fast initial load                     | Automatic in Nuxt pages                          |
| 46  | **Dynamic Routes**      | Routes with parameters                                             | Parameterized routes                       | `pages/user/[id].vue`                            |

### Directive Categories

| Category           | Directives                              | Purpose                    |
| ------------------ | --------------------------------------- | -------------------------- |
| **Data Binding**   | `v-bind`, `v-model`                     | Connect data to template   |
| **Conditional**    | `v-if`, `v-else-if`, `v-else`, `v-show` | Control element visibility |
| **List Rendering** | `v-for`                                 | Render arrays/objects      |
| **Event Handling** | `v-on (@)`                              | Handle user interactions   |
| **Text Content**   | `v-text`, `v-html`                      | Display text/HTML content  |

### Composition API Functions

| Function            | Type       | Purpose                   | Returns                   |
| ------------------- | ---------- | ------------------------- | ------------------------- |
| `ref()`             | Reactivity | Create reactive reference | `Ref<T>`                  |
| `reactive()`        | Reactivity | Create reactive object    | `Reactive<T>`             |
| `computed()`        | Reactivity | Create computed property  | `ComputedRef<T>`          |
| `watch()`           | Reactivity | Watch data changes        | `WatchStopHandle`         |
| `watchEffect()`     | Reactivity | Auto-track dependencies   | `WatchStopHandle`         |
| `toRefs()`          | Reactivity | Convert reactive to refs  | `ToRefs<T>`               |
| `onMounted()`       | Lifecycle  | Mount lifecycle hook      | `void`                    |
| `onUnmounted()`     | Lifecycle  | Unmount lifecycle hook    | `void`                    |
| `onUpdated()`       | Lifecycle  | Update lifecycle hook     | `void`                    |
| `onBeforeMount()`   | Lifecycle  | Pre-mount hook            | `void`                    |
| `onBeforeUnmount()` | Lifecycle  | Pre-unmount hook          | `void`                    |
| `defineProps()`     | Component  | Define component props    | `Props`                   |
| `defineEmits()`     | Component  | Define component events   | `Emit`                    |
| `defineExpose()`    | Component  | Expose component API      | `void`                    |
| `provide()`         | Component  | Provide dependency        | `void`                    |
| `inject()`          | Component  | Inject dependency         | `T \| undefined`          |
| `useRoute()`        | Router     | Access current route      | `RouteLocationNormalized` |
| `useRouter()`       | Router     | Access router instance    | `Router`                  |
| `useFetch()`        | Nuxt       | Fetch data with SSR       | `AsyncData<T>`            |
| `useAsyncData()`    | Nuxt       | Async data with control   | `AsyncData<T>`            |
| `useState()`        | Nuxt       | Shared reactive state     | `Ref<T>`                  |
| `useCookie()`       | Nuxt       | Reactive cookie access    | `Ref<string>`             |
| `useAuth()`         | Nuxt       | Authentication composable | `Auth`                    |

### 1. **Vue.js Fundamentals**

- ✅ Vue 3 project setup with Vite
- ✅ Single File Components (SFC) structure
- ✅ Template syntax and directives
- ✅ Component composition and organization

### 2. **Template Interpolation & Data Binding**

- ✅ **Text Interpolation** - [`TextInterpolation.vue`](Vue-Course/src/components/TextInterpolation.vue)
  - Mustache syntax `{{ }}`
  - Displaying dynamic data in templates
  - Basic event handling with `@click`

### 3. **Attribute Binding**

- ✅ **V-Bind Directive** - [`VBind.vue`](Vue-Course/src/components/VBind.vue)
  - Binding data to HTML attributes (`:src`, `:alt`, `:class`)
  - Conditional classes based on data
  - Dynamic attribute binding
- ✅ **Advanced Attribute Binding** - [`AttributeBinding.vue`](Vue-Course/src/components/AttributeBinding.vue)
  - Multiple binding syntaxes (`v-bind:` vs `:`)
  - Dynamic object binding
  - Boolean attribute binding

### 4. **Event Handling**

- ✅ **Basic Event Handling** - [`EventHandler.vue`](Vue-Course/src/components/EventHandler.vue)
  - Click events with `@click`
  - Method definitions and execution
  - State manipulation through events
- ✅ **Form Event Handling** - [`FormEventHandler.vue`](Vue-Course/src/components/FormEventHandler.vue)
  - Form submission with `@submit.prevent`
  - Two-way data binding with `v-model`
  - Form validation and user input handling

### 5. **Reactivity System**

- ✅ **Ref API** - [`RefComponent.vue`](Vue-Course/src/components/RefComponent.vue)
  - Creating reactive references with `ref()`
  - Working with primitive and complex data types
  - Updating reactive data (.value syntax)
  - Arrays and objects in refs
- ✅ **Reactive API** - [`ReactiveComponent.vue`](Vue-Course/src/components/ReactiveComponent.vue)
  - Creating reactive objects with `reactive()`
  - Nested object reactivity
  - Direct property manipulation

### 6. **List Rendering**

- ✅ **V-For Directive** - [`VFor.vue`](Vue-Course/src/components/VFor.vue)
  - Iterating over arrays
  - Using `:key` for list optimization
  - Accessing array items and properties
  - Template rendering for each item

### 7. **Conditional Rendering**

- ✅ **V-If/V-Else/V-Else-If** - [`VIf.vue`](Vue-Course/src/components/VIf.vue)
  - Conditional DOM rendering
  - Complex conditional logic
  - Loading states and user authentication flows
- ✅ **V-Show Directive** - [`VIf.vue`](Vue-Course/src/components/VIf.vue)
  - CSS-based visibility toggling
  - Performance considerations (v-if vs v-show)
  - Dynamic UI controls

### 8. **Computed Properties**

- ✅ **Computed Values** - [`VComputed.vue`](Vue-Course/src/components/VComputed.vue)
  - Reactive computed properties with `computed()`
  - Automatic dependency tracking
  - Performance optimization through caching
  - Derived state management

### 9. **Component Lifecycle**

- ✅ **OnMounted Hook** - [`OnMounted.vue`](Vue-Course/src/components/OnMounted.vue)
  - Component lifecycle management
  - API calls on component mount
  - Async data fetching
  - Loading states and error handling

### 10. **Component Architecture & Communication**

- ✅ **Props** - [`Balance.vue`](Expense-Tracker/src/components/Balance.vue), [`IncomeExpense.vue`](Expense-Tracker/src/components/IncomeExpense.vue)
  - Parent-to-child data passing
  - Prop validation and type checking
  - Required props and default values
- ✅ **Events (Emit)** - [`AddTransaction.vue`](Expense-Tracker/src/components/AddTransaction.vue), [`TransactionList.vue`](Expense-Tracker/src/components/TransactionList.vue)
  - Child-to-parent communication
  - Custom event emission with `defineEmits`
  - Event payload handling

### 11. **Slots & Content Projection**

- ✅ **Slots** - [`Vue-Slot/`](Vue-Slot/)
  - Default slots for flexible content
  - Named slots for multiple content areas
  - Scoped slots for data passing from child to parent
  - Fallback content for default values
  - Dynamic slot names

### 12. **Plugins & Composables**

- ✅ **Plugins** - [`Vue-Plugin-Composable/`](Vue-Plugin-Composable/)
  - Global functionality registration
  - App-wide utilities and third-party libraries
  - Global properties and provide/inject
- ✅ **Composables** - [`Vue-Plugin-Composable/`](Vue-Plugin-Composable/)
  - Reusable logic functions
  - Composition API patterns
  - Better tree-shaking and flexibility

### 13. **Advanced Lifecycle Hooks**

- ✅ **onUnmounted()** - Cleanup tasks before component removal
- ✅ **onUpdated()** - React to component updates
- ✅ **onBeforeMount()** - Pre-mount initialization
- ✅ **onBeforeUnmount()** - Pre-unmount cleanup

### 14. **Vue Router**

- ✅ **RouterView** - Component for rendering matched routes
- ✅ **RouterLink** - Declarative navigation component
- ✅ **Dynamic Routes** - Parameterized routes with `[id].vue`

### 15. **Nuxt.js Features**

- ✅ **Server-Side Rendering (SSR)** - [`Nuxt/`](Nuxt/)
  - Server-side HTML generation
  - SEO optimization
  - Fast initial page loads
- ✅ **Data Fetching** - [`Nuxt/`](Nuxt/)
  - `useFetch()` for SSR data fetching
  - `useAsyncData()` for custom async operations
  - Automatic request deduplication
- ✅ **State Management** - [`Nuxt/`](Nuxt/)
  - `useState()` for shared reactive state
  - `useCookie()` for cookie management
- ✅ **Layouts & Pages** - [`Nuxt/`](Nuxt/)
  - `NuxtLayout` for layout system
  - `NuxtPage` for page rendering
  - `definePageMeta()` for page configuration
- ✅ **Navigation** - [`Nuxt/`](Nuxt/), [`Recipe-Website/`](Recipe-Website/)
  - `NuxtLink` for client-side navigation
  - Automatic prefetching
- ✅ **Authentication** - [`Nuxt-Auth/`](Nuxt-Auth/)
  - `useAuth()` composable
  - Authentication providers
- ✅ **Server Routes** - [`Nuxt/`](Nuxt/)
  - API endpoints in `server/api/`
  - Server-only execution
  - Proxy for external APIs

### 16. V Directives Overview

![alt text](./assets/image.png)

### 17. Lifecycle Methods Overview

![alt text](./assets/image-1.png)

## 🎯 Practical Projects

### 1. **Vue Course Examples** - [`Vue-Course/`](Vue-Course/)

A comprehensive collection of Vue.js feature demonstrations covering all fundamental concepts.

### 2. **Expense Tracker Application** - [`Expense-Tracker/`](Expense-Tracker/)

A complete CRUD application featuring:

- Add/delete transactions
- Income and expense calculation
- Local storage persistence
- Toast notifications
- Component communication patterns

### 3. **Vue Slots Examples** - [`Vue-Slot/`](Vue-Slot/)

Comprehensive examples demonstrating:

- Default slots
- Named slots
- Scoped slots
- Fallback content
- Dynamic slot names

### 4. **Plugins & Composables** - [`Vue-Plugin-Composable/`](Vue-Plugin-Composable/)

Comparison and examples of:

- Vue plugins for global functionality
- Composables for reusable logic
- When to use each approach

### 5. **Nuxt.js SSR Application** - [`Nuxt/`](Nuxt/)

Server-side rendering example featuring:

- `useFetch()` for data fetching
- Server routes for API proxying
- Dynamic routes with parameters
- Layout system

### 6. **Nuxt Authentication** - [`Nuxt-Auth/`](Nuxt-Auth/)

Authentication implementation using:

- `useAuth()` composable
- Authentication providers
- Protected routes

### 7. **Recipe Website** - [`Recipe-Website/`](Recipe-Website/)

Full-featured Nuxt application with:

- Multiple pages and layouts
- Data fetching with `useFetch()`
- Navigation with `NuxtLink`
- Dynamic routes

---

_This learning journey demonstrates proficiency in Vue.js fundamentals and practical application development._

### Contents

- [Vue.js Official Documentation](https://vuejs.org/guide/quick-start.html)
- [Vue.js Explained in 100 Seconds](https://youtu.be/nhBVL41-_Cw?si=4eIkd45jzlxgeN4Z)
- [Vue.JS Setup with Tailwind CSS](https://youtu.be/P5d_UUxqOzs?si=KeMc70jda6jCQzhj), [Tailwind CSS Vue Doc](https://tailwindcss.com/docs/installation/using-vite)
- [HuXn WebDev : Master Vue.js Composition API: Build 10 Stunning Projects for Real-world Expertise!](https://www.youtube.com/watch?v=pgWZLS75Nmo), [GitHub Repo](https://github.com/HuXn-WebDev/Vue.js-Complete-Course-With-10-Projects)
- [Simple Expense Tracker App using Vue 3 and Composition API](https://www.youtube.com/watch?v=hNPwdOZ3qFU)

### Resources

- [Dummy Product Json API for basic implementation](https://dummyjson.com/docs/products)

