import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { IconContainer } from "@/components/atoms/IconContainer"
import { SkillLevel } from "@/components/atoms/SkillLevel"
import { ProgressBar } from "@/components/atoms/ProgressBar"

interface SkillItemProps {
  name: string
  level: number
  iconSrc: string
  darkMode?: boolean
  index?: number
}

export function SkillItem({ 
  name, 
  level, 
  iconSrc, 
  darkMode = false,
  index = 0 
}: SkillItemProps) {
  return (
    <OptimizedMotion
      as="div"
      className="space-y-3"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15 + 0.6, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconContainer
            iconSrc={iconSrc}
            size={16}
            darkMode={darkMode}
            variant="default"
            className="p-2"
          />
          <span className={`font-semibold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
            {name}
          </span>
        </div>
        <SkillLevel level={level} index={index} darkMode={darkMode} />
      </div>
      
      <ProgressBar level={level} darkMode={darkMode} index={index} />
    </OptimizedMotion>
  )
}

