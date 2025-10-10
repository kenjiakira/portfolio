import React from "react"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Award, LucideIcon } from "lucide-react"

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
  
  return (
    <motion.div
      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-medium text-sm shadow-lg`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <IconComponent size={16} />
      {status}
    </motion.div>
  )
}

