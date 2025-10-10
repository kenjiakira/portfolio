import React from "react"
import { motion } from "framer-motion"
import { LiquidGlassCard } from "@/components/atoms/LiquidGlassCard"
import { IconContainer } from "@/components/atoms/IconContainer"

interface CurrentRoleCardProps {
  role: string
  company: string
  period: string
  iconSrc: string
  darkMode?: boolean
}

export function CurrentRoleCard({ 
  role, 
  company, 
  period, 
  iconSrc,
  darkMode = false 
}: CurrentRoleCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <LiquidGlassCard variant="subtle">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <IconContainer
              iconSrc={iconSrc}
              size={20}
              darkMode={darkMode}
            />
            <div>
              <h4 className={`font-bold text-lg ${darkMode ? "text-white" : "text-slate-900"}`}>
                {role}
              </h4>
              <p className={`font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                {company}
              </p>
              <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                {period}
              </p>
            </div>
          </div>
        </div>
      </LiquidGlassCard>
    </motion.div>
  )
}

