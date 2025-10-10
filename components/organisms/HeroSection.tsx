"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations-context"
import { useMobileOptimization } from "@/hooks/use-mobile"
import {
  AvailabilityStatus,
  AnimatedHeading,
  DownloadCVButton,
  SocialLinks,
  LocationContact,
  ProfileImage
} from "@/components/molecules"

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
                <AvailabilityStatus
                  text="Available for new opportunities"
                  darkMode={darkMode}
                  shouldReduceAnimations={shouldReduceAnimations}
                />

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

                <AnimatedHeading
                  text={t.title}
                  className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold ${
                    darkMode ? "text-white" : "text-slate-900"
                  } cursor-pointer`}
                  delay={shouldReduceAnimations ? 0.3 : 0.5}
                  enableBounce={!shouldReduceAnimations}
                  shouldReduceAnimations={shouldReduceAnimations}
                />

                <AnimatedHeading
                  text={t.subtitle}
                  className={`text-lg sm:text-xl lg:text-2xl ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  } cursor-pointer`}
                  delay={shouldReduceAnimations ? 0.4 : 0.8}
                  enableBounce={!shouldReduceAnimations}
                  shouldReduceAnimations={shouldReduceAnimations}
                />
              </div>
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-2 sm:mt-0">
                <DownloadCVButton
                  text={t.downloadCV}
                  onClick={downloadResume}
                  darkMode={darkMode}
                  shouldReduceAnimations={shouldReduceAnimations}
                />

                <SocialLinks
                  links={socialLinks}
                  darkMode={darkMode}
                  shouldReduceAnimations={shouldReduceAnimations}
                />
              </div>

              {/* Enhanced Location & Contact */}
              <LocationContact
                location={t.location}
                coffeeText={t.open_to_coffee}
                darkMode={darkMode}
                shouldReduceAnimations={shouldReduceAnimations}
              />
            </motion.div>

            {/* Right Column - Enhanced Profile Image */}
            <ProfileImage
              src="/professional-headshot.png"
              alt="Kenji Akira"
              darkMode={darkMode}
              shouldReduceAnimations={shouldReduceAnimations}
            />
          </div>
        </div>
      </section>
    </>
  )
}
