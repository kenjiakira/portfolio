import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { Download } from "lucide-react"
import { LiquidGlassButton } from "@/components/atoms/LiquidGlassButton"

interface DownloadCVButtonProps {
  text: string
  onClick: () => void
  darkMode?: boolean
  shouldReduceAnimations?: boolean
}

export function DownloadCVButton({ 
  text, 
  onClick, 
  darkMode = false,
  shouldReduceAnimations = false 
}: DownloadCVButtonProps) {
  return (
    <OptimizedMotion
      as="div"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: shouldReduceAnimations ? 0.5 : 0.8, 
        duration: shouldReduceAnimations ? 0.4 : 0.8 
      }}
    >
      <LiquidGlassButton
        onClick={onClick}
        darkMode={darkMode}
        shouldReduceAnimations={shouldReduceAnimations}
        className="px-6 sm:px-8 py-4 font-semibold w-auto"
      >
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-r from-white/10 to-white/20' 
            : 'bg-gradient-to-r from-slate-900/10 to-slate-900/20'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        <div className={`relative flex items-center gap-3 transition-colors duration-300 ${
          darkMode 
            ? 'text-white group-hover:text-blue-400' 
            : 'text-slate-900 group-hover:text-blue-600'
        }`}>
          <Download className="h-5 w-5" />
          {text}
        </div>
      </LiquidGlassButton>
    </OptimizedMotion>
  )
}

