import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { CheckCircle, LucideIcon } from "lucide-react"

interface StatusBadgeProps {
  status: string
  icon?: LucideIcon
  gradientFrom?: string
  gradientTo?: string
  index?: number
}

export function StatusBadge({ 
  status, 
  icon: Icon,
  gradientFrom = "from-green-500",
  gradientTo = "to-emerald-600",
  index = 0
}: StatusBadgeProps) {
  const IconComponent = Icon || CheckCircle
  
  // Extract color from gradient classes (e.g., "from-green-500" -> "green")
  const colorMatch = gradientFrom.match(/from-(\w+)-\d+/)
  const color = colorMatch ? colorMatch[1] : 'green'
  
  return (
    <OptimizedMotion
      as="div"
      className="relative flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm shadow-lg overflow-hidden backdrop-blur-xl group/badge"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Liquid Glass Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-20 group-hover/badge:opacity-30 transition-opacity duration-300`} />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
      <div className={`absolute inset-0 border border-white/30 rounded-full`} />
      
      {/* Gradient Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-30 blur-md group-hover/badge:opacity-50 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-2 text-white">
        <IconComponent size={16} className="drop-shadow-lg" />
        <span className="drop-shadow-lg">{status}</span>
      </div>
    </OptimizedMotion>
  )
}

