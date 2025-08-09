"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, Sparkles } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "@/hooks/use-translations-context"

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

  const projects: Project[] =[
    {
      "title": t.project_codino_title,
      "description": t.project_codino_desc,
      "longDescription": t.project_codino_long,
      "image": "/assets/images/project-1.png",
      "tech": ["React", "Node.js", "TypeScript", "Express", "MongoDB"],
      "github": "",
      "demo": "https://codino-demo.example.com",
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
      "tech": ["React", "Node.js", "TypeScript", "Express", "NestJS"],
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
      "demo": "hnt.io.vn",
      "featured": false,
      "category": t.category_frontend,
      "status": t.status_completed
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "from-green-500 to-emerald-600"
      case "In Progress":
        return "from-blue-500 to-indigo-600"
      case "Planned":
        return "from-orange-500 to-yellow-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <section id="projects" className="py-20 lg:py-32 px-4 lg:px-6 relative overflow-hidden">
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
            {t.featured_projects}
          </motion.h2>
          <motion.p
            className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work and creative projects
          </motion.p>
        </motion.div>

        {/* Featured Project - Full Width */}
        {featuredProject && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="ios-glass-card border-0 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-full"
                  >
                    <Image
                      src={featuredProject.image || "/placeholder.svg"}
                      alt={featuredProject.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

                  {/* Featured Badge */}
                  <motion.div
                    className="absolute top-6 left-6"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg px-4 py-2">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Featured Project
                    </Badge>
                  </motion.div>

                  {/* Status Badge */}
                  <motion.div
                    className="absolute top-6 right-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Badge className={`bg-gradient-to-r ${getStatusColor(featuredProject.status)} text-white shadow-lg`}>
                      {featuredProject.status}
                    </Badge>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-10 flex flex-col justify-center">
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="outline" className={`mb-4 ${
                      darkMode 
                        ? 'bg-white/10 text-white border-white/20' 
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {featuredProject.category}
                    </Badge>
                  </motion.div>

                  <motion.h3
                    className={`text-3xl lg:text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    {featuredProject.title}
                  </motion.h3>

                  <motion.p
                    className={`text-lg mb-6 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {featuredProject.longDescription || featuredProject.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className={`text-sm font-semibold mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 + 0.8, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`text-xs font-medium ${
                              darkMode
                                ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                            } transition-all duration-300`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="flex-1"
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full btn-light shadow-lg hover:shadow-xl transition-all duration-300">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t.view_live_demo}
                      </Button>
                    </motion.div>

                    {featuredProject.github && (
                      <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          className={`ios-glass-button ${
                            darkMode ? 'text-white' : 'text-slate-700'
                          }`}
                          onClick={() => window.open(featuredProject.github, '_blank')}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other Projects - Grid Layout */}
              <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="ios-glass-card border-0 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group h-full">
                {/* Project Image */}
                  <div className="relative overflow-hidden">
                  <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Badge */}
                      <motion.div
                    className="absolute top-3 left-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                    <Badge variant="secondary" className="text-xs bg-black/50 text-white border-white/20">
                      {project.category}
                        </Badge>
                      </motion.div>

                  {/* Status Badge */}
                    <motion.div
                    className="absolute top-3 right-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Badge className={`text-xs bg-gradient-to-r ${getStatusColor(project.status)} text-white`}>
                      {project.status}
                    </Badge>
                    </motion.div>
                  </div>

                {/* Project Content */}
                <CardContent className="p-6">
                  <motion.h4
                    className={`text-lg font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    >
                      {project.title}
                  </motion.h4>

                    <motion.p
                    className={`text-sm mb-4 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>

                  {/* Tech Stack - Limited */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 + 0.4, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              darkMode
                                ? 'bg-white/5 text-white border-white/20'
                                : 'bg-slate-50 text-slate-700 border-slate-200'
                            }`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                    </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.div 
                      className="flex-1"
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button size="sm" className="w-full text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                        </Button>
                      </motion.div>

                    {project.github && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="ios-glass-button"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-3 w-3" />
                        </Button>
                      </motion.div>
                    )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
