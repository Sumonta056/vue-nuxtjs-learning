<script setup>
const { data, error } = await useFetch("/api/ditto");
const authCookie = useCookie("pokemon-auth");

async function handleLogout() {
  try {
    await $fetch("/api/logout", {
      method: "POST",
    });
    authCookie.value = null;
    await navigateTo("/login");
  } catch (err) {
    console.error("Logout failed:", err);
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>Welcome to Pokemon App!</h1>
      <button @click="handleLogout" class="logout-button">Logout</button>
    </div>

    <ul v-if="data" class="pokemon-info">
      <img :src="data.sprites" alt="Pokemon sprite" />
      <li>Pokemon ID: {{ data.id }}</li>
      <li>Pokemon Name: {{ data.name }}</li>
    </ul>
    <div v-else class="error">{{ error }}</div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

h1 {
  color: #333;
  margin: 0;
}

.logout-button {
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.logout-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.pokemon-info {
  list-style: none;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.pokemon-info img {
  display: block;
  margin: 0 auto 1rem;
  width: 150px;
  height: 150px;
}

.pokemon-info li {
  padding: 0.5rem 0;
  font-size: 1.1rem;
  color: #555;
}

.error {
  color: #c33;
  padding: 1rem;
  background: #fee;
  border-radius: 6px;
}
</style>

