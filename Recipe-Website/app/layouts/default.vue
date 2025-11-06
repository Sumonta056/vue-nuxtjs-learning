<template>
  <NavigationBar :navItems="navItems" />
  <div>
    <slot />
  </div>
</template>

<script setup>
const navItems = [
  "Home",
  "Profile",
  "Logout",
  "Recipes",
  "Ingredients",
  "Shopping List",
  "Settings",
];
</script>

