import React from "react"
import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

interface LiquidGlassButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode
  variant?: "default" | "icon"
  roundedClass?: string
  darkMode?: boolean
  shouldReduceAnimations?: boolean
}

/**
 * Liquid Glass Button Component
 * A reusable button with liquid glass effect (macOS-inspired)
 * Includes glass-distortion filter, backdrop blur, and shine effects
 */
export function LiquidGlassButton({
  children,
  variant = "default",
  roundedClass = "rounded-2xl",
  darkMode = false,
  shouldReduceAnimations = false,
  className = "",
  ...motionProps
}: LiquidGlassButtonProps) {
  const isPrimary = variant === "default"
  
  return (
    <div className={`liquidGlass-wrapper border-0 shadow-2xl ${roundedClass}`}>
      <div className={`liquidGlass-effect ${roundedClass}`}></div>
      <div className={`liquidGlass-tint ${roundedClass}`}></div>
      <div className={`liquidGlass-shine ${roundedClass}`}></div>
      <motion.button
        className={`liquidGlass-content group ${roundedClass} button-shadow-medium transition-all duration-300 overflow-hidden ${className}`}
        whileHover={shouldReduceAnimations ? {} : { scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        {...motionProps}
      >
        {children}
      </motion.button>
    </div>
  )
}

