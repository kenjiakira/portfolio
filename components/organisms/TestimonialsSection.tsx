"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MessageCircle, Heart, Repeat, Share } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "@/hooks/use-translations-context"

interface TestimonialsSectionProps {
  darkMode: boolean
}

interface TechQuote {
  author: string
  handle: string
  avatar: string
  content: string
  date: string
  likes: string
  retweets: string
  replies: string
  verified: boolean
  company: string
}

export function TestimonialsSection({ darkMode }: TestimonialsSectionProps) {
  const { t } = useTranslations()

  const techQuotes: TechQuote[] = [
    {
      author: "Elon Musk",
      handle: "@elonmusk",
      avatar: "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
      content: "The future of AI is not just about building smarter machines, but about creating tools that amplify human potential. The best developers are those who understand both technology and human needs.",
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
      content: "Software is eating the world, but the most impactful code is written by developers who think about accessibility, sustainability, and how their work affects billions of people.",
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
      content: "The best developers don't just write code - they solve real problems. They understand that technology should make life better, simpler, and more accessible for everyone.",
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
      content: "The most valuable skill in tech isn't just coding - it's the ability to learn quickly, adapt to new technologies, and build things that people actually want to use.",
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
      content: "Great developers focus on impact. They build products that connect people, solve real problems, and create value for millions of users around the world.",
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
      content: "The future belongs to developers who can harness the power of AI to create applications that were previously impossible. Innovation happens at the intersection of technology and creativity.",
      date: "2w",
      likes: "33.8K",
      retweets: "8.7K",
      replies: "2.4K",
      verified: true,
      company: "NVIDIA"
    }
  ]

  return (
    <section className="py-20 lg:py-32 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={`text-5xl lg:text-7xl font-bold text-center mb-20 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t.testimonials}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techQuotes.map((quote, index) => (
              <motion.div
                key={quote.author}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className={`ios-glass-card border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group h-full hover:scale-105 ${
                  darkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'
                }`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Header */}
                    <motion.div
                      className="flex items-center gap-3 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Image
                          src={quote.avatar}
                          alt={quote.author}
                          width={48}
                          height={48}
                          className="rounded-full ring-2 ring-blue-500/20"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className={`font-bold text-sm truncate ${darkMode ? "text-white" : "text-slate-900"}`}>
                            {quote.author}
                          </h4>
                          {quote.verified && (
                            <Badge variant="secondary" className="h-4 w-4 p-0 bg-blue-500 text-white rounded-full flex items-center justify-center">
                              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </Badge>
                          )}
                        </div>
                        <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                          {quote.handle} · {quote.date}
                        </p>
                        <p className={`text-xs font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                          {quote.company}
                        </p>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.p
                      className={`mb-6 flex-grow text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      "{quote.content}"
                    </motion.p>

                    {/* Engagement Stats */}
                    <motion.div
                      className="flex items-center justify-between text-xs"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-4">
                        <motion.button
                          className={`flex items-center gap-1 ${darkMode ? "text-slate-400 hover:text-red-400" : "text-slate-500 hover:text-red-500"}`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>{quote.replies}</span>
                        </motion.button>
                        
                        <motion.button
                          className={`flex items-center gap-1 ${darkMode ? "text-slate-400 hover:text-green-400" : "text-slate-500 hover:text-green-500"}`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Repeat className="h-4 w-4" />
                          <span>{quote.retweets}</span>
                        </motion.button>
                        
                        <motion.button
                          className={`flex items-center gap-1 ${darkMode ? "text-slate-400 hover:text-red-400" : "text-slate-500 hover:text-red-500"}`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Heart className="h-4 w-4" />
                          <span>{quote.likes}</span>
                        </motion.button>
                      </div>
                      
                      <motion.button
                        className={`${darkMode ? "text-slate-400 hover:text-blue-400" : "text-slate-500 hover:text-blue-500"}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share className="h-4 w-4" />
                      </motion.button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
