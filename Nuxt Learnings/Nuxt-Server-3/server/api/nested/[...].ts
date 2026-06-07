const router = createRouter();

router.get(
  "/test",
  defineEventHandler((event) => {
    return { message: "Hello from Nuxt 3 API! test" };
  })
);
// http://localhost:3000/api/nested/test

router.get(
  "/id/:id",
  defineEventHandler((event) => {
    const id = event.context.params?.id;
    return { message: `Hello from Nuxt 3 API! Nested ID: ${id}` };
  })
);

export default useBase("/api/nested", router.handler);

