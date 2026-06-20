import { fetchAPI } from "./strapi";
export async function getService(slug) {
  const response = await fetchAPI(
    "/api/services?pLevel"
  );

  return response.data.find(
    (service) =>
      service.slug === slug
  );
}