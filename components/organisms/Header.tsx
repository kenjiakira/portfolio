"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations-context"

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  activeSection: string
}

export function Header({ 
  darkMode, 
  setDarkMode, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  activeSection 
}: HeaderProps) {
  const { language, setLanguage, t } = useTranslations()

  const navigationItems = [
    { key: "about", label: t.nav_about },
    { key: "experience", label: t.nav_experience },
    { key: "projects", label: t.nav_projects },
    { key: "blog", label: t.nav_blog },
    { key: "contact", label: t.nav_contact },
  ]

  return (
    <>
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="ios-glass-card border-0 shadow-2xl backdrop-blur-2xl rounded-full">
              <CardContent className="flex items-center justify-between px-4 lg:px-8 py-3">
                <motion.div
                  className="text-2xl font-bold tracking-tight text-shadow-dramatic"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={darkMode ? "text-white" : "text-slate-900"}>Kenji </span>
                  <span className={darkMode ? "text-white" : "text-slate-900"}>Akira</span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  {navigationItems.map((item) => (
                    <motion.a
                      key={item.key}
                      href={`#${item.key}`}
                      className={`relative font-medium transition-all duration-300 ${
                        activeSection === item.key
                          ? "text-blue-600"
                          : darkMode
                            ? "text-slate-300 hover:text-white"
                            : "text-slate-700 hover:text-slate-900"
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {item.label}
                      {activeSection === item.key && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          layoutId="activeTab"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.a>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {/* Language Selector */}
                  <div className="hidden sm:flex rounded-full overflow-hidden liquid-glass-subtle">
                    {(["en", "vi", "ja"] as const).map((lang) => (
                      <motion.button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                          language === lang
                            ? "btn-light text-blue-600 button-shadow-medium"
                            : darkMode
                              ? "text-slate-300 hover:text-white hover:bg-white/5 button-shadow-light"
                              : "text-slate-700 hover:text-slate-900 hover:bg-black/5 button-shadow-light"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {lang.toUpperCase()}
                      </motion.button>
                    ))}
                  </div>

                  {/* Dark Mode Toggle */}
                  <motion.button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full liquid-glass-subtle hover:scale-105 transition-all duration-300 button-shadow-medium"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={darkMode ? "moon" : "sun"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {darkMode ? (
                          <Moon className="h-5 w-5 text-blue-400" />
                        ) : (
                          <Sun className="h-5 w-5 text-amber-500" />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>

                  {/* Mobile Menu Button */}
                  <motion.button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-full liquid-glass-subtle button-shadow-medium"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={mobileMenuOpen ? "close" : "menu"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden"
          >
            <Card className="ios-glass-card border-0 shadow-2xl backdrop-blur-2xl rounded-3xl">
              <CardContent className="p-4 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={`#${item.key}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      darkMode
                        ? "text-slate-300 hover:text-white hover:bg-white/10"
                        : "text-slate-700 hover:text-slate-900 hover:bg-black/5"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                {/* Language Selector for Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 }}
                  className="pt-2 mt-2 border-t border-white/10"
                >
                  <div className="px-4 py-2">
                    <p className={`text-xs font-medium mb-2 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {t.language || "Language"}
                    </p>
                    <div className="flex gap-2">
                      {(["en", "vi", "ja"] as const).map((lang) => (
                        <motion.button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                            language === lang
                              ? "bg-blue-600 text-white button-shadow-strong"
                              : darkMode
                                ? "text-slate-300 hover:text-white hover:bg-white/10 button-shadow-light"
                                : "text-slate-700 hover:text-slate-900 hover:bg-black/10 button-shadow-light"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {lang.toUpperCase()}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}