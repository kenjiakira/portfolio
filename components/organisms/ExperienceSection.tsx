"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalIcon, aboutIcons } from "@/components/ui/external-icon"
import { useTranslations } from "@/hooks/use-translations-context"

interface ExperienceSectionProps {
  darkMode: boolean
}

interface Experience {
  role: string
  company: string
  period: string
  description: string
  technologies: string[]
  highlights: string[]
  companyLogo?: string
}

export function ExperienceSection({ darkMode }: ExperienceSectionProps) {
  const { t } = useTranslations()

  const experiences: Experience[] = [
    {
      role: t.role_outsource_fullstack,
      company: t.company_growfund,
      period: "05/2025 - Present",
      description: t.desc_growfund,
      technologies: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "Vercel"],
      highlights: [
        t.highlight_aibinhdan_support,
        t.highlight_codino_build,
        t.highlight_cicd_optimize,
        t.highlight_performance_improve
      ],
      companyLogo: aboutIcons.briefcase
    },
    {
      role: t.role_fullstack,
      company: t.company_vnpt,
      period: "06/2025 - Present",
      description: t.desc_vnpt,
      technologies: ["Python", "TensorFlow", "Node.js", "React"],
      highlights: [
        t.highlight_ai_contribute,
        t.highlight_algorithm_optimize,
        t.highlight_agile_collaborate
      ],
      companyLogo: aboutIcons.code
    },
    {
      role: t.role_chatbot,
      company: t.company_fca,
      period: "2021 - 2024",
      description: t.desc_fca,
      technologies: ["Node.js", "Express", "Socket.io", "MongoDB"],
      highlights: [
        t.highlight_realtime_chatbot,
        t.highlight_backend_optimize,
        t.highlight_system_stability
      ],
      companyLogo: aboutIcons.briefcase
    },
    {
      role: t.role_founder,
      company: t.company_aibinhdan,
      period: "03/2025",
      description: t.desc_aibinhdan,
      technologies: ["Next.js", "React", "Node.js", "TypeScript", "Vercel"],
      highlights: [
        t.highlight_aibinhdan_support,
        t.highlight_product_lifecycle,
        t.highlight_ai_integration
      ],
      companyLogo: aboutIcons.globe
    },
    {
      role: t.role_founder,
      company: "Codino",
      period: "07/2025 - Present",
      description: t.desc_codino,
      technologies: ["React", "Node.js", "TypeScript", "Express", "MongoDB"],
      highlights: [
        t.highlight_simple_platform,
        t.highlight_community_support,
        t.highlight_codino_build
      ],
      companyLogo: aboutIcons.briefcase
    }
  ]  

  return (
    <section id="experience" className="py-20 lg:py-32 px-4 lg:px-6 relative overflow-hidden">
              {/* Liquid Glass Background - exactly like Hero */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className={`absolute top-20 left-10 w-80 h-80 ${
              darkMode ? 'bg-white/5' : 'bg-slate-900/5'
            } rounded-full blur-3xl`}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`absolute bottom-20 right-10 w-96 h-96 ${
              darkMode ? 'bg-white/3' : 'bg-slate-900/3'
            } rounded-full blur-3xl`}
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={`text-5xl lg:text-7xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t.experience_section}
          </motion.h2>
          <motion.p
            className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.professional_journey}
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-16 justify-center lg:justify-start`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >


                {/* Experience Card */}
                <motion.div 
                  className="flex-1 lg:ml-16 ml-0 max-w-2xl relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="ios-glass-card border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
                    <CardContent className="p-6 lg:p-8">
                      {/* Card Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <motion.div
                          className={`p-4 rounded-2xl ${
                            darkMode 
                              ? 'bg-white/10 border border-white/20' 
                              : 'bg-slate-100 border border-slate-200'
                          } shadow-sm group-hover:shadow-lg transition-all duration-300`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <ExternalIcon 
                            src={exp.companyLogo || aboutIcons.briefcase} 
                            size={24}
                            className={darkMode ? 'filter invert' : 'filter-none'}
                          />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <motion.h3
                              className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              {exp.role}
                            </motion.h3>
                            <Badge
                              variant="secondary"
                              className={`w-fit mt-2 sm:mt-0 px-4 py-2 text-sm font-medium ${
                                darkMode 
                                  ? 'bg-white/10 text-white border-white/20' 
                                  : 'bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              {exp.period}
                            </Badge>
                          </div>
                          <p className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <motion.p
                        className={`mb-6 text-lg leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {exp.description}
                      </motion.p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className={`text-sm font-semibold mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                          {t.experience_key_achievements}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <motion.div
                              key={highlight}
                              className={`flex items-center gap-2 p-3 rounded-xl ${
                                darkMode 
                                  ? 'bg-white/5 border border-white/10' 
                                  : 'bg-slate-50 border border-slate-100'
                              }`}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: highlightIndex * 0.1 + 0.5, duration: 0.5 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.02, x: 5 }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0" />
                              <span className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className={`text-sm font-semibold mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                          {t.experience_technologies}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.05 + 0.6, duration: 0.3 }}
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
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
