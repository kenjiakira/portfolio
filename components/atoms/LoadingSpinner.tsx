import React from "react"
import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: number
  color?: string
}

export function LoadingSpinner({ size = 6, color = "white" }: LoadingSpinnerProps) {
  return (
    <motion.div
      className={`w-${size} h-${size} border-2 border-${color}/30 border-t-${color} rounded-full`}
      style={{ 
        width: `${size * 4}px`, 
        height: `${size * 4}px`,
        borderWidth: '2px',
        borderColor: `rgba(255, 255, 255, 0.3)`,
        borderTopColor: 'white'
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  )
}

