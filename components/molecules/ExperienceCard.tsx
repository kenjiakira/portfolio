import React from "react"
import { LiquidGlassCard, OptimizedMotion } from "@/components/atoms"
import { ExperienceHeader } from "./ExperienceHeader"
import { HighlightsList } from "./HighlightsList"
import { TechnologiesList } from "./TechnologiesList"

interface Experience {
  role: string
  company: string
  period: string
  description: string
  technologies: string[]
  highlights: string[]
  companyLogo?: string
}

interface ExperienceCardProps {
  experience: Experience
  index: number
  darkMode?: boolean
  achievementsTitle: string
  technologiesTitle: string
}

export function ExperienceCard({ 
  experience, 
  index,
  darkMode = false,
  achievementsTitle,
  technologiesTitle
}: ExperienceCardProps) {
  return (
    <OptimizedMotion
      className={`relative flex items-center ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } flex-col lg:gap-16 justify-center lg:justify-start`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      lazy={true}
    >
      {/* Experience Card */}
      <OptimizedMotion 
        className="flex-1 lg:ml-16 ml-0 max-w-2xl relative z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <LiquidGlassCard className="hover:shadow-3xl transition-all duration-500 group overflow-hidden">
          <div className="p-6 lg:p-8">
            {/* Card Header */}
            <ExperienceHeader
              role={experience.role}
              company={experience.company}
              period={experience.period}
              companyLogo={experience.companyLogo || ''}
              darkMode={darkMode}
            />

            {/* Description */}
            <OptimizedMotion
              as="p"
              className={`mb-6 text-lg leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              lazy={true}
            >
              {experience.description}
            </OptimizedMotion>

            {/* Highlights */}
            <HighlightsList
              highlights={experience.highlights}
              title={achievementsTitle}
              darkMode={darkMode}
            />

            {/* Technologies */}
            <TechnologiesList
              technologies={experience.technologies}
              title={technologiesTitle}
              darkMode={darkMode}
            />
          </div>
        </LiquidGlassCard>
      </OptimizedMotion>
    </OptimizedMotion>
  )
}

