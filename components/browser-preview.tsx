"use client"

import { useState } from "react"

export function BrowserPreview() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-gray-900/70 shadow-2xl backdrop-blur transition-transform duration-500 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-gray-900/90 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-sm text-gray-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          app.paritycart.dev
        </div>
      </div>

      {/* Content */}
      <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 p-8">
        <div className="grid h-full grid-cols-3 gap-4">
          {["Next.js", "Tailwind", "MongoDB", "Stripe", "NextAuth", "Mailgun"].map((tech, index) => (
            <div
              key={tech}
              className={`group flex flex-col items-center justify-center rounded-lg bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-2 rounded-lg bg-white/10 p-3">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt={tech}
                  className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-medium text-gray-300">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-zinc-500">
        + all the boring stuff (SEO tags, API calls, customer support)
      </div>
    </div>
  )
}

