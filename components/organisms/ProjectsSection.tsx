"use client"

import React from "react"
import { useTranslations } from "@/hooks/use-translations-context"
import { useMobileOptimization } from "@/hooks/use-mobile"
import { AnimatedBackground, FadeInUp } from "@/components/atoms"
import { SectionHeader, FeaturedProjectCard, ProjectCard } from "@/components/molecules"

interface ProjectsSectionProps {
  darkMode: boolean
}

interface Project {
  title: string
  description: string
  longDescription?: string
  image: string
  tech: string[]
  github: string
  demo: string
  featured: boolean
  category: string
  status: string
}

export function ProjectsSection({ darkMode }: ProjectsSectionProps) {
  const { t } = useTranslations()
  const { shouldReduceAnimations } = useMobileOptimization()

  const projects: Project[] =[
    {
      "title": t.project_codino_title,
      "description": t.project_codino_desc,
      "longDescription": t.project_codino_long,
      "image": "/assets/images/project-1.png",
      "tech": ["React", "Node.js", "TypeScript", "Express", "MongoDB"],
      "github": "",
      "demo": "https://codino.hnt.io.vn/",
      "featured": true,
      "category": t.category_fullstack,
      "status": t.status_in_progress
    },
    {
      "title": t.project_aibinhdan_title,
      "description": t.project_aibinhdan_desc,
      "longDescription": t.project_aibinhdan_long,
      "image": "/aibinhdan.png",
      "tech": ["Next.js", "React", "Node.js", "Vercel", "TypeScript"],
      "github": "",
      "demo": "https://aibinhdan.vn",
      "featured": true,
      "category": t.category_fullstack,
      "status": t.status_completed
    },
    {
      "title": t.project_vngenai_title,
      "description": t.project_vngenai_desc,
      "longDescription": t.project_vngenai_long,
      "image": "/assets/images/project-2.png",
      "tech": ["React", "Node.js", "TypeScript", "Express", "NestJS", "AWS"],
      "github": "",
      "demo": "Private/Confidential",
      "featured": false,
      "category": t.category_fullstack,
      "status": t.status_in_progress
    },
    {
      "title": t.project_chatbot_title,
      "description": t.project_chatbot_desc,
      "longDescription": t.project_chatbot_long,
      "image": "/assets/images/project-3.png",
      "tech": ["Node.js", "Express", "Socket.io", "MongoDB"],
      "github": "https://github.com/kenjiakira/Fix-FCA-Pack-Share-main",
      "demo": "https://github.com/kenjiakira/Fix-FCA-Pack-Share-main",
      "featured": false,
      "category": t.category_backend,
      "status": t.status_completed
    },
    {
      "title": t.project_portfolio_title,
      "description": t.project_portfolio_desc,
      "longDescription": t.project_portfolio_long,
      "image": "/assets/images/project-4.png",
      "tech": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      "github": "https://github.com/kenjiakira/portfolio",
      "demo": "https://hnt.io.vn",
      "featured": false,
      "category": t.category_frontend,
      "status": t.status_completed
    },
    {
      "title": t.project_mytel_genai_title,
      "description": t.project_mytel_genai_desc,
      "longDescription": t.project_mytel_genai_long,
      "image": "/assets/images/project-6.png",
      "tech": ["React", "Node.js", "TypeScript", "AI/ML", "Python", "AWS"],
      "github": "",
      "demo": "Private/Confidential",
      "featured": false,
      "category": t.category_fullstack,
      "status": t.status_in_progress
    },
    {
      "title": t.project_growfund_title,
      "description": t.project_growfund_desc,
      "longDescription": t.project_growfund_long,
      "image": "/assets/images/project-7.png",
      "tech": [],
      "github": "",
      "demo": "",
      "featured": false,
      "category": t.category_fullstack,
      "status": t.status_in_progress
    },
    {
      "title": t.project_coming_soon_title,
      "description": t.project_coming_soon_desc,
      "longDescription": t.project_coming_soon_long,
      "image": "/assets/images/project-5.png",
      "tech": [],
      "github": "",
      "demo": "",
      "featured": false,
      "category": t.category_planning,
      "status": t.status_planned
    }
  ]
  

  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 lg:py-32 px-4 lg:px-6 relative overflow-hidden">
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
          title={t.projects}
          subtitle={t.projects_description}
          darkMode={darkMode}
        />

        {/* Featured Project - Full Width */}
        {featuredProject && (
          <FeaturedProjectCard
            project={featuredProject}
            darkMode={darkMode}
            viewDemoText={t.view_live_demo}
          />
        )}

        {/* Other Projects - Grid Layout */}
        <FadeInUp
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          duration={0.6}
          delay={0.2}
          lazy={true}
          reduceMotion={shouldReduceAnimations}
        >
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </FadeInUp>
      </div>
    </section>
  )
}
