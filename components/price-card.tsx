import { Feather } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card"
import { cn } from "@/lib/utils"

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

  return (
    <Card
      className={cn(
        "relative shadow-none rounded-3xl overflow-hidden",
        isMostPopular ? "border-accent border-2" : "border-none"
      )}
    >
      {isMostPopular && (
        <div className="bg-accent text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
          Most popular
        </div>
      )}
      <CardContent>
        <div className="text-accent font-semibold mb-8">{name}</div>
        <CardTitle>
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {/* {formatCompactNumber(maxNumberOfVisits)}  */}
          pricing page visits/mo
        </CardDescription>
      </CardContent>
      <CardContent>
        {/* <SignUpButton> */}
        <Button
          className="text-lg w-full rounded-lg"
        // variant={isMostPopular ? "accent" : "default"}
        >
          Get Started
        </Button>
        {/* </SignUpButton> */}
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Feather className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feather>
        <Feather>PPP discounts</Feather>
        {canAccessAnalytics && <Feather>Advanced analytics</Feather>}
        {canRemoveBranding && <Feather>Remove Easy PPP branding</Feather>}
        {canCustomizeBanner && <Feather>Banner customization</Feather>}
      </CardFooter>
    </Card>
  )
}

