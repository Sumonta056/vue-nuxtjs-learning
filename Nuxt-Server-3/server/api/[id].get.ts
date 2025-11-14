export default defineEventHandler((event) => {
  const id = event.context.params?.id;
  return { message: `Hello from Nuxt 3 API! ID: ${id}` };
});
