<!--
* V-if / v-else-if / v-else: Conditionally render elements in the DOM
  - v-if: Renders element if condition is true
  - v-else-if: Renders element if previous v-if or v-else-if is false and its condition is true
  - v-else: Renders element if all previous v-if and v-else-if conditions are false

* V-show: Toggles the visibility of an element using CSS display property
  - v-show: Always renders the element in the DOM but toggles its visibility with CSS (display: none)
-->

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const isLoading = ref(false)
const showWelcomeMessage = ref(true)
const showUserProfile = ref(false)

function login() {
  isLoading.value = true
  setTimeout(() => {
    isLoggedIn.value = true
    isLoading.value = false
    showUserProfile.value = true
  }, 2000)
}

function toggleWelcome() {
  showWelcomeMessage.value = !showWelcomeMessage.value
}

function toggleProfile() {
  showUserProfile.value = !showUserProfile.value
}
</script>

<template>
  <div>
    <h2 v-if="isLoggedIn">Dashboard</h2>
    <p v-else-if="isLoading">Loading...</p>
    <button v-else @click="login">Login</button>

    <!--
    * v-show: Always renders elements but toggles CSS display: none
     -->
    <div v-show="isLoggedIn">
      <div v-show="showWelcomeMessage" class="welcome-banner">
        🎉 Welcome back! You're successfully logged in!
      </div>

      <div v-show="showUserProfile" class="user-profile">
        <h3>User Profile</h3>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
      </div>

      <div v-show="isLoggedIn" class="controls">
        <button @click="toggleWelcome">
          {{ showWelcomeMessage ? 'Hide' : 'Show' }} Welcome Message
        </button>
        <button @click="toggleProfile">{{ showUserProfile ? 'Hide' : 'Show' }} Profile</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-banner {
  background: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
}

.user-profile {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 4px;
  margin: 10px 0;
}

.controls button {
  margin: 5px;
  padding: 8px 16px;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
</style>
