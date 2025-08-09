"use client"

import React, { useState, useEffect } from "react"
import { useTranslations } from "@/hooks/use-translations"
import {
  Header, 
  Footer, 
  HeroSection, 
  AboutSection, 
  ExperienceSection, 
  SkillsSection,
  TestimonialsSection,
  ProjectsSection,
  ContactSection
} from "@/components/organisms"

import { motion } from "framer-motion"

const FloatingParticles = React.memo(() => {
  // Adaptive particle count based on device performance
  const getParticleCount = React.useCallback(() => {
    if (typeof window === 'undefined') return 8
    
    // Reduce particles on mobile or low-performance devices
    const isMobile = window.innerWidth < 768
    const isLowPerformance = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4
    
    if (isMobile || isLowPerformance) return 4
    return 8 // Further reduced for better mobile performance
  }, [])

  // Pre-calculate particles data to avoid recalculation on re-renders
  const particles = React.useMemo(() => {
    if (typeof window === 'undefined') return []
    
    return [...Array(getParticleCount())].map((_, i) => ({
      id: i,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      duration: Math.random() * 15 + 15, // 15-30s instead of 10-30s
      delay: Math.random() * 5, // Stagger start times
    }))
  }, [getParticleCount])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/15 rounded-full floating-particle"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: 0,
          }}
          animate={{
            x: [particle.initialX, particle.targetX, particle.initialX],
            y: [particle.initialY, particle.targetY, particle.initialY],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut", // More natural than linear
            type: "tween", // Use tween instead of spring for better performance
          }}
        />
      ))}
    </div>
  )
})

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const { mounted } = useTranslations()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection] = useState("home")

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode")
    // Default to dark mode if no preference saved
    setDarkMode(isDark !== null ? isDark === "true" : true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", darkMode.toString())
      if (darkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [darkMode, mounted])



  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/alex-johnson-resume.pdf"
    link.download = "Alex-Johnson-Resume.pdf"
    link.click()
  }

  if (!mounted) return null

  return (
    <div
      className={`min-h-screen transition-all duration-700 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20"
          : "bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"
      }`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 ${darkMode ? "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" : "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"}`}
        />

      </div>

      <FloatingParticles />

      <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
      />

      <HeroSection 
        darkMode={darkMode}
        downloadResume={downloadResume}
      />

      <AboutSection darkMode={darkMode} />

      <ExperienceSection darkMode={darkMode} />

      <SkillsSection darkMode={darkMode} />

      <TestimonialsSection darkMode={darkMode} />

      <ProjectsSection darkMode={darkMode} />

      <ContactSection darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  )
}
