"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { RiGoogleFill, RiGithubFill, RiLoader3Fill } from "react-icons/ri"
import { useToast } from "@/hooks/use-toast"

export const SignUpForm = () => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSocialSignUp = async (provider: "google" | "github") => {
    setIsLoading(true)
    await authClient.signUp.social(
      {
        provider,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () =>
          toast({ title: "Success", description: `Redirecting via ${provider}` }),
        onError: (error) =>
          toast({ title: "Error", description: error.error.message }),
        onResponse: () => setIsLoading(false),
      }
    )
  }

  return (
    <div className="flex flex-col items-center space-y-6 p-6 border rounded shadow-lg bg-white">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <div className="flex flex-col gap-4 w-full">
        <Button onClick={() => handleSocialSignUp("google")} disabled={isLoading}>
          {isLoading ? <RiLoader3Fill className="animate-spin mr-2" /> : <RiGoogleFill className="mr-2" />}
          Sign Up with Google
        </Button>
        <Button onClick={() => handleSocialSignUp("github")} disabled={isLoading}>
          {isLoading ? <RiLoader3Fill className="animate-spin mr-2" /> : <RiGithubFill className="mr-2" />}
          Sign Up with GitHub
        </Button>
        {/* Optionally, add an email sign‑up form here */}
      </div>
    </div>
  )
}
