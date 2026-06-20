const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1337";

export async function fetchAPI(path) {
  const response = await fetch(
    `${API_URL}${path}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch data"
    );
  }

  return response.json();
}