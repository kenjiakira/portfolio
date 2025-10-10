import React from "react"
import { motion } from "framer-motion"

interface SkillLevelProps {
  level: number
  index?: number
  darkMode?: boolean
}

export function SkillLevel({ level, index = 0, darkMode = false }: SkillLevelProps) {
  return (
    <motion.span 
      className={`text-sm font-bold px-3 py-1 rounded-full ${
        darkMode 
          ? 'bg-white/[0.08] border border-white/[0.12] text-white' 
          : 'bg-slate-900/[0.06] border border-slate-300/60 text-slate-900'
      } shadow-lg`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: index * 0.15 + 0.8, type: "spring", stiffness: 300 }}
      viewport={{ once: true }}
      style={{
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
    >
      {level}%
    </motion.span>
  )
}

