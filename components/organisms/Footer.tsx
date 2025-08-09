"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, Coffee, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-translations"

interface FooterProps {
  darkMode: boolean
}

export function Footer({ darkMode }: FooterProps) {
  const { t } = useTranslations()
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "from-gray-600 to-gray-800" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "from-blue-600 to-blue-800" },
    { icon: Mail, href: "mailto:kenjiakira2006@gmail.com", label: "Email", color: "from-emerald-600 to-emerald-800" },
  ]

  const quickLinks = [
    { label: t.footer_about, href: "#about", description: t.footer_about_desc },
    { label: t.footer_skills, href: "#skills", description: t.footer_skills_desc },
    { label: t.footer_experience, href: "#experience", description: t.footer_experience_desc },
    { label: t.footer_projects, href: "#projects", description: t.footer_projects_desc },
  ]

  const resourceLinks = [
    { label: t.footer_resume, href: "#", description: t.footer_resume_desc },
    { label: t.footer_blog, href: "#blog", description: t.footer_blog_desc },
    { label: t.footer_newsletter, href: "#", description: t.footer_newsletter_desc },
    { label: t.contact, href: "#contact", description: t.footer_contact_desc },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute top-20 left-10 w-80 h-80 ${
            darkMode ? 'bg-white/3' : 'bg-slate-900/3'
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
          className={`absolute bottom-10 right-10 w-96 h-96 ${
            darkMode ? 'bg-white/2' : 'bg-slate-900/2'
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

      <div className={`border-t ${darkMode ? 'border-white/10' : 'border-slate-200'} backdrop-blur-sm relative`}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center gap-3 mb-6" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Kenji
                  </span>
                  <span className={`text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    Akira
                  </span>
                </motion.div>
                
                <motion.p
                  className={`text-lg mb-8 leading-relaxed max-w-md ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Passionate about creating digital experiences that make a difference. Always exploring new technologies and pushing creative boundaries.
                </motion.p>

                {/* Social Links */}
                <div className="flex gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`p-4 rounded-2xl ios-glass-button hover:scale-110 transition-all duration-300 group relative overflow-hidden`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                      <social.icon className={`h-6 w-6 relative z-10 transition-colors duration-300 ${
                        darkMode ? 'text-white group-hover:text-white' : 'text-slate-700 group-hover:text-white'
                      }`} />
                    </motion.a>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <motion.div
                  className="ios-glass-card p-6 rounded-2xl max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Coffee className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-slate-700'}`} />
                    <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      Stay Connected
                    </h4>
                  </div>
                  <p className={`text-sm mb-4 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Get monthly updates on new projects and tech insights.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className={`flex-1 px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                        darkMode
                          ? 'bg-white/5 border border-white/20 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-white/30'
                          : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-slate-300'
                      } focus:ring-2 focus:ring-blue-500/20`}
                    />
                    <Button size="sm" className="ios-glass-button">
                      Join
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className={`font-bold text-xl mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Navigation
              </h4>
              <div className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="group block"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className={`font-medium ${
                      darkMode ? "text-slate-300 group-hover:text-white" : "text-slate-700 group-hover:text-slate-900"
                    } transition-colors duration-300`}>
                      {link.label}
                    </div>
                    <div className={`text-sm ${
                      darkMode ? "text-slate-500" : "text-slate-500"
                    }`}>
                      {link.description}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className={`font-bold text-xl mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Resources
              </h4>
              <div className="space-y-4">
                {resourceLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="group block"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className={`font-medium ${
                      darkMode ? "text-slate-300 group-hover:text-white" : "text-slate-700 group-hover:text-slate-900"
                    } transition-colors duration-300`}>
                      {link.label}
                    </div>
                    <div className={`text-sm ${
                      darkMode ? "text-slate-500" : "text-slate-500"
                    }`}>
                      {link.description}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className={`border-t ${darkMode ? 'border-white/10' : 'border-slate-200'} pt-8`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  © 2025 Kenji Akira. Crafted with 
                </p>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  using Next.js & Framer Motion
                </p>
              </motion.div>

              <div className="flex items-center gap-6">
                <motion.a
                  href="#"
                  className={`text-sm transition-all duration-300 ${
                    darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className={`text-sm transition-all duration-300 ${
                    darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.a>
                
                {/* Scroll to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  className="ios-glass-button p-3 rounded-xl hover:scale-110 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ArrowUp className={`h-5 w-5 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-slate-700'
                  }`} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
