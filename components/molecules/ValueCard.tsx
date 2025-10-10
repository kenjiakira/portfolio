import React from "react"
import { motion } from "framer-motion"
import { LiquidGlassCard } from "@/components/atoms/LiquidGlassCard"
import { IconContainer } from "@/components/atoms/IconContainer"

interface ValueCardProps {
  title: string
  description: string
  iconSrc: string
  darkMode?: boolean
  index?: number
}

export function ValueCard({ 
  title, 
  description, 
  iconSrc, 
  darkMode = false,
  index = 0 
}: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <LiquidGlassCard className="h-full hover:shadow-3xl transition-all duration-300">
        <div className="p-4 lg:p-6 text-center">
          <IconContainer
            iconSrc={iconSrc}
            size={32}
            darkMode={darkMode}
            variant="large"
            className="mx-auto mb-4 rounded-2xl"
          />
          <h4 className={`font-bold text-lg mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
            {title}
          </h4>
          <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            {description}
          </p>
        </div>
      </LiquidGlassCard>
    </motion.div>
  )
}

