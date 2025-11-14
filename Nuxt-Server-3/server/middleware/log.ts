export default defineEventHandler((event) => {
  console.log(
    `[${new Date().toISOString()}] ${event.req.method} ${event.req.url}`
  );
  console.log('Headers:', event.req.headers);
});


