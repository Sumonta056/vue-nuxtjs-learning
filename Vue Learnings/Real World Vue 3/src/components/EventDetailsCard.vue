<script setup>
import EventService from "@/service/EventService";
import { defineProps, onMounted, ref } from "vue";

const props = defineProps({
  id: {
    required: true,
  },
});

const event = ref();

onMounted(() => {
  EventService.getEventById(props.id)
    .then((response) => (event.value = response.data))
    .catch((error) => console.log(error));
});
</script>

<template>
  {{ event }}
</template>
