import React from "react"
import { HighlightItem } from "@/components/atoms/HighlightItem"

interface HighlightsListProps {
  highlights: string[]
  title: string
  darkMode?: boolean
}

export function HighlightsList({ highlights, title, darkMode = false }: HighlightsListProps) {
  return (
    <div className="mb-6">
      <h4 className={`text-sm font-semibold mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
        {title}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {highlights.map((highlight, index) => (
          <HighlightItem
            key={highlight}
            text={highlight}
            darkMode={darkMode}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

