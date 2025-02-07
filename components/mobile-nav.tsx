"use client"

import { useState } from "react"
import { Button, buttonVariants } from "./ui/button"
import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { signOut } from "@/lib/auth"

interface MobileNavProps {
  user?: object
}

export const MobileNav = ({ user }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const NavContent = () => {
    return (
      <div className="flex flex-col space-y-4 px-2 m-2 text-zinc-300">
        {user ? (
          <>
            {/* <form
              action={async () => {
                // "use server"
                await signOut({
                  redirectTo: "/"
                })
              }}
            > */}
            <Link
              href="/sign-out"
              onClick={() => setIsOpen(false)}
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
                className: "hover:bg-bun-mute-background/60 hover:text-bun-mute-white"
              })}
            >
              Sign out
            </Link>
            {/* </form> */}

            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className={buttonVariants({
                size: "lg",
                className: "flex items-center gap-1.5"
              })}
            >
              Dashboard <ArrowRight className="ml-2 size-5" />
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
                className: "hover:bg-bun-mute-background/60 hover:text-bun-mute-white"
              })}
            >
              Pricing
            </Link>
            <Link
              href="/sign-in"
              onClick={() => setIsOpen(false)}
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
                className: "hover:bg-bun-mute-background/60 hover:text-bun-mute-white"
              })}
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              onClick={() => setIsOpen(false)}
              className={buttonVariants({
                size: "lg",
                className: "flex items-center gap-1.5",
              })}
            >
              Sign up <ArrowRight className="ml-2 size-5" />
            </Link>
          </>
        )}
      </div>
    )
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-bun-mute-background/60"
        >
          <Menu className="size-8 text-zinc-300" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="w-full bg-bun-background border-gray-800 p-0 text-zinc-300"
      >
        <MaxWidthWrapper>
          <div className="flex flex-col h-full py-6">
            <div className="px-4 mb-6 flex justify-between items-center text-lg">
              <Link
                href="/"
                className="flex z-40 font-semibold text-zinc-300"
                onClick={() => setIsOpen(false)}
              >
                Parity<span className="text-bunPurple-300/90">Cart</span>
              </Link>
            </div>
            <NavContent />
          </div>
        </MaxWidthWrapper>
      </SheetContent>
    </Sheet>
  )
}

