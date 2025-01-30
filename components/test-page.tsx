import Image from "next/image"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Check } from "lucide-react"

export default function Home() {
  return (
    <section className="relative py-20 sm:py-32 bg-white dark:bg-gray-950">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 items-center w-full">
          {/* Left column: Text content and CTA */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              <span className="block">Real-Time SaaS Insights,</span>
              <span className="block mt-2 text-blue-600 dark:text-blue-500">Delivered to Your Discord</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              PingPanda is the easiest way to monitor your SaaS. Get instant notifications for
              <span className="font-semibold text-gray-900 dark:text-white">
                {" "}
                sales, new users, or any other event{" "}
              </span>
              sent directly to your Discord.
            </p>
            <ul className="mt-8 space-y-3 mx-auto lg:mx-0 max-w-md">
              {[
                "Real-time Discord alerts for critical events",
                "Buy once, use forever",
                "Track sales, new users, or any other event",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 flex-shrink-0 text-blue-600" />
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex justify-center lg:justify-start">
              <ShinyButton href="/sign-up" className="h-14 px-8 text-base font-semibold">
                Start for Free Today
              </ShinyButton>
            </div>
          </div>

          {/* Right column: Image or UI */}
          <div className="relative lg:mt-0 mx-auto lg:mx-0">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-gray-700">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="PingPanda Dashboard"
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

