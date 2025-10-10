import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface TechnologyBadgeProps {
  name: string
  darkMode?: boolean
  index?: number
}

export function TechnologyBadge({ name, darkMode = false, index = 0 }: TechnologyBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 + 0.6, duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -3 }}
    >
      <Badge
        variant="outline"
        className={`px-3 py-1 text-xs font-medium transition-all duration-300 ${
          darkMode
            ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30'
            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
        } hover:shadow-lg hover:shadow-blue-500/20`}
      >
        {name}
      </Badge>
    </motion.div>
  )
}

