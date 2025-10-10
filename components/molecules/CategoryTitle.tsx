import React from "react"
import { motion } from "framer-motion"
import { ExternalIcon } from "@/components/ui/external-icon"

interface CategoryTitleProps {
  title: string
  icon: string
  darkMode?: boolean
  categoryIndex?: number
}

export function CategoryTitle({ 
  title, 
  icon, 
  darkMode = false,
  categoryIndex = 0
}: CategoryTitleProps) {
  return (
    <motion.div
      className="flex items-center justify-center gap-3 mb-6 lg:mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: categoryIndex * 0.2 + 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <div className="liquidGlass-wrapper border-0 shadow-md rounded-xl">
          <div className="liquidGlass-effect rounded-xl"></div>
          <div className="liquidGlass-tint rounded-xl"></div>
          <div className="liquidGlass-shine rounded-xl"></div>
          <div className="liquidGlass-content p-2">
            <ExternalIcon 
              src={icon} 
              size={20}
              className={darkMode ? 'filter invert' : 'filter-none'}
            />
          </div>
        </div>
      </motion.div>
      <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
        {title}
      </h3>
    </motion.div>
  )
}

