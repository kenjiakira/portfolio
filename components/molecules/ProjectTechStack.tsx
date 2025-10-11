import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { Badge } from "@/components/ui/badge"

interface ProjectTechStackProps {
  technologies: string[]
  darkMode?: boolean
  variant?: "full" | "limited"
  limit?: number
}

export function ProjectTechStack({ 
  technologies, 
  darkMode = false,
  variant = "full",
  limit = 3
}: ProjectTechStackProps) {
  const displayTech = variant === "limited" ? technologies.slice(0, limit) : technologies
  const remaining = variant === "limited" ? technologies.length - limit : 0

  return (
    <div className="flex flex-wrap gap-2">
      {displayTech.map((tech, index) => (
        <OptimizedMotion
          as="div"
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 + (variant === "full" ? 0.8 : 0.4), duration: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <Badge
            variant={variant === "full" ? "secondary" : "outline"}
            className={`text-xs font-medium ${
              darkMode
                ? variant === "full"
                  ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  : 'bg-white/5 text-white border-white/20'
                : variant === "full"
                  ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  : 'bg-slate-50 text-slate-700 border-slate-200'
            } transition-all duration-300`}
          >
            {tech}
          </Badge>
        </OptimizedMotion>
      ))}
      {remaining > 0 && (
        <Badge variant="outline" className="text-xs">
          +{remaining}
        </Badge>
      )}
    </div>
  )
}

