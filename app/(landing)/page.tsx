import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { ShinyButton } from "@/components/shinny-button"
import { Check, Section } from "lucide-react"
import { BrowserPreview } from "@/components/browser-preview"
import Image from "next/image"

export default function Home() {
  return (
    <section className="relative sm:py-24 lg:py-30 bg-bun-background overflow-hidden">
      <MaxWidthWrapper className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-12 items-start w-full">
          {/* Left column */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Heading */}
            <Heading className="text-bun-mute-white lg:text-6xl">
              <span>Price globally with</span>
              <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                <span>confidence,</span>
                <span className="rounded bg-bun-mute-background/60 text-bunPurple-400/90 px-2">not chance</span>
              </div>
            </Heading>

            <p className="mt-8 text-base sm:text-lg text-pretty text-zinc-400">
              Automatically adjust your SaaS prices based on each country's purchasing power. Stop losing international
              customers to one-size-fits-all pricing.
            </p>

            <ul className="mt-6 space-y-2 text-base sm:text-lg text-zinc-400 text-left inline-flex flex-col">
              {[
                "Instant price optimization for 180+ countries",
                "One-click integration with Stripe and other payment gateways",
                "Real-time analytics on regional conversion rates",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-center">
                  <Check className="size-5 shrink-0 text-bunPurple-400/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center lg:items-start gap-4">
              <ShinyButton
                href="/sign-up"
                className="relative z-10 h-14 text-base w-full sm:w-2/3 shadow-lg transition-shadow duration-300 hover:shadow-xl font-semibold px-12"
              >
                Start Free Trial
              </ShinyButton>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <span className="text-green-500/80 font-medium">$100 off</span>
                <span className="text-zinc-500">for the first 6260 customers (7 left)</span>
              </div>
            </div>
          </div>

          {/* Right column: Browser Preview */}
          <div className="relative lg:mt-6 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-5/6">
            <BrowserPreview />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>

    // More info Section


  )
}

