<template>
  <p>Query Search : {{ search }}</p>
  <p>Query Page : {{ page }}</p>
  <p>Param : {{ userID }}</p>
  <p>Param Approach - 2 : {{ userID2 }}</p>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const userID = defineProps(['id']);

const search = computed(() => {
  return route.query.search;
});
const page = computed(() => {
  return route.query.page;
});
const userID2 = computed(() => {
  return route.params.id;
});
</script>
