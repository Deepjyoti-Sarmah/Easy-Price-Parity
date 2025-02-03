"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { RiGoogleFill, RiGithubFill, RiLoader3Fill } from "react-icons/ri"
import { useToast } from "@/hooks/use-toast"

interface SignInFormProps {
  intent: string | null
}

export const SignInForm = ({ intent }: SignInFormProps) => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSocialSignIn = async (provider: "google" | "github") => {
    setIsLoading(true)
    await authClient.signIn.social(
      {
        provider,
        callbackURL: intent ? `/dashboard?intent=${intent}` : "/dashboard",
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
      <h1 className="text-2xl font-bold">Sign In</h1>
      <div className="flex flex-col gap-4 w-full">
        <Button onClick={() => handleSocialSignIn("google")} disabled={isLoading}>
          {isLoading ? <RiLoader3Fill className="animate-spin mr-2" /> : <RiGoogleFill className="mr-2" />}
          Sign In with Google
        </Button>
        <Button onClick={() => handleSocialSignIn("github")} disabled={isLoading}>
          {isLoading ? <RiLoader3Fill className="animate-spin mr-2" /> : <RiGithubFill className="mr-2" />}
          Sign In with GitHub
        </Button>
        {/* Optionally, include an email-based form here */}
      </div>
    </div>
  )
}

// ratul borpujari
// silarai path vishu mandir, friday
