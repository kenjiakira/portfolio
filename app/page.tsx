"use client"

import React, { useState, useEffect } from "react"
import { useTranslations } from "@/hooks/use-translations-context"
import {
  Header, 
  Footer, 
  HeroSection, 
  AboutSection, 
  ExperienceSection, 
  SkillsSection,
  FamousQuotesSection,
  ProjectsSection,
  // TestimonialsSection,
  ContactSection
} from "@/components/organisms"

import { motion } from "framer-motion"
import { ThreeJSBackground } from "@/components/ThreeJSBackground"

const FloatingParticles = React.memo(() => {
  // Adaptive particle count based on device performance - further optimized
  const getParticleCount = React.useCallback(() => {
    if (typeof window === 'undefined') return 6
    
    // Reduce particles for better performance
    const isMobile = window.innerWidth < 768
    const isLowPerformance = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) return 0
    if (isMobile || isLowPerformance) return 3
    return 6 // Reduced for better performance
  }, [])

  // Pre-calculate particles data to avoid recalculation on re-renders
  const particles = React.useMemo(() => {
    if (typeof window === 'undefined') return []
    
    const count = getParticleCount()
    if (count === 0) return []
    
    return [...Array(count)].map((_, i) => ({
      id: i,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      duration: Math.random() * 20 + 20, // 20-40s for smoother animation
      delay: Math.random() * 3, // Reduced stagger
    }))
  }, [getParticleCount])

  // Don't render if no particles
  if (particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/10 rounded-full"
          style={{
            willChange: 'transform, opacity',
            contain: 'layout style paint',
          }}
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: 0,
          }}
          animate={{
            x: [particle.initialX, particle.targetX, particle.initialX],
            y: [particle.initialY, particle.targetY, particle.initialY],
            opacity: [0, 0.4, 0], // Reduced opacity for subtlety
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween",
          }}
        />
      ))}
    </div>
  )
})

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null) // Start with null to indicate loading
  const { mounted } = useTranslations()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection] = useState("home")
  const [isDarkModeReady, setIsDarkModeReady] = useState(false)

  useEffect(() => {
    // Read from localStorage immediately
    const isDark = localStorage.getItem("darkMode")
    // Default to dark mode if no preference saved
    const initialDarkMode = isDark !== null ? isDark === "true" : true
    setDarkMode(initialDarkMode)
    setIsDarkModeReady(true)
    console.log('Initial darkMode set to:', initialDarkMode)
  }, [])

  useEffect(() => {
    if (mounted && darkMode !== null) {
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

  if (!mounted || darkMode === null || !isDarkModeReady) return null

  return (
    <div
      className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900/30 to-slate-800/20"
          : "bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"
      }`}
    >
      {/* Optimized Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 ${darkMode ? "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_40%)]" : "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"}`}
        />
      </div>

      <FloatingParticles />
      
      {/* ThreeJS Background for Dark Mode */}
      <ThreeJSBackground darkMode={darkMode} />

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

      <FamousQuotesSection darkMode={darkMode} />

      <ProjectsSection darkMode={darkMode} />

      {/* <TestimonialsSection darkMode={darkMode} /> */}

      <ContactSection darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  )
}
