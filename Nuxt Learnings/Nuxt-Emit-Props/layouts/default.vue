<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/props-example">Props Example</NuxtLink> |
      <NuxtLink to="/emits-example">Emits Example</NuxtLink> |
      <NuxtLink to="/event-bus-example">Event Bus Example</NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

