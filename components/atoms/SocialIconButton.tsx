import React from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { LiquidGlassButton } from "@/components/atoms/LiquidGlassButton"

interface SocialIconButtonProps {
  icon: LucideIcon
  label: string
  href: string
  color?: string
  darkMode?: boolean
  index?: number
  shouldReduceAnimations?: boolean
}

export function SocialIconButton({ 
  icon: Icon, 
  label, 
  href, 
  color = "hover:bg-gray-600",
  darkMode = false,
  index = 0,
  shouldReduceAnimations = false
}: SocialIconButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: shouldReduceAnimations ? 0.6 + index * 0.05 : 0.9 + index * 0.1 }}
    >
      <LiquidGlassButton
        onClick={() => window.open(href, '_blank')}
        aria-label={label}
        variant="icon"
        darkMode={darkMode}
        shouldReduceAnimations={shouldReduceAnimations}
        className="p-4"
      >
        <Icon className={`h-6 w-6 transition-colors duration-300 ${
          darkMode ? 'text-slate-300 group-hover:text-blue-400' : 'text-slate-600 group-hover:text-blue-600'
        }`} />
      </LiquidGlassButton>
    </motion.div>
  )
}

