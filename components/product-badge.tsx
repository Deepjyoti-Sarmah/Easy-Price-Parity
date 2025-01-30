import { Star } from 'lucide-react'

export default function ProductBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 mb-8">
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
        <span className="text-sm font-medium text-zinc-100">Product of the day</span>
      </div>
      <span className="text-sm font-medium text-zinc-500">2nd</span>
    </div>
  )
}

