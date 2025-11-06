# Plugins vs Composables in Vue 3

This document explains the key differences between Vue **Plugins** and **Composables**, and when to use each approach.

## Quick Comparison

| Feature          | **Plugins**                                  | **Composables**                     |
| ---------------- | -------------------------------------------- | ----------------------------------- |
| **Registration** | Global (once in `main.js`)                   | Per component (import where needed) |
| **Scope**        | Available app-wide                           | Component-level                     |
| **Access**       | `this.$pluginName` or `getCurrentInstance()` | Direct import and call              |
| **Use Case**     | Global utilities, third-party libraries      | Reusable component logic            |
| **State**        | Shared across entire app                     | Can be shared or isolated           |
| **Tree-shaking** | Harder (everything loaded)                   | Better (only import what you use)   |
| **TypeScript**   | Requires type augmentation                   | Native support                      |

## Plugins

### What are Plugins?

Plugins are registered **globally** at the application level using `app.use()`. They're available throughout your entire Vue application.

### Characteristics:

- ✅ **Global registration** - Registered once in `main.js`
- ✅ **App-wide availability** - Accessible from any component
- ✅ **Great for third-party libraries** - Vue Router, Vuex, etc.
- ✅ **Can add global properties** - `app.config.globalProperties`
- ✅ **Can provide/inject** - For dependency injection

### Example: Plugin

```javascript
// src/plugins/toast.js
export default {
  install(app, options) {
    app.config.globalProperties.$toast = {
      success: (msg) => console.log("Success:", msg),
      error: (msg) => console.log("Error:", msg),
    };
  },
};

// src/main.js
import toastPlugin from "./plugins/toast";
app.use(toastPlugin);

// In any component (Options API)
this.$toast.success("Hello!");

// In Composition API
const instance = getCurrentInstance();
instance.appContext.config.globalProperties.$toast.success("Hello!");
```

### When to Use Plugins:

1. **Third-party libraries** - Vue Router, Vuex/Pinia, UI libraries
2. **Global utilities** - Logging, analytics, error tracking
3. **App-wide functionality** - Authentication, API clients
4. **When you need it everywhere** - Toast notifications, modals

## Composables

### What are Composables?

Composables are **functions** that encapsulate reusable logic using the Composition API. They're imported and used in individual components.

### Characteristics:

- ✅ **Per-component import** - Import where you need it
- ✅ **Composition API pattern** - Uses `ref`, `reactive`, `computed`, etc.
- ✅ **Better tree-shaking** - Only bundle what you use
- ✅ **More flexible** - Can accept parameters, return reactive state
- ✅ **Easier testing** - Test functions directly
- ✅ **TypeScript friendly** - Native type inference

### Example: Composable

```javascript
// src/composables/useToast.js
import { ref } from "vue";

export function useToast() {
  const showToast = (message, type) => {
    // Implementation
  };

  return {
    success: (msg) => showToast(msg, "success"),
    error: (msg) => showToast(msg, "error"),
  };
}

// In a component
<script setup>
  import {useToast} from '@/composables/useToast'; const toast = useToast();
  toast.success('Hello!');
</script>;
```

### When to Use Composables:

1. **Reusable component logic** - Form validation, API calls, state management
2. **When you don't need it everywhere** - Only import where needed
3. **Component-specific features** - Local state, computed properties
4. **Better code organization** - Group related logic together
5. **When you want flexibility** - Pass options, return reactive state

## Side-by-Side Example

### Plugin Approach

```javascript
// Plugin - registered globally
// src/plugins/currency.js
export default {
  install(app) {
    app.config.globalProperties.$currency = {
      format: (amount) => `$${amount.toFixed(2)}`,
    };
  },
};

// Usage in component
<script setup>
  const instance = getCurrentInstance(); const currency =
  instance.appContext.config.globalProperties.$currency; const formatted =
  currency.format(1234.56);
</script>;
```

### Composable Approach

```javascript
// Composable - imported per component
// src/composables/useCurrency.js
export function useCurrency() {
  const format = (amount) => `$${amount.toFixed(2)}`;
  return { format };
}

// Usage in component
<script setup>
  import {useCurrency} from '@/composables/useCurrency'; const {format} =
  useCurrency(); const formatted = format(1234.56);
</script>;
```

## Key Differences Explained

### 1. **Registration**

**Plugin:**

```javascript
// Once in main.js
app.use(myPlugin);
```

**Composable:**

```javascript
// In each component that needs it
import { useMyComposable } from "@/composables/useMyComposable";
```

### 2. **Access Pattern**

**Plugin:**

- Options API: `this.$pluginName`
- Composition API: `getCurrentInstance().appContext.config.globalProperties.$pluginName`

**Composable:**

- Direct: `const myComposable = useMyComposable()`

### 3. **State Management**

**Plugin:**

- Shared state across entire app
- One instance for all components

**Composable:**

- Can create isolated instances per component
- Or share state using module-level variables

### 4. **Flexibility**

**Plugin:**

- Configured once at app level
- Same configuration everywhere

**Composable:**

- Can accept different options per component
- More flexible and customizable

## When to Choose What?

### Choose **Plugin** when:

- ✅ You need the functionality in **most or all** components
- ✅ It's a **third-party library** (Vue Router, Vuex)
- ✅ You want **global configuration** (API base URL, theme)
- ✅ It's **app-level infrastructure** (logging, analytics)

### Choose **Composable** when:

- ✅ You need the functionality in **some components** only
- ✅ You want **better tree-shaking** and smaller bundles
- ✅ You need **flexible configuration** per component
- ✅ You're building **reusable component logic**
- ✅ You prefer **Composition API patterns**

## Best Practices

### For Plugins:

1. Keep them focused and lightweight
2. Accept configuration options
3. Use `provide/inject` for Composition API support
4. Document global properties added

### For Composables:

1. Start with `use` prefix (convention)
2. Return an object with methods/properties
3. Can use other composables inside
4. Keep them focused on a single concern
5. Make them reactive when needed

## Real-World Examples

### Plugin Examples:

- `vue-router` - Global routing
- `pinia` - State management
- `vue-i18n` - Internationalization
- Custom toast/notification systems
- Global API clients

### Composable Examples:

- `useAuth()` - Authentication logic
- `useApi()` - API calls
- `useForm()` - Form validation
- `useLocalStorage()` - Local storage wrapper
- `useDebounce()` - Debounce functionality

## Summary

- **Plugins** = Global, app-wide functionality (like installing a library)
- **Composables** = Reusable component logic (like helper functions)

Both have their place! Use plugins for global infrastructure and composables for component-level logic reuse.

