"use client"

import React from "react"
import { motion } from "framer-motion"
import { ExternalIcon, aboutIcons } from "@/components/ui/external-icon"
import { useTranslations } from "@/hooks/use-translations-context"
import { CheckCircle, Clock, Award } from "lucide-react"
import { 
  IconContainer,
  TechBadge,
  HighlightedText,
  LiquidGlassCard
} from "@/components/atoms"
import { 
  ValueCard, 
  SkillItem, 
  AchievementCard, 
  CurrentRoleCard,
  SectionHeader,
  StatsItem,
  SubsectionHeader
} from "@/components/molecules"

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
    return <HighlightedText color={color}>{text}</HighlightedText>
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
        <SectionHeader 
          title={t.about}
          subtitle={t.about_subtitle}
          darkMode={darkMode}
        />

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
            <LiquidGlassCard className="hover:shadow-3xl transition-all duration-500 group h-full">
              <div className="p-6 lg:p-8">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <IconContainer
                      iconSrc={aboutIcons.user}
                      size={24}
                      darkMode={darkMode}
                    />
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
                            {["Next.js", "React", "Node.js", "TypeScript"].map((tech, techIndex) => (
                              <TechBadge key={tech} darkMode={darkMode} index={techIndex}>
                                {tech}
                              </TechBadge>
                            ))}
                          </span>
                        ),
                        principles: (
                          <span className="font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            {t.highlight_principles}
                          </span>
                        )
                      })}
                    </p>
                  </div>

                  {/* Current Role */}
                  <CurrentRoleCard
                    role={t.current_role}
                    company={t.current_company}
                    period={t.current_period}
                    iconSrc={aboutIcons.briefcase}
                    darkMode={darkMode}
                  />
                </motion.div>
              </div>
            </LiquidGlassCard>
          </motion.div>

          {/* Modern Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <LiquidGlassCard className="h-full relative overflow-hidden">
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
              
              <div className="p-6 relative z-10">
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
                      {t.tech_stack}
                    </span>
                  </h3>
                </div>
                
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <SkillItem
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      iconSrc={skill.iconSrc}
                      darkMode={darkMode}
                      index={index}
                    />
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
                    <StatsItem
                      value="3+"
                      label={t.years_experience}
                      from="from-blue-600"
                      to="to-purple-600"
                      darkMode={darkMode}
                    />
                    <StatsItem
                      value="10+"
                      label={t.projects_built}
                      from="from-green-600"
                      to="to-emerald-600"
                      darkMode={darkMode}
                    />
                  </div>
                </motion.div>
              </div>
            </LiquidGlassCard>
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
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
                iconSrc={value.iconSrc}
                darkMode={darkMode}
                index={index}
              />
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
          <SubsectionHeader 
            title={t.achievements}
            subtitle={t.certificates_subtitle}
            darkMode={darkMode}
          />
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => {
              const StatusIcon = getStatusIcon(achievement.status)
              const statusColor = getStatusColor(achievement.status)
              
              return (
                <AchievementCard
                  key={achievement.title}
                  title={achievement.title}
                  date={achievement.date}
                  description={achievement.description}
                  iconSrc={achievement.iconSrc}
                  link={achievement.link}
                  status={achievement.status}
                  statusIcon={StatusIcon}
                  statusColor={statusColor}
                  darkMode={darkMode}
                  index={index}
                  viewCertText={t.view_certificate}
                />
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
