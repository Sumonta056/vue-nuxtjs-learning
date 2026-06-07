export default defineEventHandler((event) => {
  const authCookie = getCookie(event, "pokemon-auth");
  const url = getRequestURL(event);
  const publicRoutes = ["/login", "/api/login"];

  const isPublicRoute = publicRoutes.some((route) =>
    url.pathname.startsWith(route),
  );

  if (isPublicRoute) {
    return;
  }

  if (!authCookie) {
    console.log("No auth cookie found, redirecting to login");
    return sendRedirect(event, "/login");
  }

  try {
    const [username, timestamp] = authCookie.split(":");

    if (!username || !timestamp) {
      console.log("Invalid auth token format");
      return sendRedirect(event, "/login");
    }

    const tokenAge = Date.now() - parseInt(timestamp);
    const maxAge = 7 * 24 * 60 * 60 * 1000;

    if (tokenAge > maxAge) {
      console.log("Auth token expired");
      return sendRedirect(event, "/login");
    }

    // Token is valid, attach user info to event context
    event.context.user = { username };
  } catch (error) {
    console.log("Error validating auth token:", error);
    return sendRedirect(event, "/login");
  }
});

