"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "@/hooks/use-translations-context"
import { SectionHeader, QuoteCard } from "@/components/molecules"

interface FamousQuotesSectionProps {
  darkMode: boolean
}

interface TechQuote {
  author: string
  handle: string
  avatar: string
  contentKey: string // Key for translation
  date: string
  likes: string
  retweets: string
  replies: string
  verified: boolean
  company: string
}

export function FamousQuotesSection({ darkMode }: FamousQuotesSectionProps) {
  const { t } = useTranslations()

  const techQuotes: TechQuote[] = [
    {
      author: "Elon Musk",
      handle: "@elonmusk",
      avatar: "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
      contentKey: "quote_elon_content",
      date: "2h",
      likes: "45.2K",
      retweets: "12.8K",
      replies: "3.4K",
      verified: true,
      company: "Tesla & SpaceX"
    },
    {
      author: "Bill Gates",
      handle: "@BillGates",
      avatar: "/assets/images/bill-gates.jpg",
      contentKey: "quote_bill_content",
      date: "5h",
      likes: "38.7K",
      retweets: "9.2K",
      replies: "2.1K",
      verified: true,
      company: "Microsoft"
    },
    {
      author: "Sundar Pichai",
      handle: "@sundarpichai",
      avatar: "/assets/images/sundar-pichai.jpg",
      contentKey: "quote_sundar_content",
      date: "1d",
      likes: "29.4K",
      retweets: "7.6K",
      replies: "1.8K",
      verified: true,
      company: "Google"
    },
    {
      author: "Sam Altman",
      handle: "@sama",
      avatar: "/assets/images/sam-altman.jpg",
      contentKey: "quote_sam_content",
      date: "3d",
      likes: "52.1K",
      retweets: "15.3K",
      replies: "4.7K",
      verified: true,
      company: "OpenAI"
    },
    {
      author: "Mark Zuckerberg",
      handle: "@finkd",
      avatar: "/assets/images/mark-zuckerberg.jpg",
      contentKey: "quote_mark_content",
      date: "1w",
      likes: "41.3K",
      retweets: "11.9K",
      replies: "3.2K",
      verified: true,
      company: "Meta"
    },
    {
      author: "Jensen Huang",
      handle: "@JensenHuang",
      avatar: "/assets/images/jensen-huang.jpg",
      contentKey: "quote_jensen_content",
      date: "2w",
      likes: "33.8K",
      retweets: "8.7K",
      replies: "2.4K",
      verified: true,
      company: "NVIDIA"
    }
  ]

  return (
    <section className="py-20 lg:py-32 px-4 lg:px-6 relative overflow-hidden">
      {/* Liquid Glass Background - exactly like other sections */}
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
        <SectionHeader
          title={t.testimonials}
          darkMode={darkMode}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techQuotes.map((quote, index) => (
              <QuoteCard
                key={quote.author}
                quote={quote}
                content={t[quote.contentKey as keyof typeof t] as string}
                index={index}
                darkMode={darkMode}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

