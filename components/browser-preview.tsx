"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, RotateCcw, Lock } from "lucide-react"

export function BrowserPreview() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 overflow-hidden rounded-xl border border-white/10 bg-bun-mute-background/60 shadow-2xl backdrop-blur transition-transform duration-500 "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Browser Chrome */}
        <div className="flex flex-col border-b border-white/10 bg-bun-mute-background/60">
          {/* Window Controls and Tabs */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-bun-accent-purple/30" />
              <div className="h-3 w-3 rounded-full bg-bun-accent-purple/30" />
              <div className="h-3 w-3 rounded-full bg-bun-accent-purple/30" />
            </div>
            <div className="flex gap-1">
              {["ParityCart", "Dashboard", "Settings"].map((tab, i) => (
                <div
                  key={tab}
                  className={`px-4 py-1 text-xs rounded-md transition-colors ${i === 0 ? "bg-white/10 text-zinc-300" : "text-zinc-300 hover:bg-white/5"
                    }`}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="w-12" /> {/* Spacer for symmetry */}
          </div>

          {/* URL Bar */}
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="flex gap-2 text-zinc-400">
              <button className="p-1 hover:bg-white/5 rounded">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button className="p-1 hover:bg-white/5 rounded">
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="p-1 hover:bg-white/5 rounded">
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-md bg-white/5 px-3 py-1">
              <Lock className="h-4 w-4 text-zinc-400" />
              <span className="text-sm text-zinc-400">app.paritycart.dev</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="h-full bg-gradient-to-br from-bun-mute-background/95 via-bun-mute-background/90 to-bun-mute-background/80 p-8">
          <div className="grid h-full grid-cols-3 gap-4">
            {[
              { name: "Next.js", color: "from-bunPurple-500/20" },
              { name: "Tailwind", color: "from-bunPurple-500/20" },
              { name: "MongoDB", color: "from-bunPurple-500/20" },
              { name: "Stripe", color: "from-bunPurple-500/20" },
              { name: "NextAuth", color: "from-bunPurple-500/20" },
              { name: "Mailgun", color: "from-bunPurple-500/20" },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`group relative flex flex-col items-center justify-center rounded-lg bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 overflow-hidden ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10 mb-2 rounded-lg bg-white/10 p-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt={tech.name}
                    className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="relative z-10 text-sm font-medium text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fade-away effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-bun-background/95 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bun-background/50 pointer-events-none" />

      {/* Bottom text */}
      {/* <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-zinc-500"> */}
      {/*   + all the boring stuff (SEO tags, API calls, customer support) */}
      {/* </div> */}
    </div>
  )
}



