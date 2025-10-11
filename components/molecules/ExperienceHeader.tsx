import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { CompanyLogo } from "@/components/atoms/CompanyLogo"
import { PeriodBadge } from "@/components/atoms/PeriodBadge"
import { GradientText } from "@/components/atoms/GradientText"

interface ExperienceHeaderProps {
  role: string
  company: string
  period: string
  companyLogo: string
  darkMode?: boolean
}

export function ExperienceHeader({ 
  role, 
  company, 
  period, 
  companyLogo,
  darkMode = false 
}: ExperienceHeaderProps) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <CompanyLogo iconSrc={companyLogo} darkMode={darkMode} />
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <OptimizedMotion
            as="h3"
            className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {role}
          </OptimizedMotion>
          <PeriodBadge period={period} darkMode={darkMode} />
        </div>
        <p className="text-xl font-semibold">
          <GradientText from="from-blue-600" to="to-purple-600">
            {company}
          </GradientText>
        </p>
      </div>
    </div>
  )
}

