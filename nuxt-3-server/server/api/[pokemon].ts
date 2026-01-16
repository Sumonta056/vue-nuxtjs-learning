export default defineEventHandler(async (event) => {
  const { pokemon } = event.context.params || {};

  if (!pokemon) {
    throw createError({
      statusCode: 400,
      statusMessage: "Pokemon parameter is missing",
    });
  }

  try {
    const response: any = await $fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const data = {
      id: response.id,
      name: response.name,
      sprites: response.sprites.front_default,
    };

    return data;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: `Pokemon "${pokemon}" not found`,
    });
  }
});

