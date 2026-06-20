import { fetchAPI } from "./strapi";

export async function getGlobalData() {
  const data = await fetchAPI(
    "/api/global?pLevel"
  );

  return data.data;
}