<script setup>
// Specify which layout to use
definePageMeta({
  layout: "currency",
});

const route = useRoute();
const { data: coin } = await useFetch("/api/ticker?id=" + route.params.id);
console.log("Coin data:", coin.value);
</script>

<template>
  <div>
    <!-- Remove the back link sinc e it's now in the layout -->

    <div v-if="!coin || !coin[0]">
      <p>Loading...</p>
    </div>

    <div v-else>
      <h2>{{ coin[0].name }} Detail page</h2>
      <table border="1 px solid">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Rank</th>
            <th>Price - US $</th>
            <th>Market Cap - US $</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ coin[0].symbol }}</td>
            <td>{{ coin[0].rank }}</td>
            <td>{{ coin[0].price_usd }}</td>
            <td>{{ coin[0].market_cap_usd }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th,
td {
  padding: 0.5rem;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}
</style>

