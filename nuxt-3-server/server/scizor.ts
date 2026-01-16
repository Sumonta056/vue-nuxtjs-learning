export default defineEventHandler(async () => {
  const response: any = await $fetch(
    "https://pokeapi.co/api/v2/pokemon/scizor"
  );

  const data = {
    id: response.id,
    name: response.name,
    sprites: response.sprites,
  };

  return data;
});

