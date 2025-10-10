import React from "react"
import { motion } from "framer-motion"
import { LiquidGlassCard } from "@/components/atoms"
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
    <motion.div
      className={`relative flex items-center ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } flex-col lg:gap-16 justify-center lg:justify-start`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.3, duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Experience Card */}
      <motion.div 
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
            <motion.p
              className={`mb-6 text-lg leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {experience.description}
            </motion.p>

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
      </motion.div>
    </motion.div>
  )
}

