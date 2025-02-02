import { CheckIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import type { subscriptionTiersInOrder } from "@/lib/subscriptionTiersInOrder"

export default function PricingCard({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard"

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", { notation: "compact" }).format(num)
  }

  return (
    <Card
      className={cn(
        "relative shadow-md rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-bun-mute-background/30 bg-bun-accent-purple/45 hover:bg-bun-accent-purple/50",
        isMostPopular ? "border-bunPurple-600/80 border-2 scale-105" : "border-white/10",
      )}
    >
      {isMostPopular && (
        <div className="bg-bunPurple-500/90 text-bun-mute-white absolute py-1 px-8 -right-10 top-6 text-sm rotate-45 font-medium">
          Most popular
        </div>
      )}
      <CardContent className="pt-8 pb-4">
        <div className="text-bunPurple-400/90 font-semibold mb-4">{name}</div>
        <CardTitle className="text-4xl font-bold mb-2 text-bun-mute-white">
          ${priceInCents / 100}
          <span className="text-lg font-normal text-zinc-400">/mo</span>
        </CardTitle>
        <CardDescription className="text-zinc-400">
          {formatNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardContent>
      <CardContent>
        <Button
          className="text-lg w-full rounded-lg py-6 font-semibold transition-all duration-300 text-bun-mute-white bg-bunPurple-400/70 hover:bg-bunPurple-400/90 hover:text-zinc-100"
          variant={isMostPopular ? "default" : "outline"}
        >
          Get Started
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start pt-6">
        <Feature className="font-bold">
          {maxNumberOfProducts} {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feature>
        <Feature>PPP discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canRemoveBranding && <Feature>Remove Easy PPP branding</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
      </CardFooter>
    </Card>
  )
}

function Feature({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-2 text-zinc-300", className)}>
      <CheckIcon className="size-4 stroke-bunPurple-400/90 bg-bunPurple-400/20 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  )
}

