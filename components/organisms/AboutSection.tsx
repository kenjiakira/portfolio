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
    { name: t.skill_problem_solving, level: 95, iconSrc: aboutIcons.target },
    { name: t.skill_team_leadership, level: 90, iconSrc: aboutIcons.users },
    { name: t.skill_system_design, level: 88, iconSrc: aboutIcons.code }
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
                  
                  <p className={`text-lg leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    {t.aboutText}
                  </p>

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

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="ios-glass-card border-0 shadow-2xl h-full">
              <CardContent className="p-6">
                <h3 className={`text-xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  {t.core_strengths}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ExternalIcon 
                            src={skill.iconSrc} 
                            size={16}
                            className={`${darkMode ? "filter invert opacity-70" : "opacity-70"}`}
                          />
                          <span className={`text-sm font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full ${darkMode ? 'bg-white/10' : 'bg-slate-200'} rounded-full h-2`}>
                        <motion.div
                          className={`h-2 ${
                            darkMode ? 'bg-white/30' : 'bg-slate-400'
                          } rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.8, duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
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
