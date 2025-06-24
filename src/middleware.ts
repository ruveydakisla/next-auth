// src/middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const session = req.nextauth.token;
    if (!session) {
      return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/auth/sign-in",
    },
  }
);

export const config = { matcher: ["/dashboard/:path*"] };
