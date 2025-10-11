import React from "react"
import { OptimizedMotion } from "@/components/atoms"

interface ContactFormHeaderProps {
  title: string
  description: string
  darkMode?: boolean
}

export function ContactFormHeader({ title, description, darkMode = false }: ContactFormHeaderProps) {
  return (
    <OptimizedMotion
      as="div"
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className={`text-3xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
        {title}
      </h3>
      <p className={`${darkMode ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
    </OptimizedMotion>
  )
}

