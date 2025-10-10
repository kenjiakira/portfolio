import React from "react"
import { LucideIcon } from "lucide-react"

interface InfoItemProps {
  icon: LucideIcon
  text: string
  darkMode?: boolean
}

export function InfoItem({ icon: Icon, text, darkMode = false }: InfoItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className={`h-5 w-5 ${darkMode ? "text-slate-400" : "text-slate-600"}`} />
      <span className={darkMode ? "text-slate-300" : "text-slate-600"}>{text}</span>
    </div>
  )
}

