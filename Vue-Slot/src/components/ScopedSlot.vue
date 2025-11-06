<!--
  SCOPED SLOTS Example
  
  Scoped slots allow the child component to pass data to the parent.
  The parent can customize how data is rendered.
  
  Usage:
  <UserList :users="users">
    <template #default="{ user }">
      <div>{{ user.name }}</div>
    </template>
  </UserList>
-->
<script setup>
import { ref } from "vue";

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="border-2 border-purple-500 rounded-lg p-4 bg-purple-50">
    <h3 class="text-lg font-semibold text-purple-800 mb-4">
      Scoped Slot Example
    </h3>
    <div class="space-y-2">
      <!-- 
        Scoped slot - passes user data to parent
        Parent can customize how each user is displayed
      -->
      <slot
        v-for="user in users"
        :key="user.id"
        :user="user"
        :index="users.indexOf(user)"
      ></slot>
    </div>
  </div>
</template>

<style scoped></style>






