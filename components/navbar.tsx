import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { MobileNav } from "./mobile-nav"
import { auth } from "@/lib/auth"
import { handleSignOut } from "@/actions/auth.action"

export const Navbar = async () => {

  const session = await auth();
  const user = session?.user;

  return (
    <nav className="sticky z-50 h-16 inset-x-0 top-0 w-full border-b border-gray-800 bg-bun-background/50 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold text-zinc-300">
            Parity<span className="text-bunPurple-300/90">Cart</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex h-full items-center space-x-4 text-zinc-300">
            {user ? (
              <>
                <form
                  action={handleSignOut}
                >
                  <Button size="sm" variant="ghost" className="hover:bg-bun-mute-background/60 hover:text-bun-mute-white"
                  >
                    Sign out
                  </Button>
                </form>

                <div className="h-8 w-px bg-gray-700" />

                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1",
                  })}
                >
                  Dashboard <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "hover:bg-bun-mute-background/60 hover:text-bun-mute-white"
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "hover:bg-bun-mute-background/60 hover:text-bun-mute-white"
                  })}
                >
                  Sign in
                </Link>

                <div className="h-8 w-px bg-gray-700" />

                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1.5",
                  })}
                >
                  Sign up <ArrowRight className="size-4" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile navigation */}
          <div className="md:hidden">
            <MobileNav user={user} key={user ? "user" : "no-user"} />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav >
  )
}
