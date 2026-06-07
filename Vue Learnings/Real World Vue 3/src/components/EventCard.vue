<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  datas: {},
});
</script>

<template>
  <RouterLink :to="{ name: 'event-details', params: { id: datas.id } }">
    <div class="event-card">
      <h2>{{ datas.title }}</h2>
      <span>@{{ datas.time }} on {{ datas.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
