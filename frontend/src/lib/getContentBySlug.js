import { fetchAPI } from "./strapi";

export async function getContentBySlug(slug) {
  const response = await fetchAPI(
    `/api/page-by-slug/${slug}?pLevel`
  );

  if (!response) {
    return null;
  }

  return response;
}