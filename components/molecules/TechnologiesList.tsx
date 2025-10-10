import React from "react"
import { TechnologyBadge } from "@/components/atoms/TechnologyBadge"

interface TechnologiesListProps {
  technologies: string[]
  title: string
  darkMode?: boolean
}

export function TechnologiesList({ technologies, title, darkMode = false }: TechnologiesListProps) {
  return (
    <div>
      <h4 className={`text-sm font-semibold mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <TechnologyBadge
            key={tech}
            name={tech}
            darkMode={darkMode}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

