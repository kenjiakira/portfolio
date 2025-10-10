import React from "react"
import { motion } from "framer-motion"

interface TechBadgeProps {
  children: React.ReactNode
  darkMode?: boolean
  index?: number
}

export function TechBadge({ children, darkMode = false, index = 0 }: TechBadgeProps) {
  return (
    <motion.span
      className={`font-medium px-2 py-1 rounded-md text-sm ${
        darkMode 
          ? 'bg-slate-700/50 text-slate-200 border border-slate-600/50' 
          : 'bg-slate-100 text-slate-700 border border-slate-300'
      }`}
      whileHover={{ scale: 1.1, y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {children}
    </motion.span>
  )
}

