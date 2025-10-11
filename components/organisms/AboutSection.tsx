"use client"

import React from "react"
import { ExternalIcon, aboutIcons } from "@/components/ui/external-icon"
import { useTranslations } from "@/hooks/use-translations-context"
import { useMobileOptimization } from "@/hooks/use-mobile"
import { CheckCircle, Clock, Award } from "lucide-react"
import { 
  IconContainer,
  TechBadge,
  HighlightedText,
  LiquidGlassCard,
  OptimizedMotion,
  AnimatedBackground,
  FadeInUp,
  FadeInLeft
} from "@/components/atoms"
import { 
  ValueCard, 
  AchievementCard, 
  CurrentRoleCard,
  SectionHeader,
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

interface Value {
  title: string
  description: string
  iconSrc: string
}

export function AboutSection({ darkMode }: AboutSectionProps) {
  const { t } = useTranslations()
  const { shouldReduceAnimations } = useMobileOptimization()

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


  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Minimal Background Elements - tối ưu */}
      {!shouldReduceAnimations && (
        <div className="absolute inset-0 pointer-events-none">
          <AnimatedBackground
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
            reduceMotion={shouldReduceAnimations}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <SectionHeader 
          title={t.about}
          subtitle={t.about_subtitle}
          darkMode={darkMode}
        />

        {/* Main Content */}
        <div className="mb-16 lg:mb-20">
          {/* About Text Card */}
          <FadeInLeft
            duration={0.6}
            delay={0.1}
            lazy={true}
            reduceMotion={shouldReduceAnimations}
          >
            <LiquidGlassCard className="hover:shadow-3xl transition-all duration-500 group h-full">
              <div className="p-6 lg:p-8">
                <OptimizedMotion
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  lazy={true}
                  reduceMotion={shouldReduceAnimations}
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
                        age: createHighlight(t.highlight_age, 'blue'),
                        university: createHighlight(t.highlight_university, 'purple'),
                        products: createHighlight(t.highlight_products, 'cyan'),
                        life: createHighlight(t.highlight_life, 'emerald'),
                        web: createHighlight(t.highlight_web, 'blue'),
                        ai_fields: createHighlight(t.highlight_ai_fields, 'purple')
                      })}
                    </p>
                    
                    <p className="mb-4">
                      {parseTemplate(t.about_journey, {
                        passion: createHighlight(t.highlight_passion, 'orange'),
                        stages: createHighlight(t.highlight_stages, 'cyan'),
                        feeling: createHighlight(t.highlight_feeling, 'emerald')
                      })}
                    </p>

                    <p className="mb-4">
                      {parseTemplate(t.about_philosophy, {
                        philosophy: createHighlight(t.highlight_philosophy, 'blue'),
                        needs: createHighlight(t.highlight_needs, 'purple'),
                        combination: createHighlight(t.highlight_combination, 'cyan')
                      })}
                    </p>

                    <p className="mb-4">
                      {parseTemplate(t.about_current_project, {
                        vnlotus: createHighlight(t.highlight_vnlotus, 'gradient'),
                        features: createHighlight(t.highlight_features, 'blue'),
                        goal: createHighlight(t.highlight_goal, 'emerald'),
                        spirit: createHighlight(t.highlight_spirit, 'purple')
                      })}
                    </p>

                    <p className="mb-4">
                      {parseTemplate(t.about_vision, {
                        future_role: createHighlight(t.highlight_future_role, 'cyan'),
                        meaningful_projects: createHighlight(t.highlight_meaningful_projects, 'orange')
                      })}
                    </p>

                    <p className={`text-xl font-semibold italic ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {parseTemplate(t.about_conclusion, {
                        motto: createHighlight(t.highlight_motto, 'gradient')
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
                </OptimizedMotion>
              </div>
            </LiquidGlassCard>
          </FadeInLeft>
        </div>

        {/* Values Grid */}
        <FadeInUp
          className="mb-20"
          duration={0.6}
          delay={0.2}
          lazy={true}
          reduceMotion={shouldReduceAnimations}
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
        </FadeInUp>

        {/* Certificates */}
        <FadeInUp
          duration={0.6}
          delay={0.3}
          lazy={true}
          reduceMotion={shouldReduceAnimations}
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
        </FadeInUp>
      </div>
    </section>
  )
}
