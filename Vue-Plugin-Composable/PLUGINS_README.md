# Vue Plugins Example

This project demonstrates how to create and use Vue plugins in a Vue 3 application.

## What are Vue Plugins?

Vue plugins are a way to add global functionality to your Vue application. They allow you to:

- Add global methods or properties
- Add global resources (directives, filters, transitions)
- Add instance methods via `app.config.globalProperties`
- Provide functionality via `app.provide()`

## Plugins Included

### 1. Toast Notification Plugin (`src/plugins/toast.js`)

A global toast notification system that displays temporary messages to users.

**Features:**

- Success, error, warning, and info toast types
- Auto-dismiss after configurable duration
- Customizable position (top-right, top-left)
- Smooth animations

**Usage:**

```javascript
// In Options API
this.$toast.success("Success message");
this.$toast.error("Error message");
this.$toast.warning("Warning message");
this.$toast.info("Info message");

// In Composition API
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const toast = instance.appContext.config.globalProperties.$toast;
toast.success("Success message");
```

### 2. Currency Formatter Plugin (`src/plugins/currency.js`)

A utility plugin for formatting and parsing currency values.

**Features:**

- Format numbers as currency (USD, EUR, GBP, etc.)
- Parse currency strings back to numbers
- Format numbers with thousand separators
- Configurable locale and currency

**Usage:**

```javascript
// In Options API
this.$currency.format(1234.56); // "$1,234.56"
this.$currency.format(1234.56, "EUR"); // "€1,234.56"
this.$currency.parse("$1,234.56"); // 1234.56
this.$currency.formatNumber(1234.56); // "1,234.56"

// In Composition API
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const currency = instance.appContext.config.globalProperties.$currency;
currency.format(1234.56);
```

## Plugin Structure

A Vue plugin is an object with an `install` method:

```javascript
export default {
  install(app, options) {
    // app is the Vue application instance
    // options are optional configuration passed when registering

    // Add global properties
    app.config.globalProperties.$myPlugin = {
      // methods and properties
    };

    // Or provide for dependency injection
    app.provide("myPlugin", {
      // methods and properties
    });
  },
};
```

## Registration

Plugins are registered in `src/main.js`:

```javascript
import plugins from "./plugins";

const app = createApp(App);
app.use(plugins); // Register all plugins
```

Or register individually:

```javascript
import toastPlugin from "./plugins/toast";
import currencyPlugin from "./plugins/currency";

const app = createApp(App);
app.use(toastPlugin, { duration: 3000 });
app.use(currencyPlugin, { currency: "USD" });
```

## Running the Example

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Navigate to the home page to see the plugin demos in action!

## Common Use Cases for Plugins

- **UI Libraries**: Toast notifications, modals, tooltips
- **Utilities**: Formatters, validators, helpers
- **API Clients**: HTTP clients, WebSocket connections
- **State Management**: Global state, caching
- **Analytics**: Tracking, logging
- **Internationalization**: i18n libraries

## Best Practices

1. **Keep plugins focused**: Each plugin should have a single responsibility
2. **Make them configurable**: Accept options to customize behavior
3. **Provide TypeScript types**: If using TypeScript, add type definitions
4. **Document well**: Include usage examples and API documentation
5. **Test thoroughly**: Write tests for plugin functionality
6. **Use provide/inject**: For better Composition API support

