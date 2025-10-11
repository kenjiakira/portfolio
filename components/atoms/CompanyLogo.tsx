import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { ExternalIcon } from "@/components/ui/external-icon"

interface CompanyLogoProps {
  iconSrc: string
  darkMode?: boolean
}

export function CompanyLogo({ iconSrc, darkMode = false }: CompanyLogoProps) {
  return (
    <OptimizedMotion
      as="div"
      className={`p-4 rounded-2xl ${
        darkMode 
          ? 'bg-white/10 border border-white/20' 
          : 'bg-slate-100 border border-slate-200'
      } shadow-sm group-hover:shadow-lg transition-all duration-300`}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <ExternalIcon 
        src={iconSrc} 
        size={24}
        className={darkMode ? 'filter invert' : 'filter-none'}
      />
    </OptimizedMotion>
  )
}

