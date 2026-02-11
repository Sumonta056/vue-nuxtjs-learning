export default defineEventHandler(async (event) => {
  // Cookie is managed on client side, just return success
  return {
    success: true,
    message: "Logout successful",
  };
});

