import { NextResponse } from "next/server";

export function middleware(request) {
  const jwt = request.cookies.get("jwt")?.value;

  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/profile"];
  const authRoutes = ["/login", "/register", "/forgot-password"];

  if (
    protectedRoutes.some((route) => pathname.startsWith(route)) &&
    !jwt
  ) {
    console.log("➡ Redirect to LOGIN");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    authRoutes.some((route) => pathname.startsWith(route)) &&
    jwt
  ) {
    console.log("➡ Redirect to PROFILE");
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  console.log("➡ Continue");

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/login",
    "/register",
    "/forgot-password",
  ],
};