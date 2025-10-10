import React from "react"
import { motion } from "framer-motion"

interface StatusDotProps {
  shouldReduceAnimations?: boolean
}

export function StatusDot({ shouldReduceAnimations = false }: StatusDotProps) {
  return (
    <motion.div
      className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
      animate={{ scale: shouldReduceAnimations ? [1, 1.1, 1] : [1, 1.2, 1] }}
      transition={{ duration: shouldReduceAnimations ? 1 : 2, repeat: Infinity }}
    />
  )
}

