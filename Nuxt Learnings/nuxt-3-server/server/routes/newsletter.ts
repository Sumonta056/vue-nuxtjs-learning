export default defineEventHandler((event) => {
  return sendRedirect(event, "https://www.google.com");
});
