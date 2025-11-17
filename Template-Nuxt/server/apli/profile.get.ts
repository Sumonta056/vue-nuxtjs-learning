export default defineEventHandler(async (event) => {
  const { username } = getQuery(event);

  const apiResponse = await $fetch(
    "https://api.github.com/users/" + `${username}`
  );

  return apiResponse;
});

