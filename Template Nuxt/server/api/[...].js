export default defineEventHandler(async (event) => {
  const url = `https://api.coinlore.net${event.node.req.url}`;
  console.log("Fetching:", url);
  return await $fetch(url);
});

