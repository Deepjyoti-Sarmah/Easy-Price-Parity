import Link from "next/link"
import { AuthForm } from "../_components/auth-form"

export default function SignInPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-bun-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-sm">
        <Link href="/" className="mb-8 block text-center text-2xl font-semibold text-zinc-300">
          Parity<span className="text-bunPurple-300/90">Cart</span>
        </Link>
        <AuthForm mode="sign-in" />
      </div>
    </div>
  )
}

