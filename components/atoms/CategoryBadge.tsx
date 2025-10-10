import React from "react"
import { Badge } from "@/components/ui/badge"

interface CategoryBadgeProps {
  category: string
  darkMode?: boolean
  variant?: "default" | "overlay"
}

export function CategoryBadge({ 
  category, 
  darkMode = false,
  variant = "default"
}: CategoryBadgeProps) {
  if (variant === "overlay") {
    return (
      <Badge variant="secondary" className="text-xs bg-black/50 text-white border-white/20">
        {category}
      </Badge>
    )
  }

  return (
    <Badge variant="outline" className={`${
      darkMode 
        ? 'bg-white/10 text-white border-white/20' 
        : 'bg-slate-100 text-slate-700 border-slate-200'
    }`}>
      {category}
    </Badge>
  )
}

