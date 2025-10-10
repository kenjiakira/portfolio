import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, LucideIcon } from "lucide-react"
import { LiquidGlassCard, LiquidGlassButton } from "@/components/atoms"
import { IconContainer } from "@/components/atoms/IconContainer"
import { StatusBadge } from "@/components/atoms/StatusBadge"

interface AchievementCardProps {
  title: string
  date: string
  description: string
  iconSrc: string
  link?: string
  status: string
  statusIcon: LucideIcon
  statusColor: string
  darkMode?: boolean
  index?: number
  viewCertText: string
}

export function AchievementCard({ 
  title,
  date,
  description,
  iconSrc,
  link,
  status,
  statusIcon,
  statusColor,
  darkMode = false,
  index = 0,
  viewCertText
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.6, duration: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <LiquidGlassCard className="hover:shadow-3xl transition-all duration-500 group h-full">
        <div className="p-6 lg:p-8">
          <div className="flex items-start gap-6 mb-6">
            {/* Company Icon */}
            <motion.div
              className={`p-4 rounded-2xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20' 
                  : 'bg-gradient-to-br from-slate-50 to-white border border-slate-200'
              } shadow-lg group-hover:shadow-xl transition-all duration-300`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <IconContainer
                iconSrc={iconSrc}
                size={32}
                darkMode={false}
                variant="gradient"
                className="p-0 bg-transparent border-0 shadow-none"
                animate={false}
              />
            </motion.div>
            
            {/* Status Badge */}
            <div className="ml-auto">
              <StatusBadge
                status={status}
                icon={statusIcon}
                gradientFrom={statusColor.split(' ')[0]}
                gradientTo={statusColor.split(' ')[1]}
                index={index}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-3">
              <h4 className={`font-bold text-xl leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                {title}
              </h4>
              <Badge variant="secondary" className={`ml-4 text-sm font-medium ${
                darkMode 
                  ? 'bg-white/10 text-white border-white/20' 
                  : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}>
                {date}
              </Badge>
            </div>
            <p className={`text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              {description}
            </p>
          </div>
          
          {/* Action Button */}
          {link && (
            <LiquidGlassButton
              onClick={() => window.open(link, '_blank')}
              darkMode={darkMode}
              className={`w-full px-4 py-3 ${
                darkMode ? 'text-white' : 'text-slate-700'
              } group/btn`}
              roundedClass="rounded-xl"
            >
              <div className="flex items-center justify-center">
                <ExternalLink className="mr-3 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                {viewCertText}
              </div>
            </LiquidGlassButton>
          )}
        </div>
      </LiquidGlassCard>
    </motion.div>
  )
}

