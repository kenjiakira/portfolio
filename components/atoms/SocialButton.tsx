import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { LucideIcon } from "lucide-react"

interface SocialButtonProps {
  icon: LucideIcon
  label: string
  href: string
  color?: string
  darkMode?: boolean
  index?: number
}

export function SocialButton({ 
  icon: Icon, 
  label, 
  href, 
  color = "hover:bg-gray-600", 
  darkMode = false,
  index = 0 
}: SocialButtonProps) {
  return (
    <OptimizedMotion
      as="button"
      className={`p-3 rounded-xl ios-glass-button transition-all duration-300 ${color} group`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 + 1, duration: 0.3 }}
      viewport={{ once: true }}
      onClick={() => window.open(href, '_blank')}
      aria-label={label}
    >
      <Icon className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-slate-700'} group-hover:text-white transition-colors duration-300`} />
    </OptimizedMotion>
  )
}

