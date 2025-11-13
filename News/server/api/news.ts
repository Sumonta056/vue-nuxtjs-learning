export default defineEventHandler(async (event) => {
  const apiKey = "375985dda7764ebf962bf5d779d64b55";

  try {
    const response = await $fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2025-10-12&sortBy=publishedAt&apiKey=${apiKey}`
    );
    return response;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch news data.",
    });
  }
});
