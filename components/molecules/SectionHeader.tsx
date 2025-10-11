import React from "react"
import { OptimizedMotion } from "@/components/atoms"

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
    <OptimizedMotion
      as="div"
      className={`${alignClass} mb-20`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <OptimizedMotion
        as="h2"
        className={`text-5xl lg:text-7xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {title}
      </OptimizedMotion>
      {subtitle && (
        <OptimizedMotion
          as="p"
          className={`text-xl max-w-3xl ${align === "center" ? "mx-auto" : ""} ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </OptimizedMotion>
      )}
    </OptimizedMotion>
  )
}

