"use client"

import React from "react"
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
import { FadeInLeft, AnimatedBackground, OptimizedMotion } from "@/components/atoms"

interface HeroSectionProps {
  darkMode: boolean
  downloadResume: () => void
}

export function HeroSection({ darkMode, downloadResume }: HeroSectionProps) {
  const { t } = useTranslations()
  const { isMobile, shouldReduceAnimations } = useMobileOptimization()

  const socialLinks = [
    { icon: "/assets/svg/github.svg", href: "https://github.com/kenjiakira", label: "GitHub", color: "hover:bg-gray-600" },
    { icon: "/assets/svg/linkedin.svg", href: "https://www.linkedin.com/in/tu-ngoc-hoang-348557291/", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: "/assets/svg/mail.svg", href: "mailto:kenjiakira@gmail.com", label: "Email", color: "hover:bg-emerald-600" },
  ]

  return (
    <>
      {/* Enhanced Hero Section */}
      <section id="home" className="pt-40 pb-32 px-6 relative overflow-hidden">
        {/* Liquid Glass Background - tối ưu cho mobile */}
        {!shouldReduceAnimations && (
          <div className="absolute inset-0 pointer-events-none">
            <AnimatedBackground
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
              reduceMotion={shouldReduceAnimations}
            />
            <AnimatedBackground
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
              reduceMotion={shouldReduceAnimations}
            />
          </div>
        )}
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <FadeInLeft
              duration={shouldReduceAnimations ? 0.5 : 0.8}
              className="space-y-6 lg:space-y-10 relative"
              reduceMotion={shouldReduceAnimations}
              lazy={true}
            >
              {/* Floating Dots Background - giảm từ 20 xuống 8 dots để tối ưu */}
              {!shouldReduceAnimations && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {Array.from({ length: isMobile ? 4 : 8 }).map((_, i) => {
                    // Pre-calculate random values để tránh re-render
                    const randomX = Math.random() * 100 - 50
                    const randomY = Math.random() * 100 - 50
                    const randomDuration = Math.random() * 4 + 3
                    const randomDelay = Math.random() * 2
                    
                    return (
                      <div
                        key={`dot-${i}`}
                        className="absolute"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      >
                        <AnimatedBackground
                          className={`w-1 h-1 rounded-full ${
                            darkMode ? 'bg-white/20' : 'bg-slate-900/20'
                          }`}
                          animate={{
                            x: [0, randomX],
                            y: [0, randomY],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: randomDuration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: randomDelay,
                          }}
                          reduceMotion={shouldReduceAnimations}
                        />
                      </div>
                    )
                  })}
                </div>
              )}
              <div className="space-y-4 lg:space-y-6">
                <AvailabilityStatus
                  text="Available for new opportunities" 
                  darkMode={darkMode}
                  shouldReduceAnimations={shouldReduceAnimations}
                />

                <OptimizedMotion
                  as="h1"
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceAnimations ? 0.2 : 0.4, duration: shouldReduceAnimations ? 0.4 : 0.8 }}
                  reduceMotion={shouldReduceAnimations}
                  lazy={true}
                >
                  {t.name}
                </OptimizedMotion>

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
              <div className="flex flex-row flex-wrap items-center gap-4 lg:gap-6 mt-2 sm:mt-0">
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
            </FadeInLeft>

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
