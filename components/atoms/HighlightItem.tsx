import React from "react"
import { OptimizedMotion } from "@/components/atoms"

interface HighlightItemProps {
  text: string
  darkMode?: boolean
  index?: number
}

export function HighlightItem({ text, darkMode = false, index = 0 }: HighlightItemProps) {
  return (
    <OptimizedMotion
      as="div"
      className={`flex items-center p-3 rounded-xl ${
        darkMode 
          ? 'bg-white/5 border border-white/10' 
          : 'bg-slate-50 border border-slate-100'
      }`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, x: 5 }}
    >
      <span className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
        {text}
      </span>
    </OptimizedMotion>
  )
}

