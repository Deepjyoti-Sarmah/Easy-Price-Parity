import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { ShinyButton } from "@/components/shinny-button"
import { Check } from "lucide-react"
import { BrowserPreview } from "@/components/browser-preview"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <section className="relative sm:py-30 py-24 bg-bun-background overflow-hidden">
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

              <div className="mt-8 flex flex-col items-center lg:items-start gap-4">
                <ShinyButton
                  href="/sign-up"
                  className="relative z-10 h-14 text-base w-2/3 shadow-lg transition-shadow duration-300 hover:shadow-xl font-semibold px-12"
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

      {/* More info Section */}
      <section id="features" className="relative py-24 sm:py-30">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-bun-mute-white">
              Intuitive Monitoring
            </h2>
            <Heading>Stay ahead with real-time insights</Heading>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* first bento grid element */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg lg:rounded-l-[2rem] bg-bun-mute-white/85" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Real-time notifications
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Get notified about critical events the moment they happen,
                    no matter if you're at home or on the go.
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src="/phone-screen.png"
                      alt="Phone screen displaying app interface"
                      fill
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />
            </div>

            {/* second bento grid element */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem] bg-bun-mute-white/85" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Track Any Event
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    From new user signups to successful payments, PingPanda notifies you for all critical events in your SaaS.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/bento-any-event.png"
                    alt="Bento box illistrating event tracking"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />
            </div>

            {/* third bento grid element */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-bun-mute-white/85" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Track Any Properties
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Add any custom data you like to an event, such as a user
                    email, a purchase amount or an exceeded quota.
                  </p>
                </div>

                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/bento-custom-data.png"
                    alt="Bento box illustrating custom data tracking"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
            </div>

            {/* fourth bento grid element */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] bg-bun-mute-white/85" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Easy Integration
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Connect PingPanda with your existing workflows in minutes
                    and call our intuitive logging API from any language.
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          pingpanda.js
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="max-h-[30rem]">
                        {/* <SyntaxHighlighter */}
                        {/*   language="typescript" */}
                        {/*   style={{ */}
                        {/*     ...oneDark, */}
                        {/*     'pre[class*="language-"]': { */}
                        {/*       ...oneDark['pre[class*="language-"]'], */}
                        {/*       background: "transparent", */}
                        {/*       overflow: "hidden", */}
                        {/*     }, */}
                        {/*     'code[class*="language-"]': { */}
                        {/*       ...oneDark['code[class*="language-"]'], */}
                        {/*       background: "transparent", */}
                        {/*     }, */}
                        {/*   }} */}
                        {/* > */}
                        {/*   {codeSnippet} */}
                        {/* </SyntaxHighlighter> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section >


    </>
  )
}

