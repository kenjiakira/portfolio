import React from "react"
import { motion } from "framer-motion"
import { CategoryTitle } from "./CategoryTitle"
import { SkillBadge } from "@/components/atoms/SkillBadge"

interface Skill {
  name: string
  icon: string
}

interface SkillsCategoryProps {
  category: string
  categoryIcon: string
  items: Skill[]
  darkMode?: boolean
  categoryIndex?: number
}

export function SkillsCategory({ 
  category, 
  categoryIcon, 
  items, 
  darkMode = false,
  categoryIndex = 0
}: SkillsCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <CategoryTitle
        title={category}
        icon={categoryIcon}
        darkMode={darkMode}
        categoryIndex={categoryIndex}
      />

      {/* Skills Badges */}
      <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
        {items.map((skill, index) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            darkMode={darkMode}
            index={index}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>
    </motion.div>
  )
}

