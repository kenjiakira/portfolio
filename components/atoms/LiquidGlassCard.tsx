import React from "react"

interface LiquidGlassCardProps {
  children: React.ReactNode
  className?: string
  roundedClass?: string
  variant?: "default" | "subtle"
}

/**
 * Liquid Glass Card Component
 * A reusable card wrapper with liquid glass effect (macOS-inspired)
 * Includes glass-distortion filter, backdrop blur, and shine effects
 */
export function LiquidGlassCard({
  children,
  className = "",
  roundedClass = "rounded-2xl",
  variant = "default"
}: LiquidGlassCardProps) {
  return (
    <div className={`liquidGlass-wrapper border-0 shadow-2xl ${roundedClass} ${className}`}>
      <div className={`liquidGlass-effect ${roundedClass}`}></div>
      <div className={`liquidGlass-tint ${roundedClass}`}></div>
      <div className={`liquidGlass-shine ${roundedClass}`}></div>
      <div className={`liquidGlass-content ${roundedClass}`}>
        {children}
      </div>
    </div>
  )
}

