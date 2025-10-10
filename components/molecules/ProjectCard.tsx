import React from "react"
import { motion } from "framer-motion"
import { LiquidGlassCard } from "@/components/atoms"
import { ProjectImage } from "./ProjectImage"
import { CategoryBadge } from "@/components/atoms/CategoryBadge"
import { ProjectStatusBadge } from "@/components/atoms/ProjectStatusBadge"
import { ProjectTechStack } from "./ProjectTechStack"
import { ProjectActions } from "./ProjectActions"

interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo: string
  category: string
  status: string
}

interface ProjectCardProps {
  project: Project
  index: number
  darkMode?: boolean
}

export function ProjectCard({ 
  project, 
  index,
  darkMode = false 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <LiquidGlassCard className="overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
        {/* Project Image */}
        <div className="relative">
          <ProjectImage
            src={project.image}
            alt={project.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            overlayGradient="dark"
          />

          {/* Category Badge */}
          <motion.div
            className="absolute top-3 left-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CategoryBadge 
              category={project.category} 
              variant="overlay"
            />
          </motion.div>

          {/* Status Badge */}
          <motion.div
            className="absolute top-3 right-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ProjectStatusBadge status={project.status} className="text-xs" />
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-1">
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
            <ProjectTechStack 
              technologies={project.tech} 
              darkMode={darkMode}
              variant="limited"
              limit={3}
            />
          </div>

          {/* Action Buttons - Always at bottom */}
          <div className="mt-auto">
            <ProjectActions
              demoUrl={project.demo}
              githubUrl={project.github}
              size="sm"
              darkMode={darkMode}
            />
          </div>
        </div>
      </LiquidGlassCard>
    </motion.div>
  )
}

