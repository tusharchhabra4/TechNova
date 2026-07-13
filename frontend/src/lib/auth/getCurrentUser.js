import { getJWT } from "./getJWT";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getCurrentUser() {
  const jwt = await getJWT();

  if (!jwt) {
    return null;
  }

  try {
    const response = await fetch(
      `${STRAPI_URL}/api/users/me`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}