"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "@/hooks/use-translations"

interface TestimonialsSectionProps {
  darkMode: boolean
}

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export function TestimonialsSection({ darkMode }: TestimonialsSectionProps) {
  const { t } = useTranslations()

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      content:
        "Alex is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and leadership skills have been instrumental in our team's success.",
      avatar: "/testimonial-1.png",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content:
        "Working with Alex was a game-changer for our startup. He built our entire platform from scratch and it scaled beautifully to handle millions of users.",
      avatar: "/testimonial-2.png",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Design Director",
      company: "DigitalAgency",
      content:
        "Alex has an incredible eye for detail and user experience. He transformed our designs into pixel-perfect, performant web applications.",
      avatar: "/testimonial-3.png",
      rating: 5,
    },
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="ios-glass-card border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group h-full hover:scale-105">
                  <CardContent className="p-8 flex flex-col h-full">
                    <motion.div
                      className="flex items-center gap-1 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1 + 0.4, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Quote className={`h-10 w-10 ${darkMode ? "text-slate-600" : "text-slate-400"}`} />
                    </motion.div>

                    <motion.p
                      className={`mb-8 flex-grow text-lg leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      "{testimonial.content}"
                    </motion.p>

                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="rounded-full ring-4 ring-white/20"
                        />
                      </motion.div>
                      <div>
                        <h4 className={`font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
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
