"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalIcon } from "@/components/ui/external-icon"
import { useTranslations } from "@/hooks/use-translations"

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
            {t.skills}
          </motion.h2>
          <motion.p
            className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technologies and tools I use to build amazing digital experiences
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12 lg:space-y-16">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Category Title */}
              <motion.div
                className="flex items-center justify-center gap-3 mb-6 lg:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 + 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`p-2 rounded-xl ${
                    darkMode 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-slate-100 border border-slate-200'
                  } shadow-sm`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <ExternalIcon 
                    src={category.categoryIcon} 
                    size={20}
                    className={darkMode ? 'filter invert' : 'filter-none'}
                  />
                </motion.div>
                <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  {category.category}
                </h3>
              </motion.div>

              {/* Skills Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + categoryIndex * 0.2 + 0.4, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Badge
                      variant="outline"
                      className={`px-4 py-3 text-sm font-medium rounded-full border-2 transition-all duration-300 ${
                        darkMode
                          ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                      } hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2`}
                    >
                      <ExternalIcon 
                        src={skill.icon} 
                        size={16}
                        className="filter-none"
                      />
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
