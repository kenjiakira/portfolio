import React from "react"
import { motion } from "framer-motion"
import { ExternalIcon } from "@/components/ui/external-icon"

interface SkillBadgeProps {
  name: string
  icon: string
  darkMode?: boolean
  index?: number
  categoryIndex?: number
}

export function SkillBadge({ 
  name, 
  icon, 
  darkMode = false,
  index = 0,
  categoryIndex = 0
}: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 + categoryIndex * 0.2 + 0.4, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <div className="liquidGlass-wrapper border-0 shadow-lg rounded-full hover:shadow-xl transition-all duration-300">
        <div className="liquidGlass-effect rounded-full"></div>
        <div className="liquidGlass-tint rounded-full"></div>
        <div className="liquidGlass-shine rounded-full"></div>
        <div className="liquidGlass-content px-4 py-3 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2">
          <ExternalIcon 
            src={icon} 
            size={16}
            className="filter-none"
          />
          <span className={darkMode ? 'text-white' : 'text-slate-900'}>
            {name}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

