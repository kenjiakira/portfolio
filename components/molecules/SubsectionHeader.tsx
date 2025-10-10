import React from "react"
import { motion } from "framer-motion"

interface SubsectionHeaderProps {
  title: string
  subtitle?: string
  darkMode?: boolean
}

export function SubsectionHeader({ 
  title, 
  subtitle, 
  darkMode = false 
}: SubsectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.h3 
        className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      {subtitle && (
        <motion.p
          className={`text-xl ${darkMode ? "text-slate-300" : "text-slate-600"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

