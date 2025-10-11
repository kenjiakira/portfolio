import React from "react"
import { motion } from "framer-motion"
import { ExternalIcon } from "@/components/ui/external-icon"

interface IconContainerProps {
  iconSrc: string
  size?: number
  darkMode?: boolean
  variant?: "default" | "gradient" | "large"
  className?: string
  animate?: boolean
}

export function IconContainer({ 
  iconSrc, 
  size = 24, 
  darkMode = false,
  variant = "default",
  className = "",
  animate = true
}: IconContainerProps) {
  const baseClass = "rounded-xl shadow-sm flex items-center justify-center"
  
  const variantClasses = {
    default: `p-3 ${darkMode 
      ? 'bg-white/10 border border-white/20' 
      : 'bg-slate-100 border border-slate-200'}`,
    gradient: `p-4 ${darkMode 
      ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20' 
      : 'bg-gradient-to-br from-slate-50 to-white border border-slate-200'}`,
    large: `w-16 h-16 ${darkMode 
      ? 'bg-white/10 border border-white/20' 
      : 'bg-slate-100 border border-slate-200'}`
  }
  
  const Container = animate ? motion.div : "div"
  const animationProps = animate ? {
    whileHover: { scale: 1.1, y: -2 },
    transition: { type: "spring" as const, stiffness: 300 }
  } : {}
  
  return (
    <Container
      className={`${baseClass} ${variantClasses[variant]} ${className}`}
      {...animationProps}
    >
      <ExternalIcon 
        src={iconSrc} 
        size={size}
        className={darkMode && variant !== "gradient" ? 'filter invert' : 'filter-none'}
      />
    </Container>
  )
}

