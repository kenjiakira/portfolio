import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

interface FeaturedBadgeProps {
  text?: string
}

export function FeaturedBadge({ text = "Featured Project" }: FeaturedBadgeProps) {
  return (
    <OptimizedMotion
      as="div"
      className="absolute top-6 left-6"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg px-4 py-2">
        <Sparkles className="h-4 w-4 mr-2" />
        {text}
      </Badge>
    </OptimizedMotion>
  )
}

