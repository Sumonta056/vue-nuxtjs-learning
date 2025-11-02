<template>
  <div class="currency-layout">
    <header class="currency-header">
      <NuxtLink to="/" class="back-link">← Back to List</NuxtLink>
      <h1>Currency Details</h1>
    </header>
    <main class="currency-main">
      <slot />
    </main>
    <footer class="currency-footer">
      <p>Data provided by CoinLore API</p>
    </footer>
  </div>
</template>

<style scoped>
.currency-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.currency-header {
  background-color: #1a1a1a;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.back-link {
  color: #4fc3f7;
  text-decoration: none;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline;
}

.currency-header h1 {
  margin: 0;
  font-size: 1.5rem;
}

.currency-main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.currency-footer {
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ddd;
}
</style>

