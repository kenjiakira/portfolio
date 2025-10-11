import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { Avatar } from "@/components/atoms/Avatar"
import { VerifiedBadge } from "@/components/atoms/VerifiedBadge"

interface QuoteHeaderProps {
  author: string
  handle: string
  avatar: string
  date: string
  company: string
  verified?: boolean
  darkMode?: boolean
}

export function QuoteHeader({ 
  author, 
  handle, 
  avatar, 
  date, 
  company, 
  verified = false,
  darkMode = false 
}: QuoteHeaderProps) {
  return (
    <OptimizedMotion
      as="div"
      className="flex items-center gap-3 mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Avatar src={avatar} alt={author} size={48} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className={`font-bold text-sm truncate ${darkMode ? "text-white" : "text-slate-900"}`}>
            {author}
          </h4>
          {verified && <VerifiedBadge />}
        </div>
        <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          {handle} · {date}
        </p>
        <p className={`text-xs font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
          {company}
        </p>
      </div>
    </OptimizedMotion>
  )
}

