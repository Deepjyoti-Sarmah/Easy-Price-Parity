import { LoginForm } from "../_components/login-form"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-bun-background p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="text-center font-semibold text-zinc-300">
          Parity<span className="text-bunPurple-300/90">Cart</span>
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
