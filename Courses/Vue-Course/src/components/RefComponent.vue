<template>
  <h1>Ref Component : {{ userList }}</h1>
  <button @click="addUser">+++</button>
  <ul>
    <li v-for="(user, index) in userList" :key="index">{{ user }}</li>
  </ul>
  <h2>User Info:</h2>
  <p>{{ userInfo }}</p>
  <p>Name: {{ userInfo.name }}</p>
  <p>Age: {{ userInfo.age }}</p>
  <p>Email: {{ userInfo.email }}</p>
  <p>Location: {{ userInfo.location.city }}, {{ userInfo.location.country }}</p>
  <p>Phone Numbers: {{ userInfo.phoneNumber.join(', ') }}</p>
</template>

<script setup>
import { ref } from 'vue'

let userList = ref(['Alice', 'Bob', 'Charlie'])
const addUser = () => {
  userList.value.push('NewUser')
}

let userInfo = ref({
  name: 'John Doe',
  age: 30,
  email: 'sumontasaha@gmail.com',
  location: {
    city: 'New York',
    country: 'USA',
  },
  phoneNumber: ['123-456-7890', '987-654-3210'],
})
</script>
