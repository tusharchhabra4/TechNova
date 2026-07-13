// "use server";

// import { cookies } from "next/headers";

// const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

// export async function getProfile() {
//   const cookieStore = await cookies();

//   const jwt = cookieStore.get("jwt")?.value;

//   if (!jwt) {
//     return null;
//   }

//   const response = await fetch(
//     `${STRAPI_URL}/api/users/me`,
//     {
//       headers: {
//         Authorization: `Bearer ${jwt}`,
//       },
//       cache: "no-store",
//     }
//   );

//   if (!response.ok) {
//     return null;
//   }

//   return await response.json();
// }