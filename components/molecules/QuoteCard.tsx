import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { LiquidGlassCard } from "@/components/atoms"
import { QuoteHeader } from "./QuoteHeader"
import { EngagementStats } from "./EngagementStats"

interface TechQuote {
  author: string
  handle: string
  avatar: string
  contentKey: string
  date: string
  likes: string
  retweets: string
  replies: string
  verified: boolean
  company: string
}

interface QuoteCardProps {
  quote: TechQuote
  content: string
  index: number
  darkMode?: boolean
}

export function QuoteCard({ quote, content, index, darkMode = false }: QuoteCardProps) {
  return (
    <OptimizedMotion
      as="div"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="h-full"
    >
      <LiquidGlassCard className="hover:shadow-3xl transition-all duration-500 group h-full">
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <QuoteHeader
            author={quote.author}
            handle={quote.handle}
            avatar={quote.avatar}
            date={quote.date}
            company={quote.company}
            verified={quote.verified}
            darkMode={darkMode}
          />

          {/* Content */}
          <OptimizedMotion
            as="p"
            className={`mb-6 flex-grow text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            &quot;{content}&quot;
          </OptimizedMotion>

          {/* Engagement Stats */}
          <EngagementStats
            replies={quote.replies}
            retweets={quote.retweets}
            likes={quote.likes}
            darkMode={darkMode}
          />
        </div>
      </LiquidGlassCard>
    </OptimizedMotion>
  )
}

