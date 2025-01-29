"use server";

import { auth } from "@/lib/better-auth/auth"
import { headers } from "next/headers"

export const getAuthServerSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  return session
};
