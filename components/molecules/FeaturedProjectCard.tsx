import React from "react"
import { motion } from "framer-motion"
import { LiquidGlassCard } from "@/components/atoms"
import { ProjectImage } from "./ProjectImage"
import { ProjectStatusBadge } from "@/components/atoms/ProjectStatusBadge"
import { CategoryBadge } from "@/components/atoms/CategoryBadge"
import { ProjectTechStack } from "./ProjectTechStack"
import { ProjectActions } from "./ProjectActions"

interface FeaturedProject {
  title: string
  description: string
  longDescription?: string
  image: string
  tech: string[]
  github: string
  demo: string
  category: string
  status: string
}

interface FeaturedProjectCardProps {
  project: FeaturedProject
  darkMode?: boolean
  viewDemoText: string
}

export function FeaturedProjectCard({ 
  project, 
  darkMode = false,
  viewDemoText 
}: FeaturedProjectCardProps) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <LiquidGlassCard className="overflow-hidden hover:shadow-3xl transition-all duration-500 group">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Project Image */}
          <div className="relative">
            <ProjectImage
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-full object-cover min-h-[400px]"
              overlayGradient="light"
            />

            {/* Status Badge */}
            <motion.div
              className="absolute top-6 right-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectStatusBadge status={project.status} className="shadow-lg" />
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
              <CategoryBadge category={project.category} darkMode={darkMode} />
            </motion.div>

            <motion.h3
              className={`text-3xl lg:text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className={`text-lg mb-6 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {project.longDescription || project.description}
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
              <ProjectTechStack 
                technologies={project.tech} 
                darkMode={darkMode}
                variant="full"
              />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ProjectActions
                demoUrl={project.demo}
                githubUrl={project.github}
                demoText={viewDemoText}
                darkMode={darkMode}
              />
            </motion.div>
          </div>
        </div>
      </LiquidGlassCard>
    </motion.div>
  )
}

