import { NextResponse, type NextRequest } from "next/server";
import { Session } from "./lib/auth-types";
import axios from "axios";


async function getMiddlewareSession(req: NextRequest) {
  const { data: session } = await axios.get<Session>("/api/auth/get-session", {
    baseURL: req.nextUrl.origin,
    headers: {
      cookie: req.headers.get("cookie") || "",
    }
  })

  return session;
}

export default async function authMiddleware(req: NextRequest) {
  // const { data: session } = await betterFetch<Session>(
  //   "/api/auth/get-session",
  //   {
  //     baseURL: request.nextUrl.origin,
  //     headers: {
  //       //get the cookie from the request
  //       cookie: request.headers.get("cookie") || "",
  //     },
  //   },
  // );

  const session = await getMiddlewareSession(req);

  // if (!session) {
  //   return NextResponse.redirect(new URL("/sign-in", req.url));
  // }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
