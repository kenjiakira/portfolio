import React from "react"
import { Badge } from "@/components/ui/badge"

interface PeriodBadgeProps {
  period: string
  darkMode?: boolean
}

export function PeriodBadge({ period, darkMode = false }: PeriodBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={`w-fit mt-2 sm:mt-0 px-4 py-2 text-sm font-medium ${
        darkMode 
          ? 'bg-white/10 text-white border-white/20' 
          : 'bg-slate-100 text-slate-700 border-slate-200'
      }`}
    >
      {period}
    </Badge>
  )
}

