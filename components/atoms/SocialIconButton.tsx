import React from "react"
import Image from "next/image"
import { OptimizedMotion } from "@/components/atoms"
import { LucideIcon } from "lucide-react"
import { LiquidGlassButton } from "@/components/atoms/LiquidGlassButton"

interface SocialIconButtonProps {
  icon: LucideIcon | string
  label: string
  href: string
  color?: string
  darkMode?: boolean
  index?: number
  shouldReduceAnimations?: boolean
}

export function SocialIconButton({ 
  icon, 
  label, 
  href, 
  color = "hover:bg-gray-600",
  darkMode = false,
  index = 0,
  shouldReduceAnimations = false
}: SocialIconButtonProps) {
  const isString = typeof icon === 'string'
  const Icon = !isString ? icon : null

  return (
    <OptimizedMotion
      as="div"
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
        {isString ? (
          <Image 
            src={icon} 
            alt={label}
            width={24}
            height={24}
            className={`transition-all duration-300 ${
              darkMode ? 'invert brightness-0 saturate-100 contrast-200 hover:brightness-75' : 'opacity-70 hover:opacity-100'
            }`}
          />
        ) : Icon ? (
          <Icon className={`h-6 w-6 transition-colors duration-300 ${
            darkMode ? 'text-slate-300 group-hover:text-blue-400' : 'text-slate-600 group-hover:text-blue-600'
          }`} />
        ) : null}
      </LiquidGlassButton>
    </OptimizedMotion>
  )
}

