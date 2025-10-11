"use client"

import React from "react"
import { useTranslations } from "@/hooks/use-translations-context"
import { useMobileOptimization } from "@/hooks/use-mobile"
import { AnimatedBackground } from "@/components/atoms"
import { SectionHeader, SkillsCategory } from "@/components/molecules"

interface SkillsSectionProps {
  darkMode: boolean
}

interface Skill {
  name: string
  icon: string
}

interface SkillCategory {
  category: string
  description: string
  categoryIcon: string
  items: Skill[]
}

export function SkillsSection({ darkMode }: SkillsSectionProps) {
  const { t } = useTranslations()
  const { shouldReduceAnimations } = useMobileOptimization()

  const skills: SkillCategory[] = [
    {
      category: "Frontend Development",
      description: "Modern web interfaces and user experiences",
      categoryIcon: "/assets/svg/html2.svg",
      items: [
        { name: "REACT", icon: "/assets/svg/react.svg" },
        { name: "NEXT.JS", icon: "/assets/svg/nextjs.svg" },
        { name: "VUE.JS", icon: "/assets/svg/vue.svg" },
        { name: "TAILWIND CSS", icon: "/assets/svg/css.svg" },
        { name: "MATERIAL UI", icon: "/assets/svg/react.svg" },
        { name: "THREE.JS", icon: "/assets/svg/javascript.svg" },
      ],
    },
    {
      category: "Backend Development",
      description: "Server-side architecture and APIs",
      categoryIcon: "/assets/svg/nodejs2.svg",
      items: [
        { name: "NODE.JS", icon: "/assets/svg/nodejs.svg" },
        { name: "EXPRESS.JS", icon: "/assets/svg/express.svg" },
        { name: "NESTJS", icon: "/assets/svg/nestjs.svg" },
        { name: "SOCKET.IO", icon: "/assets/svg/socket-io.svg" },
      ],
    },
    {
      category: "Database & Storage",
      description: "Data management and optimization",
      categoryIcon: "/assets/svg/database.svg",
      items: [
        { name: "MONGODB", icon: "/assets/svg/mongodb.svg" },
        { name: "REDIS", icon: "/assets/svg/redis.svg" },
        { name: "SUPABASE", icon: "/assets/svg/supabase.svg" },
        { name: "FIREBASE", icon: "/assets/svg/firebase.svg" },
      ],
    },
    {
      category: "DevOps & Cloud",
      description: "Infrastructure and deployment automation",
      categoryIcon: "/assets/svg/devops.svg",
      items: [
        { name: "GOOGLE CLOUD", icon: "/assets/svg/google.svg" },
        { name: "AZURE", icon: "/assets/svg/azure.svg" },
        { name: "VERCEL", icon: "/assets/svg/vercel.svg" },
      ],
    },
        {
      category: "Tools & Languages",
      description: "Development tools and programming languages",
      categoryIcon: "/assets/svg/code.svg",
      items: [
        { name: "GIT", icon: "/assets/svg/github.svg" },
        { name: "VS CODE", icon: "/assets/svg/vscode.svg" },
        { name: "POSTMAN", icon: "/assets/svg/postman.svg" },
        { name: "FIGMA", icon: "/assets/svg/figma.svg" },
        { name: "NOTION", icon: "/assets/svg/notion.svg" },
        { name: "SLACK", icon: "/assets/svg/slack.svg" },
        { name: "DISCORD", icon: "/assets/svg/discord.svg" },
      ],
    },
  ]



  return (
    <section id="skills" className="py-20 lg:py-32 px-4 lg:px-6 relative overflow-hidden">
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
          title={t.skills}
          subtitle={t.skills_description}
          darkMode={darkMode}
        />

        {/* Skills Categories */}
        <div className="space-y-12 lg:space-y-16">
          {skills.map((category, categoryIndex) => (
            <SkillsCategory
              key={category.category}
              category={category.category}
              categoryIcon={category.categoryIcon}
              items={category.items}
              darkMode={darkMode}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
