import { cookies } from "next/headers";

export async function getJWT() {
  const cookieStore = await cookies();

  return cookieStore.get("jwt")?.value || null;
}