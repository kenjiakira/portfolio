import React from "react"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  darkMode?: boolean
  align?: "left" | "center" | "right"
}

export function SectionHeader({ 
  title, 
  subtitle, 
  darkMode = false,
  align = "center" 
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"
  
  return (
    <motion.div
      className={`${alignClass} mb-20`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className={`text-5xl lg:text-7xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`text-xl max-w-3xl ${align === "center" ? "mx-auto" : ""} ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

