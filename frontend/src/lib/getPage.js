import { fetchAPI } from "./strapi";

export async function getPage(slug) {
  const response = await fetchAPI(
    "/api/pages?pLevel"
  );

  return response.data.find(
    (page) => page.slug === slug
  );
}