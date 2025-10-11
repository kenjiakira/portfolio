import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { LucideIcon } from "lucide-react"

interface EngagementButtonProps {
  icon: LucideIcon
  count: string
  darkMode?: boolean
  hoverColor?: "red" | "green" | "blue"
}

export function EngagementButton({ 
  icon: Icon, 
  count, 
  darkMode = false,
  hoverColor = "red" 
}: EngagementButtonProps) {
  const hoverColorClass = {
    red: darkMode ? "hover:text-red-400" : "hover:text-red-500",
    green: darkMode ? "hover:text-green-400" : "hover:text-green-500",
    blue: darkMode ? "hover:text-blue-400" : "hover:text-blue-500"
  }[hoverColor]
  
  return (
    <OptimizedMotion
      as="button"
      className={`flex items-center gap-1 ${darkMode ? "text-slate-400" : "text-slate-500"} ${hoverColorClass}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="h-4 w-4" />
      <span>{count}</span>
    </OptimizedMotion>
  )
}

