import React from "react"

interface HighlightedTextProps {
  children: React.ReactNode
  color?: 'blue' | 'purple' | 'emerald' | 'cyan' | 'orange' | 'gradient'
  className?: string
}

export function HighlightedText({ 
  children, 
  color = 'gradient',
  className = "" 
}: HighlightedTextProps) {
  if (color === 'gradient') {
    return (
      <span className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}>
        {children}
      </span>
    )
  }
  
  return (
    <span className={`font-bold ${className}`}>
      {children}
    </span>
  )
}

