import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { GradientText } from "@/components/atoms/GradientText"

interface StatsItemProps {
  value: string
  label: string
  from?: string
  to?: string
  darkMode?: boolean
}

export function StatsItem({ 
  value, 
  label, 
  from = "from-blue-600", 
  to = "to-purple-600",
  darkMode = false 
}: StatsItemProps) {
  return (
    <OptimizedMotion
      as="div"
      className="text-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
        <GradientText from={from} to={to}>
          {value}
        </GradientText>
      </div>
      <div className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
        {label}
      </div>
    </OptimizedMotion>
  )
}

