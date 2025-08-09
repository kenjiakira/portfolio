"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { 
  Calendar, 
  TrendingUp, 
  Users, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Coffee
} from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

interface HeroSectionProps {
  darkMode: boolean
  downloadResume: () => void
}

export function HeroSection({ darkMode, downloadResume }: HeroSectionProps) {
  const { t } = useTranslations()

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Mail, href: "#", label: "Email", color: "hover:bg-emerald-600" },
  ]

  // Animation variants for text bounce effect
  const bounceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
    bounce: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    }),
  }

  // Function to create animated text
  const AnimatedText = ({ text, className, delay = 0, enableBounce = false }: {
    text: string
    className: string
    delay?: number
    enableBounce?: boolean
  }) => (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      whileHover={enableBounce ? "bounce" : undefined}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${text}-${index}`}
          custom={index + delay * 20}
          variants={bounceVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  )



  return (
    <>
      {/* Enhanced Hero Section */}
      <section id="home" className="pt-40 pb-32 px-6 relative overflow-hidden">
        {/* Liquid Glass Background */}
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
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6 lg:space-y-10"
            >
              <div className="space-y-4 lg:space-y-6">
                <motion.div
                  className="flex items-center gap-3 text-sm font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className={darkMode ? "text-slate-300" : "text-slate-600"}>
                    Available for new opportunities
                  </span>
                </motion.div>

                <motion.h1
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {t.name}
                </motion.h1>

                <AnimatedText
                  text={t.title}
                  className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold ${
                    darkMode ? "text-white" : "text-slate-900"
                  } cursor-pointer`}
                  delay={0.5}
                  enableBounce={true}
                />

                <AnimatedText
                  text={t.subtitle}
                  className={`text-lg sm:text-xl lg:text-2xl ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  } cursor-pointer`}
                  delay={0.8}
                  enableBounce={true}
                />
              </div>
              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.button
                  onClick={downloadResume}
                  className="group relative px-8 py-4 btn-light font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`absolute inset-0 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-white/20 to-white/30' 
                      : 'bg-gradient-to-r from-slate-700 to-slate-900'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`relative flex items-center gap-3 transition-colors duration-300 ${
                    darkMode 
                      ? 'text-slate-300 group-hover:text-white' 
                      : 'text-slate-700 group-hover:text-white'
                  }`}>
                    <Download className="h-5 w-5" />
                    {t.downloadCV}
                  </div>
                </motion.button>

                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={social.label}
                      className={`p-4 rounded-2xl ios-glass-button hover:scale-110 transition-all duration-300 ${social.color} group`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <social.icon className={`h-6 w-6 transition-colors duration-300 ${
                        darkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-white'
                      }`} />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Location & Contact */}
              <motion.div
                className="flex items-center gap-6 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <MapPin className={`h-5 w-5 ${darkMode ? "text-slate-400" : "text-slate-600"}`} />
                  <span className={darkMode ? "text-slate-300" : "text-slate-600"}>{t.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className={`h-5 w-5 ${darkMode ? "text-slate-400" : "text-slate-600"}`} />
                  <span className={darkMode ? "text-slate-300" : "text-slate-600"}>Open to coffee chats</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative max-w-lg mx-auto">
                {/* Main Image Container */}
                <motion.div
                  className="relative z-10 overflow-hidden rounded-3xl ios-glass-card shadow-2xl"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/professional-headshot.png"
                    alt="Kenji Akira"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
