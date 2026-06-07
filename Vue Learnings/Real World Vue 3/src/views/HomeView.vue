<script setup>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/service/EventService";
import { onMounted, ref } from "vue";

const events = ref([]);

onMounted(() => {
  EventService.getEvent()
    .then((response) => (events.value = response.data))
    .catch((error) => console.log(error));
});

// const addSampleEvent = () => {
//   const sampleEvent = {
//     title: "Sample Event",
//     date: "2025-01-01",
//     time: "10:00",
//     location: "Conference Room",
//     description: "This is a sample event",
//   };

//   EventService.createEvent(sampleEvent)
//     .then((response) => {
//       events.value.push(response.data);
//       console.log("Event created successfully!");
//     })
//     .catch((error) => console.log(error));
// };
</script>

<template>
  <EventCard v-for="data in events" :datas="data" :key="data.id" />
</template>

<style scoped></style>
