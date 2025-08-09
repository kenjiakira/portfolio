"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalIcon, aboutIcons } from "@/components/ui/external-icon"
import { useTranslations } from "@/hooks/use-translations-context"
import { ExternalLink, CheckCircle, Clock, Award } from "lucide-react"

interface AboutSectionProps {
  darkMode: boolean
}

interface Achievement {
  title: string
  date: string
  description: string
  iconSrc: string
  link?: string
  status: string
}

interface Skill {
  name: string
  level: number
  iconSrc: string
}

interface Value {
  title: string
  description: string
  iconSrc: string
}

export function AboutSection({ darkMode }: AboutSectionProps) {
  const { t } = useTranslations()

  // Helper function to create highlighted spans
  const createHighlight = (text: string, color: 'blue' | 'purple' | 'emerald' | 'cyan' | 'orange' | 'gradient') => {
    if (color === 'gradient') {
      return (
        <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {text}
        </span>
      )
    }
    
    const colorClasses = {
      blue: darkMode 
        ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' 
        : 'bg-blue-50 text-blue-700 border border-blue-200',
      purple: darkMode 
        ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30' 
        : 'bg-purple-50 text-purple-700 border border-purple-200',
      emerald: darkMode 
        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' 
        : 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      cyan: darkMode 
        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
        : 'bg-cyan-50 text-cyan-700 border border-cyan-200',
      orange: darkMode 
        ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30' 
        : 'bg-orange-50 text-orange-700 border border-orange-200'
    }
    
    return (
      <span className={`font-semibold px-2 py-1 rounded-lg ${colorClasses[color]}`}>
        {text}
      </span>
    )
  }

  // Helper function to parse template strings with highlights
  const parseTemplate = (template: string, replacements: { [key: string]: React.ReactNode }) => {
    const parts = template.split(/(\{[^}]+\})/)
    return parts.map((part, index) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        const key = part.slice(1, -1)
        return replacements[key] || part
      }
      return part
    }).map((part, index) => (
      <React.Fragment key={index}>{part}</React.Fragment>
    ))
  }

  const getStatusIcon = (status: Achievement['status']) => {
    if (status === t.cert_status_completed) {
      return CheckCircle
    } else if (status === t.cert_status_in_progress) {
      return Clock
    } else if (status === t.cert_status_verified) {
      return Award
    } else {
      return CheckCircle
    }
  }

  const getStatusColor = (status: Achievement['status']) => {
    if (status === t.cert_status_completed) {
      return 'from-green-500 to-emerald-600'
    } else if (status === t.cert_status_in_progress) {
      return 'from-blue-500 to-blue-600'
    } else if (status === t.cert_status_verified) {
      return 'from-purple-500 to-purple-600'
    } else {
      return 'from-gray-500 to-gray-600'
    }
  }

  const achievements: Achievement[] = [
    { 
      title: t.cert_google_title, 
      date: "2024", 
      description: t.cert_google_desc, 
      iconSrc: aboutIcons.google,
      link: "https://www.coursera.org/account/accomplishments/verify/3QPG06Q9DX70",
      status: t.cert_status_completed
    },
    { 
      title: t.cert_ibm_web_title, 
      date: "2025", 
      description: t.cert_ibm_web_desc, 
      iconSrc: aboutIcons.ibm,
      link: "https://www.credly.com/badges/70a2b12a-d263-4219-946c-90b053ad1928",
      status: t.cert_status_completed
    },
    { 
      title: t.cert_meta_title, 
      date: "2025", 
      description: t.cert_meta_desc, 
      iconSrc: aboutIcons.meta,
      link: "https://www.coursera.org/account/accomplishments/verify/O0GTTKX63AZZ",
      status: t.cert_status_verified
    },
    { 
      title: t.cert_ibm_git_title, 
      date: "2025", 
      description: t.cert_ibm_git_desc, 
      iconSrc: aboutIcons.ibm,
      link: "https://www.coursera.org/account/accomplishments/verify/ZODQPMZ9CPIL",
      status: t.cert_status_completed
    },
  ]
  
  const values: Value[] = [
    {
      title: t.value_innovation_title,
      description: t.value_innovation_desc,
      iconSrc: aboutIcons.rocket
    },
    {
      title: t.value_quality_title,
      description: t.value_quality_desc,
      iconSrc: aboutIcons.star
    },
    {
      title: t.value_collaboration_title,
      description: t.value_collaboration_desc,
      iconSrc: aboutIcons.heart
    },
    {
      title: t.value_learning_title,
      description: t.value_learning_desc,
      iconSrc: aboutIcons.book
    }
  ]

  const skills: Skill[] = [
    { name: "AI/ML Integration", level: 92, iconSrc: aboutIcons.cpu },
    { name: "Full-Stack Development", level: 95, iconSrc: aboutIcons.code },
    { name: "Cloud Architecture", level: 88, iconSrc: aboutIcons.cloud },
    { name: "DevOps & CI/CD", level: 85, iconSrc: aboutIcons.deploy }
  ]

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 ${
            darkMode ? 'bg-white/5' : 'bg-slate-900/5'
          } rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
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
            {t.about}
          </motion.h2>
          <motion.p
            className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.about_subtitle}
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {/* About Text Card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="ios-glass-card border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group h-full">
              <CardContent className="p-6 lg:p-8">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl ${
                      darkMode 
                        ? 'bg-white/10 border border-white/20' 
                        : 'bg-slate-100 border border-slate-200'
                    } shadow-sm`}>
                      <ExternalIcon 
                        src={aboutIcons.user} 
                        size={24}
                        className={darkMode ? 'filter invert' : 'filter-none'}
                      />
                    </div>
                    <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {t.about_me_title}
                    </h3>
                  </div>
                  
                  <div className={`text-lg leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    <p className="mb-4">
                      {parseTemplate(t.about_intro, {
                        realname: createHighlight(t.realname, 'gradient'),
                        web: createHighlight(t.highlight_web, 'blue'),
                        ai_fields: createHighlight(t.highlight_ai_fields, 'purple')
                      })}
                    </p>
                    
                    <p className="mb-4">
                      {parseTemplate(t.about_experience, {
                        age: (
                          <span className={`font-bold text-xl ${
                            darkMode ? "text-white" : "text-slate-900"
                          }`}>
                            {t.highlight_age}
                          </span>
                        ),
                        aibinhdan: createHighlight(t.highlight_aibinhdan, 'emerald'),
                        codino: createHighlight(t.highlight_codino, 'cyan'),
                        vnpt: createHighlight(t.highlight_vnpt, 'orange')
                      })}
                    </p>

                    <p>
                      {parseTemplate(t.about_skills, {
                        techs: (
                          <span className="inline-flex flex-wrap gap-1 items-center">
                            {["Next.js", "React", "Node.js", "TypeScript"].map((tech, index) => (
                              <motion.span
                                key={tech}
                                className={`font-medium px-2 py-1 rounded-md text-sm ${
                                  darkMode 
                                    ? 'bg-slate-700/50 text-slate-200 border border-slate-600/50' 
                                    : 'bg-slate-100 text-slate-700 border border-slate-300'
                                }`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </span>
                        ),
                        principles: (
                          <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            {t.highlight_principles}
                          </span>
                        )
                      })}
                    </p>
                  </div>

                  {/* Current Role */}
                  <motion.div
                    className="p-6 rounded-2xl ios-glass-button"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${
                        darkMode 
                          ? 'bg-white/10 border border-white/20' 
                          : 'bg-slate-100 border border-slate-200'
                      } shadow-sm`}>
                        <ExternalIcon 
                          src={aboutIcons.briefcase} 
                          size={20}
                          className={darkMode ? 'filter invert' : 'filter-none'}
                        />
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg ${darkMode ? "text-white" : "text-slate-900"}`}>
                          {t.current_role}
                        </h4>
                        <p className={`font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                          {t.current_company}
                        </p>
                        <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                          {t.current_period}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Modern Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="ios-glass-card border-0 shadow-2xl h-full relative overflow-hidden">
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: darkMode
                    ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05), rgba(6, 182, 212, 0.08))'
                    : 'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.03), rgba(6, 182, 212, 0.04))',
                  backgroundSize: '400% 400%',
                  animation: 'gradientShift 6s ease-in-out infinite',
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className={`p-3 rounded-xl ${
                      darkMode 
                        ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30' 
                        : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
                    } shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ExternalIcon 
                      src={aboutIcons.cpu} 
                      size={24}
                      className={darkMode ? 'filter invert' : 'filter-none'}
                    />
                  </motion.div>
                  <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Tech Stack
                    </span>
                  </h3>
                </div>
                
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.6, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className={`p-2 rounded-lg ${
                              darkMode 
                                ? 'bg-white/10 border border-white/20' 
                                : 'bg-slate-100 border border-slate-200'
                            } shadow-sm`}
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <ExternalIcon 
                              src={skill.iconSrc} 
                              size={16}
                              className={darkMode ? "filter invert" : "filter-none"}
                            />
                          </motion.div>
                          <span className={`font-semibold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                            {skill.name}
                          </span>
                        </div>
                        <motion.span 
                          className={`text-sm font-bold px-3 py-1 rounded-full ${
                            skill.level >= 90 
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                              : skill.level >= 85
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                          } shadow-lg`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.15 + 0.8, type: "spring", stiffness: 300 }}
                          viewport={{ once: true }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <div className={`relative w-full ${darkMode ? 'bg-white/10' : 'bg-slate-200'} rounded-full h-4 overflow-hidden shadow-inner`}>
                        {/* Background glow */}
                        <motion.div
                          className={`absolute inset-0 rounded-full ${
                            skill.level >= 90 
                              ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20'
                              : skill.level >= 85
                                ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
                                : 'bg-gradient-to-r from-orange-500/20 to-amber-500/20'
                          } blur-sm`}
                          animate={{
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Main progress bar */}
                        <motion.div
                          className={`relative h-full rounded-full ${
                            skill.level >= 90 
                              ? 'bg-gradient-to-r from-green-400 via-emerald-500 to-green-600'
                              : skill.level >= 85
                                ? 'bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600'
                                : 'bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600'
                          } shadow-lg overflow-hidden`}
                          initial={{ width: 0, x: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.15 + 1, duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                          style={{
                            backgroundSize: '200% 100%',
                            animation: 'gradientShift 3s ease-in-out infinite',
                            transformOrigin: 'left center'
                          }}
                        >
                          {/* Top highlight */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full" />
                          
                          {/* Animated dots */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-end pr-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.15 + 2, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            {Array.from({ length: 3 }).map((_, dotIndex) => (
                              <motion.div
                                key={dotIndex}
                                className="w-1 h-1 bg-white/60 rounded-full mx-0.5"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: dotIndex * 0.2
                                }}
                              />
                            ))}
                          </motion.div>
                        </motion.div>
                        
                        {/* Shine sweep effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                          initial={{ x: '-100%' }}
                          whileInView={{ x: '200%' }}
                          transition={{ delay: index * 0.15 + 2.5, duration: 1, ease: "easeInOut" }}
                          viewport={{ once: true }}
                        />
                        
                        {/* Pulse border */}
                        <motion.div
                          className={`absolute inset-0 rounded-full border-2 ${
                            skill.level >= 90 
                              ? 'border-green-400/50'
                              : skill.level >= 85
                                ? 'border-blue-400/50'
                                : 'border-orange-400/50'
                          }`}
                          animate={{
                            borderColor: skill.level >= 90 
                              ? ['rgba(74, 222, 128, 0.3)', 'rgba(74, 222, 128, 0.7)', 'rgba(74, 222, 128, 0.3)']
                              : skill.level >= 85
                                ? ['rgba(96, 165, 250, 0.3)', 'rgba(96, 165, 250, 0.7)', 'rgba(96, 165, 250, 0.3)']
                                : ['rgba(251, 146, 60, 0.3)', 'rgba(251, 146, 60, 0.7)', 'rgba(251, 146, 60, 0.3)']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Highlight Stats */}
                <motion.div
                  className="mt-6 pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          4+
                        </span>
                      </div>
                      <div className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        Years Experience
                      </div>
                    </motion.div>
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          30+
                        </span>
                      </div>
                      <div className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        Projects Built
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${darkMode ? "text-white" : "text-slate-900"}`}>
            {t.what_drives_me}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="ios-glass-button border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${
                        darkMode 
                          ? 'bg-white/10 border border-white/20' 
                          : 'bg-slate-100 border border-slate-200'
                      } shadow-sm flex items-center justify-center`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ExternalIcon 
                        src={value.iconSrc} 
                        size={32}
                        className={darkMode ? 'filter invert' : 'filter-none'}
                      />
                    </motion.div>
                    <h4 className={`font-bold text-lg mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {value.title}
                    </h4>
                    <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h3 
              className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.achievements}
            </motion.h3>
            <motion.p
              className={`text-xl ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t.certificates_subtitle}
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => {
              const StatusIcon = getStatusIcon(achievement.status)
              const statusColor = getStatusColor(achievement.status)
              
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="ios-glass-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden h-full">
                    <CardContent className="p-6 lg:p-8">
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
                          <ExternalIcon 
                            src={achievement.iconSrc} 
                            size={32}
                            className="filter-none"
                          />
                        </motion.div>
                        
                        {/* Status Badge */}
                        <motion.div
                          className={`ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${statusColor} text-white font-medium text-sm shadow-lg`}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <StatusIcon size={16} />
                          {achievement.status}
                        </motion.div>
                      </div>
                      
                      {/* Content */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className={`font-bold text-xl leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                            {achievement.title}
                          </h4>
                          <Badge variant="secondary" className={`ml-4 text-sm font-medium ${
                            darkMode 
                              ? 'bg-white/10 text-white border-white/20' 
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}>
                            {achievement.date}
                          </Badge>
                        </div>
                        <p className={`text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                          {achievement.description}
                        </p>
                      </div>
                      
                      {/* Action Button */}
                      {achievement.link && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            onClick={() => window.open(achievement.link, '_blank')}
                            className={`w-full ios-glass-button ${
                              darkMode ? 'text-white' : 'text-slate-700'
                            } group/btn`}
                            variant="outline"
                          >
                            <ExternalLink className="mr-3 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                            {t.view_certificate}
                          </Button>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
