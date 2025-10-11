"use client"

import React from "react"
import { aboutIcons } from "@/components/ui/external-icon"
import { useTranslations } from "@/hooks/use-translations-context"
import { useMobileOptimization } from "@/hooks/use-mobile"
import { AnimatedBackground } from "@/components/atoms"
import { SectionHeader, ExperienceCard } from "@/components/molecules"

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
  const { shouldReduceAnimations } = useMobileOptimization()

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
      companyLogo: aboutIcons.company
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
      companyLogo: aboutIcons.bot
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
      companyLogo: aboutIcons.ceo
    }
  ]  

  return (
    <section id="experience" className="py-20 lg:py-32 px-4 lg:px-6 relative overflow-hidden">
      {/* Liquid Glass Background - tối ưu */}
      {!shouldReduceAnimations && (
        <div className="absolute inset-0 pointer-events-none">
          <AnimatedBackground
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
            reduceMotion={shouldReduceAnimations}
          />
          <AnimatedBackground
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
            reduceMotion={shouldReduceAnimations}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <SectionHeader
          title={t.experience_section}
          subtitle={t.professional_journey}
          darkMode={darkMode}
        />

        {/* Timeline Container */}
        <div className="relative">
          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                index={index}
                darkMode={darkMode}
                achievementsTitle={t.experience_key_achievements}
                technologiesTitle={t.experience_technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
