"use server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function registerUser(data) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.error?.message || "Registration failed.",
      };
    }

    return {
      success: true,
      message: "Registration successful.",
      redirectTo: "/login",
      user: result.user,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}
