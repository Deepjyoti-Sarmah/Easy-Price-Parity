import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import ProductBadge from "@/components/product-badge"
import { ShinyButton } from "@/components/shinny-button"
import { Check } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <section className="relative py-24 sm:py-32 bg-bun-background overflow-hidden">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 items-start w-full">
          {/* Left column */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left sm:text-center">
            {/* Product Badge */}
            {/* <ProductBadge /> */}

            {/* Heading */}
            <Heading className="text-bun-mute-white lg:text-6xl">
              <span>Price globally with</span>
              <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
                <span>confidence,</span>
                <span className="rounded bg-bun-mute-background text-bunPurple-400/90 px-2">not chance</span>
              </div>
            </Heading>


            <p className="mt-10 text-base/7 max-w-prose text-pretty text-zinc-400">
              Automatically adjust your SaaS prices based on each country's purchasing power. Stop losing international customers to one-size-fits-all pricing.
            </p>

            <ul className="mt-8 space-y-3 text-base/7 text-zinc-400 text-left inline-flex flex-col">
              {[
                "Instant price optimization for 180+ countries",
                "One-click integration with Stripe and other payment gateways",
                "Real-time analytics on regional conversion rates",
              ].map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <Check className="size-5 shrink-0 text-bunPurple-400/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center lg:items-start gap-4">
              <ShinyButton
                href="/sign-up"
                className="relative z-10 h-14 text-base w-2/3 shadow-lg transition-shadow duration-300 hover:shadow-xl font-semibold px-12"
              >
                Start Free Trial
              </ShinyButton>
              {/* fomo section */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-500 font-medium">$100 off</span>
                <span className="text-zinc-500">for the first 6260 customers (7 left)</span>
              </div>

              {/*short customer-review */}
              {/* <div className="mt-8 flex items-center gap-3"> */}
              {/*   <div className="flex -space-x-2"> */}
              {/*     {[...Array(5)].map((_, i) => ( */}
              {/*       <div key={i} className="ring-2 ring-bun-background"> */}
              {/*         <Image */}
              {/*           src={`/placeholder.svg?height=32&width=32`} */}
              {/*           alt={`User ${i + 1}`} */}
              {/*           width={32} */}
              {/*           height={32} */}
              {/*           className="h-8 w-8 rounded-full object-cover" */}
              {/*         /> */}
              {/*       </div> */}
              {/*     ))} */}
              {/*   </div> */}
              {/*   <div className="flex items-center gap-1.5 text-sm"> */}
              {/*     <span className="font-semibold text-zinc-200">6253</span> */}
              {/*     <span className="text-zinc-400">makers ship faster</span> */}
              {/*   </div> */}
              {/* </div> */}

            </div>
          </div>

          {/* Right column: Tech Stack */}
          <div className="relative lg:mt-8">
            <div className="relative aspect-square">
              {/* Circular border */}
              <div className="absolute inset-0 rounded-full border border-zinc-800 opacity-20" />

              {/* Tech stack grid */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8">
                  {["Next.js", "Tailwind", "MongoDB", "Stripe", "NextAuth", "Mailgun"].map((tech) => (
                    <div
                      key={tech}
                      className="flex h-20 w-20 items-center justify-center rounded-lg bg-zinc-900/50 p-4"
                    >
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt={tech}
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom text */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-zinc-500">
                + all the boring stuff (SEO tags, API calls, customer support)
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper >
    </section >
  )
}


