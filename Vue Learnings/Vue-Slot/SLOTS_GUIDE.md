# Vue Slots Tutorial

A comprehensive guide to understanding and using Vue slots in Vue 3.

## What are Slots?

**Slots** are a powerful feature in Vue that allow you to create reusable components with customizable content areas. They enable parent components to inject content into child components.

Think of slots as "placeholders" where parent components can insert their own content.

## Types of Slots

### 1. Default Slot (Unnamed Slot)

The simplest slot type. Content goes between component tags.

**Child Component:**

```vue
<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
```

**Parent Usage:**

```vue
<Card>
  <p>This content goes into the default slot</p>
</Card>
```

### 2. Named Slots

Multiple slots in one component, each with a name.

**Child Component:**

```vue
<template>
  <div class="card">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="body"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
```

**Parent Usage:**

```vue
<Card>
  <template #header>Header Content</template>
  <template #body>Body Content</template>
  <template #footer>Footer Content</template>
</Card>
```

**Shorthand Syntax:**

- `#header` is shorthand for `v-slot:header`
- `v-slot` can be used on any element, but `template` is recommended

### 3. Scoped Slots (Slot Props)

Child component passes data to parent for customization.

**Child Component:**

```vue
<script setup>
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
</script>

<template>
  <div v-for="user in users" :key="user.id">
    <slot :user="user" :index="users.indexOf(user)"></slot>
  </div>
</template>
```

**Parent Usage:**

```vue
<UserList>
  <template #default="{ user, index }">
    <div>{{ index + 1 }}. {{ user.name }}</div>
  </template>
</UserList>
```

**Key Points:**

- Child component exposes data via slot props
- Parent receives data in the slot template
- Parent controls how data is rendered

### 4. Fallback Content

Default content shown when no slot content is provided.

**Child Component:**

```vue
<template>
  <button>
    <slot>Click me!</slot>
  </button>
</template>
```

**Usage:**

```vue
<!-- Shows "Click me!" (fallback) -->
<Button></Button>

<!-- Shows "Save Changes" (custom content) -->
<Button>Save Changes</Button>
```

### 5. Dynamic Slot Names

Slot names can be dynamic.

**Child Component:**

```vue
<script setup>
const activeTab = ref("tab1");
</script>

<template>
  <div>
    <slot :name="activeTab"></slot>
  </div>
</template>
```

**Parent Usage:**

```vue
<Tabs>
  <template #tab1>Tab 1 Content</template>
  <template #tab2>Tab 2 Content</template>
</Tabs>
```

## Slot Syntax Variations

### Shorthand Syntax

```vue
<!-- Named slot shorthand -->
<template #header>Content</template>

<!-- Full syntax -->
<template v-slot:header>Content</template>

<!-- Scoped slot shorthand -->
<template #default="{ user }">Content</template>

<!-- Full syntax -->
<template v-slot:default="{ user }">Content</template>
```

### Multiple Slots on One Element

You can't use multiple `v-slot` directives on one element. Use separate `template` tags:

```vue
<!-- ❌ Wrong -->
<div v-slot:header v-slot:body>Content</div>

<!-- ✅ Correct -->
<template #header>Header</template>
<template #body>Body</template>
```

## Common Use Cases

### 1. Layout Components

```vue
<PageLayout>
  <template #header>Navigation</template>
  <template #sidebar>Menu</template>
  <template #main>Main Content</template>
</PageLayout>
```

### 2. Data Tables

```vue
<DataTable :data="products">
  <template #price="{ value }">
    <span class="currency">${{ value }}</span>
  </template>
  <template #status="{ value }">
    <Badge :type="value">{{ value }}</Badge>
  </template>
</DataTable>
```

### 3. Form Components

```vue
<FormField label="Email">
  <input type="email" v-model="email" />
</FormField>
```

### 4. Modal/Dialog Components

```vue
<Modal>
  <template #header>Confirm Action</template>
  <p>Are you sure?</p>
  <template #footer>
    <button>Cancel</button>
    <button>Confirm</button>
  </template>
</Modal>
```

## Best Practices

1. **Use descriptive slot names**: `#header` instead of `#h`
2. **Provide fallback content**: Better UX when content is missing
3. **Document slot props**: Let users know what data is available
4. **Use `template` tags**: More semantic than divs for slots
5. **Keep slots focused**: Don't create overly complex slot structures

## Slot Props vs Regular Props

| Feature         | Slot Props             | Regular Props        |
| --------------- | ---------------------- | -------------------- |
| **Use Case**    | Custom rendering       | Data passing         |
| **Flexibility** | High (parent controls) | Low (child controls) |
| **Complexity**  | More complex           | Simpler              |
| **When to Use** | Lists, tables, layouts | Simple data display  |

## Common Patterns

### Pattern 1: Renderless Component

```vue
<!-- Child: No UI, just logic -->
<script setup>
const items = ref([...]);
</script>
<template>
  <slot :items="items" :filter="filter"></slot>
</template>

<!-- Parent: Controls all rendering -->
<DataProvider>
  <template #default="{ items }">
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </template>
</DataProvider>
```

### Pattern 2: Compound Components

```vue
<!-- Parent using multiple components -->
<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Actions</CardFooter>
</Card>
```

### Pattern 3: Conditional Slot Content

```vue
<template>
  <div>
    <slot name="header" v-if="showHeader"></slot>
    <slot></slot>
  </div>
</template>
```

## Tips & Tricks

1. **Default slot can be implicit**: `#default` is optional
2. **Slot props destructuring**: You can destructure in the template
3. **Multiple scoped slots**: Each slot can have different props
4. **Slot forwarding**: Use `v-bind="$attrs"` to forward slots

## Examples in This Project

This project includes working examples of:

- ✅ Default slots
- ✅ Named slots
- ✅ Scoped slots
- ✅ Fallback content
- ✅ Multiple slots
- ✅ Dynamic slot names
- ✅ Real-world data table example

Run `npm run dev` to see all examples in action!

## Further Reading

- [Vue 3 Official Slots Documentation](https://vuejs.org/guide/components/slots.html)
- [Scoped Slots Deep Dive](https://vuejs.org/guide/components/slots.html#scoped-slots)

