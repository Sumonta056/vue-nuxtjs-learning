<template>
  <NavigationBar :navItems="navItems" />
  <div>
    <slot />
  </div>
</template>

<script setup>
const navItems = ["Home", "Profile", "Login"];
</script>

