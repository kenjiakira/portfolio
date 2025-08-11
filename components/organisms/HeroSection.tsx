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
import { useTranslations } from "@/hooks/use-translations-context"
import { useMobileOptimization } from "@/hooks/use-mobile"

interface HeroSectionProps {
  darkMode: boolean
  downloadResume: () => void
}

export function HeroSection({ darkMode, downloadResume }: HeroSectionProps) {
  const { t } = useTranslations()
  const { isMobile, shouldReduceAnimations } = useMobileOptimization()

  const socialLinks = [
    { icon: Github, href: "https://github.com/kenjiakira", label: "GitHub", color: "hover:bg-gray-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tu-ngoc-hoang-348557291/", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Mail, href: "mailto:kenjiakira@gmail.com", label: "Email", color: "hover:bg-emerald-600" },
  ]

  // Animation variants for text bounce effect - tối ưu cho mobile
  const bounceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceAnimations ? i * 0.02 : i * 0.05,
        duration: shouldReduceAnimations ? 0.3 : 0.6,
        ease: "easeOut" as const,
      },
    }),
    bounce: (i: number) => ({
      y: shouldReduceAnimations ? [0, -5, 0] : [0, -10, 0],
      transition: {
        delay: shouldReduceAnimations ? i * 0.02 : i * 0.05,
        duration: shouldReduceAnimations ? 0.3 : 0.6,
        ease: "easeInOut" as const,
      },
    }),
  }

  // Function to create animated text - tối ưu cho mobile
  const AnimatedText = ({ text, className, delay = 0, enableBounce = false }: {
    text: string
    className: string
    delay?: number
    enableBounce?: boolean
  }) => {
    // Trên mobile performance thấp, chỉ animate từng từ thay vì từng ký tự
    if (shouldReduceAnimations) {
      return (
        <motion.div
          className={className}
          initial="hidden"
          animate="visible"
          whileHover={enableBounce ? "bounce" : undefined}
        >
          {text.split(" ").map((word, index) => (
            <motion.span
              key={`${text}-${index}`}
              custom={index + delay * 5}
              variants={bounceVariants}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      )
    }

    // PC - giữ nguyên animation từng ký tự
    return (
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
  }

  return (
    <>
      {/* Enhanced Hero Section */}
      <section id="home" className="pt-40 pb-32 px-6 relative overflow-hidden">
        {/* Liquid Glass Background - tối ưu cho mobile */}
        {!shouldReduceAnimations && (
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
        )}
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceAnimations ? 0.5 : 1, ease: "easeOut" }}
              className="space-y-6 lg:space-y-10 relative"
            >
              {/* Floating Dots Background - chỉ hiển thị trên PC */}
              {!shouldReduceAnimations && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {Array.from({ length: isMobile ? 10 : 20 }).map((_, i) => (
                    <motion.div
                      key={`dot-${i}`}
                      className={`absolute w-1 h-1 rounded-full ${
                        darkMode ? 'bg-white/20' : 'bg-slate-900/20'
                      }`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: Math.random() * 4 + 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              )}
              <div className="space-y-4 lg:space-y-6">
                <motion.div
                  className="flex items-center gap-3 text-sm font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceAnimations ? 0.1 : 0.3 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                    animate={{ scale: shouldReduceAnimations ? [1, 1.1, 1] : [1, 1.2, 1] }}
                    transition={{ duration: shouldReduceAnimations ? 1 : 2, repeat: Infinity }}
                  />
                  <motion.div
                    className={`${darkMode ? "text-slate-300" : "text-slate-600"} cursor-pointer`}
                    whileHover={shouldReduceAnimations ? undefined : "bounce"}
                    animate={shouldReduceAnimations ? undefined : "bounce"}
                  >
                    {shouldReduceAnimations ? (
                      <span>Available for new opportunities</span>
                    ) : (
                      "Available for new opportunities".split("").map((char, index) => (
                      <motion.span
                        key={`available-${index}`}
                        className="inline-block"
                        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                        variants={{
                          bounce: {
                            y: [0, -8, 0],
                            transition: {
                              delay: index * 0.05,
                              duration: 0.8,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatDelay: 2
                            }
                          }
                        }}
                      >
                        {char}
                      </motion.span>
                    )))}
                  </motion.div>
                </motion.div>

                <motion.h1
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceAnimations ? 0.2 : 0.4, duration: shouldReduceAnimations ? 0.4 : 0.8 }}
                >
                  {t.name}
                </motion.h1>

                <AnimatedText
                  text={t.title}
                  className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold ${
                    darkMode ? "text-white" : "text-slate-900"
                  } cursor-pointer`}
                  delay={shouldReduceAnimations ? 0.3 : 0.5}
                  enableBounce={!shouldReduceAnimations}
                />

                <AnimatedText
                  text={t.subtitle}
                  className={`text-lg sm:text-xl lg:text-2xl ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  } cursor-pointer`}
                  delay={shouldReduceAnimations ? 0.4 : 0.8}
                  enableBounce={!shouldReduceAnimations}
                />
              </div>
              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceAnimations ? 0.5 : 0.8, duration: shouldReduceAnimations ? 0.4 : 0.8 }}
              >
                <motion.div 
                  className="relative p-1 rounded-2xl"
                  style={{
                    background: darkMode
                      ? 'linear-gradient(45deg, #ffffff, #f8fafc, #e2e8f0, #ffffff)'
                      : 'linear-gradient(45deg, #1e293b, #475569, #64748b, #1e293b)',
                    backgroundSize: '400% 400%',
                    animation: shouldReduceAnimations ? 'none' : 'gradientShift 3s ease-in-out infinite',
                  }}
                  animate={shouldReduceAnimations ? {} : {
                    filter: darkMode 
                      ? [
                          'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))',
                          'drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))',
                          'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
                        ]
                      : [
                          'drop-shadow(0 0 10px rgba(30, 41, 59, 0.3))',
                          'drop-shadow(0 0 20px rgba(30, 41, 59, 0.6))',
                          'drop-shadow(0 0 10px rgba(30, 41, 59, 0.3))'
                        ]
                  }}
                  transition={shouldReduceAnimations ? {} : {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.button
                    onClick={downloadResume}
                    className="group relative px-8 py-4 btn-light font-semibold rounded-2xl button-shadow-dramatic transition-all duration-300 overflow-hidden w-full"
                    whileHover={shouldReduceAnimations ? {} : { scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`absolute inset-0 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-white/20 to-white/30' 
                        : 'bg-gradient-to-r from-slate-700 to-slate-900'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`relative flex items-center gap-3 transition-colors duration-300 ${
                      darkMode 
                        ? 'text-slate-900 group-hover:text-slate-800' 
                        : 'text-white group-hover:text-slate-100'
                    }`}>
                      <Download className="h-5 w-5" />
                      {t.downloadCV}
                    </div>
                  </motion.button>
                </motion.div>

                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={social.label}
                      className={`p-4 rounded-2xl ios-glass-button hover:scale-110 transition-all duration-300 ${social.color} group`}
                      whileHover={shouldReduceAnimations ? {} : { scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: shouldReduceAnimations ? 0.6 + index * 0.05 : 0.9 + index * 0.1 }}
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
                transition={{ delay: shouldReduceAnimations ? 0.7 : 1, duration: shouldReduceAnimations ? 0.4 : 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <MapPin className={`h-5 w-5 ${darkMode ? "text-slate-400" : "text-slate-600"}`} />
                  <span className={darkMode ? "text-slate-300" : "text-slate-600"}>{t.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className={`h-5 w-5 ${darkMode ? "text-slate-400" : "text-slate-600"}`} />
                  <span className={darkMode ? "text-slate-300" : "text-slate-600"}>{t.open_to_coffee}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceAnimations ? 0.5 : 1, delay: shouldReduceAnimations ? 0.1 : 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative max-w-lg mx-auto">
                {/* Glow Effect Container - tối ưu cho mobile */}
                <motion.div 
                  className="relative p-1 rounded-3xl"
                  style={{
                    background: darkMode
                      ? 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #3b82f6)'
                      : 'linear-gradient(45deg, #1e40af, #7c3aed, #0891b2, #059669, #1e40af)',
                    backgroundSize: '400% 400%',
                    animation: shouldReduceAnimations ? 'none' : 'gradientShift 4s ease-in-out infinite',
                  }}
                  animate={shouldReduceAnimations ? {} : {
                    filter: darkMode 
                      ? [
                          'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.2))',
                          'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5)) drop-shadow(0 0 60px rgba(139, 92, 246, 0.3))',
                          'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.2))'
                        ]
                      : [
                          'drop-shadow(0 0 15px rgba(30, 64, 175, 0.3)) drop-shadow(0 0 30px rgba(124, 58, 237, 0.2))',
                          'drop-shadow(0 0 25px rgba(30, 64, 175, 0.5)) drop-shadow(0 0 50px rgba(124, 58, 237, 0.3))',
                          'drop-shadow(0 0 15px rgba(30, 64, 175, 0.3)) drop-shadow(0 0 30px rgba(124, 58, 237, 0.2))'
                        ]
                  }}
                  transition={shouldReduceAnimations ? {} : {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Main Image Container */}
                  <motion.div
                    className="relative z-10 overflow-hidden rounded-3xl ios-glass-card shadow-2xl"
                    whileHover={shouldReduceAnimations ? {} : { scale: 1.02, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: shouldReduceAnimations ? 100 : 300 }}
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
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
