<script setup>
const username = ref("");

const {
  data: userInfo,
  pending: loading,
  execute,
} = useFetch(() => `/api/profile?username=${username.value}`, {
  immediate: false, // Setting immediate: false prevents this automatic execution, giving you manual control over when the API call happens.
  watch: false, // By default, useFetch watches its dependencies (like username.value) and automatically refetches when they change. Setting watch: false disables this reactive behavior.
});

const submitForm = async (e) => {
  e.preventDefault();
  if (username.value.trim() !== "") {
    await execute();
  } else {
    alert("Please enter a username.");
  }
};
</script>

<template>
  <div>
    <h1>Get Info</h1>

    <form @submit="submitForm">
      <input v-model="username" type="text" placeholder="Enter Username" />
      <button type="submit">Submit</button>
    </form>

    <h2 v-if="loading">Loading</h2>
    <div v-if="userInfo">
      <p><strong>Name:</strong> {{ userInfo.name }}</p>
      <p><strong>Bio:</strong> {{ userInfo.bio }}</p>
      <p><strong>Location:</strong> {{ userInfo.location }}</p>
      <p><strong>Public Repos:</strong> {{ userInfo.public_repos }}</p>
    </div>
  </div>
</template>

