export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Username and password are required",
    });
  }

  // Mock authentication - accept any username with password "password"
  if (password === "password") {
    // Generate auth token (username:timestamp)
    const authToken = `${username}:${Date.now()}`;

    return {
      success: true,
      message: "Login successful",
      token: authToken,
      user: {
        username,
      },
    };
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid credentials",
    });
  }
});

