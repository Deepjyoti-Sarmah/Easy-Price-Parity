"use client"

import { SignInForm } from "@/components/auth/SignInForm"
import { useSearchParams } from "next/navigation"

const SignInPage = () => {
  const searchParams = useSearchParams()
  const intent = searchParams.get("intent")

  return (
    <div className="flex h-screen items-center justify-center">
      <SignInForm intent={intent} />
    </div>
  )
}

export default SignInPage
