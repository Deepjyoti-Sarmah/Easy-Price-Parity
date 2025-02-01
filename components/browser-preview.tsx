"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, RotateCcw, Lock } from "lucide-react"

export function BrowserPreview() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 overflow-hidden rounded-xl border border-white/10 bg-bun-mute-background/60 shadow-2xl backdrop-blur transition-transform duration-500"
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
        <div className="h-full bg-gradient-to-br from-bun-mute-background/95 via-bun-mute-background/90 to-bun-mute-background/80 p-6">
          {/* Banner */}
          <div className="bg-bunPurple-500/50 text-white text-center py-2 px-4 rounded-lg mb-6 hidden sm:block">
            <p className="text-sm font-medium">
              🎉 Special offer: Use code <span className="font-bold text-lg">LAUNCH30</span> for 30% off!
            </p>
          </div>

          {/* Skeleton Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="h-8 bg-white/10 rounded-lg w-3/4" />

            {/* Text blocks */}
            <div className="space-y-3">
              <div className="h-4 bg-white/10 rounded w-full" />
              <div className="h-4 bg-white/10 rounded w-5/6" />
              <div className="h-4 bg-white/10 rounded w-4/6" />
            </div>

            {/* Image placeholder */}
            <div className="h-40 bg-white/5 rounded-lg" />

            {/* More text blocks */}
            <div className="space-y-3">
              <div className="h-4 bg-white/10 rounded w-5/6" />
              <div className="h-4 bg-white/10 rounded w-full" />
              <div className="h-4 bg-white/10 rounded w-4/6" />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <div className="h-10 bg-bunPurple-500/30 rounded-lg w-1/3" />
              <div className="h-10 bg-white/10 rounded-lg w-1/3" />
            </div>
          </div>
        </div>
      </div>

      {/* Fade-away effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-bun-background/95 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bun-background/50 pointer-events-none" />
    </div>
  )
}

