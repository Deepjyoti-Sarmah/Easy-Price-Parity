import { Check } from "lucide-react"
import Link from "next/link"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Hero and Discord Mock Section */}
      <section className="relative py-20 lg:py-32 bg-brand-25 dark:bg-dark-background overflow-hidden">
        <MaxWidthWrapper>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Hero Content */}
            <div className="flex-1 max-w-2xl">
              {/* Badge */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                  <span className="mr-2">✨</span>
                  Product of the day
                  <span className="ml-2 rounded-full bg-brand-700 px-2 text-white dark:bg-brand-600">3rd</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="block">Real-Time SaaS Insights,</span>
                  <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-brand-600 dark:to-brand-700">
                    Delivered to Your Discord
                  </span>
                </h1>

                <p className="text-base/7 text-gray-600 text-pretty dark:text-zinc-400">
                  PingPanda is the easiest way to monitor your SaaS. Get instance notifications for{" "}
                  <span className="font-semibold text-gray-700 dark:text-zinc-300">
                    sales, new users, or any other event{" "}
                  </span>
                  sent directly to your discord
                </p>

                {/* Feature List */}
                <ul className="space-y-2 text-base/7 text-gray-600">
                  {[
                    "Real-time Discord alert for critical events",
                    "Buy once, use forever",
                    "Track sales, new users, or any other event",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-1.5">
                      <Check className="size-5 shrink-0 text-brand-700 dark:text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="w-full max-w-xs">
                  <Link
                    href="/sign-up"
                    className="relative z-10 inline-flex h-14 w-full items-center justify-center rounded-md bg-brand-600 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                  >
                    Start for Free Today
                  </Link>
                </div>
              </div>
            </div>

            {/* Discord Mock Section */}
            <div className="flex-1 w-full max-w-2xl lg:max-w-none">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/20 to-brand-700/5 rounded-3xl blur-3xl" />
                <div className="relative rounded-xl overflow-hidden bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  {/* <MockDiscordUI> */}
                  {/*   <AnimatedList> */}
                  {/*     <DiscordMessage */}
                  {/*       avatarSrc="/brand-asset-profile-picture.png" */}
                  {/*       avatarAlt="PingPanda Avatar" */}
                  {/*       username="PingPanda" */}
                  {/*       timestamp="Today at 12:35PM" */}
                  {/*       badgeText="SignUp" */}
                  {/*       badgeColor="#43b581" */}
                  {/*       title="👤 New user signed up" */}
                  {/*       content={{ */}
                  {/*         name: "Mateo Ortiz", */}
                  {/*         email: "m.ortiz19@gmail.com", */}
                  {/*       }} */}
                  {/*     /> */}
                  {/*     <DiscordMessage */}
                  {/*       avatarSrc="/brand-asset-profile-picture.png" */}
                  {/*       avatarAlt="PingPanda Avatar" */}
                  {/*       username="PingPanda" */}
                  {/*       timestamp="Today at 12:36PM" */}
                  {/*       badgeText="Revenue" */}
                  {/*       badgeColor="#faa61a" */}
                  {/*       title="💰 Payment received" */}
                  {/*       content={{ */}
                  {/*         amount: "$49.00", */}
                  {/*         email: "zoe.martinez2001@email.com", */}
                  {/*         plan: "PRO", */}
                  {/*       }} */}
                  {/*     /> */}
                  {/*     <DiscordMessage */}
                  {/*       avatarSrc="/brand-asset-profile-picture.png" */}
                  {/*       avatarAlt="PingPanda Avatar" */}
                  {/*       username="PingPanda" */}
                  {/*       timestamp="Today at 12:40PM" */}
                  {/*       badgeText="Milestone" */}
                  {/*       badgeColor="#5865f2" */}
                  {/*       title="🚀 Revenue Milestone Achieved" */}
                  {/*       content={{ */}
                  {/*         recurringRevenue: "$5,000 USD", */}
                  {/*         growth: "+8.2%", */}
                  {/*       }} */}
                  {/*     /> */}
                  {/*   </AnimatedList> */}
                  {/* </MockDiscordUI> */}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 sm:py-40 bg-white dark:bg-gray-900">
        <MaxWidthWrapper className="flex flex-col items-center gap-20">
          {/* Section heading */}
          <div className="text-center">
            <h2 className="text-base/7 font-semibold text-brand-600">Intuitive Monitoring</h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Stay ahead with real-time insights</h3>
          </div>

          {/* Features grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Real-time notifications</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Get notified about critical events the moment they happen, ensuring you never miss important updates.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Custom events</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Track any event that matters to your business, from user signups to revenue milestones and everything in
                between.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Easy integration</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Seamlessly integrate with your existing workflows and tools, making it easy to stay on top of your SaaS
                metrics.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24 sm:py-32 bg-brand-25 dark:bg-gray-800">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">Real-World Experiences</h2>
            <h3 className="text-center text-3xl sm:text-4xl font-bold tracking-tight">What our customers say</h3>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col justify-between p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <p className="text-lg font-medium mb-4">
                "PingPanda has been a game-changer for our SaaS business. The real-time insights are invaluable."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300">- Jane Doe, CEO of TechCorp</p>
            </div>
            <div className="flex flex-col justify-between p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <p className="text-lg font-medium mb-4">
                "We've seen a significant improvement in our response times since implementing PingPanda."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300">- John Smith, CTO of StartupX</p>
            </div>
          </div>

          <Link
            href="/sign-up"
            className="relative z-10 inline-flex h-14 px-8 items-center justify-center rounded-md bg-brand-600 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Start For Free Today
          </Link>
        </MaxWidthWrapper>
      </section>

      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  )
}

