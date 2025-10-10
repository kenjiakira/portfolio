import React from "react"
import { motion } from "framer-motion"
import { LiquidGlassCard, LiquidGlassButton } from "@/components/atoms"
import { Coffee, Mail, LucideIcon } from "lucide-react"

interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
  color?: string
}

interface ContactInfoCardProps {
  title: string
  description: string
  buttonText: string
  supportText: string
  socialLinks: SocialLink[]
  darkMode?: boolean
  onButtonClick?: () => void
  renderSocialLinks: () => React.ReactNode
}

export function ContactInfoCard({ 
  title, 
  description, 
  buttonText, 
  supportText,
  darkMode = false,
  onButtonClick,
  renderSocialLinks
}: ContactInfoCardProps) {
  return (
    <LiquidGlassCard className="hover:shadow-3xl transition-all duration-500">
      <div className="p-8 text-center">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${
            darkMode
              ? 'bg-white/10 border border-white/20'
              : 'bg-slate-100 border border-slate-200'
          } shadow-sm flex items-center justify-center`}>
            <Coffee className={`h-10 w-10 ${darkMode ? 'text-white' : 'text-slate-700'}`} />
          </div>
        </motion.div>

        <motion.h3
          className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>

        <motion.p
          className={`text-sm mb-6 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <LiquidGlassButton
            onClick={onButtonClick}
            darkMode={darkMode}
            className="w-full px-6 py-3"
            roundedClass="rounded-xl"
          >
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              <span className={darkMode ? 'text-white' : 'text-slate-900'}>{buttonText}</span>
            </div>
          </LiquidGlassButton>

          {/* Buy Me a Coffee */}
          <motion.div
            className="pt-4 border-t border-white/10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://buymeacoffee.com/kenjiakira"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="block"
            >
              <LiquidGlassButton
                as="div"
                darkMode={darkMode}
                variant="icon"
                className="w-full px-4 py-3"
                roundedClass="rounded-xl"
              >
                <div className="flex items-center justify-center gap-2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <Coffee className={`h-4 w-4 relative z-10 transition-colors duration-300 ${
                    darkMode ? 'text-yellow-400 group-hover:text-yellow-300' : 'text-orange-600 group-hover:text-orange-500'
                  }`} />
                  <span className={`text-sm font-medium relative z-10 transition-colors duration-300 ${
                    darkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'
                  }`}>
                    {supportText}
                  </span>
                </div>
              </LiquidGlassButton>
            </motion.a>
          </motion.div>

          {renderSocialLinks()}
        </motion.div>
      </div>
    </LiquidGlassCard>
  )
}

