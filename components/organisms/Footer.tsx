"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, Coffee, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-translations-context"
import Image from "next/image"

interface FooterProps {
  darkMode: boolean
}

export function Footer({ darkMode }: FooterProps) {
  const { t } = useTranslations()
  const socialLinks = [
    { icon: Github, href: "https://github.com/kenjiakira", label: "GitHub", color: "from-gray-600 to-gray-800" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tu-ngoc-hoang-348557291/", label: "LinkedIn", color: darkMode ? "" : "from-blue-600 to-blue-800" },
    { icon: Mail, href: "mailto:kenjiakira2006@gmail.com", label: "Email", color: darkMode ? "" : "from-emerald-600 to-emerald-800" },
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
                  {/* Logo */}
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <Image
                      src="/assets/images/logo3.png"
                      alt="Logo"
                      width={40}
                      height={40}
                      className={`transition-all duration-300 ${
                        darkMode ? 'filter-none' : 'filter invert'
                      }`}
                    />
                  </div>
                  
                  {/* Text */}
                  <span className={`text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
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
                 {t.footer_about_desc}
                </motion.p>

                {/* Social Links & Buy Me a Coffee */}
                <div className="flex flex-wrap gap-4 mb-8">
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

                  {/* Buy Me a Coffee */}
                  <motion.a
                    href="https://buymeacoffee.com/kenjiakira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-4 btn-light font-semibold rounded-2xl button-shadow-medium transition-all duration-300 overflow-hidden inline-flex items-center gap-3"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={`absolute inset-0 transition-opacity duration-300 rounded-2xl ${
                      darkMode 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100'
                        : 'bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 group-hover:opacity-100'
                    }`} />
                    <div className="h-5 w-5 relative z-10 transition-all duration-300">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className={`transition-colors duration-300 ${
                          darkMode ? 'text-yellow-400 group-hover:text-yellow-300' : 'text-orange-700 group-hover:text-orange-800'
                        }`}
                      >
                        <path d="m20.216 6.415-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295 37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376.483.483 0 0 1 .535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
                      </svg>
                    </div>
                    <span className={`relative z-10 transition-colors duration-300 font-medium ${
                      darkMode 
                        ? 'text-slate-900 group-hover:text-slate-800' 
                        : 'text-slate-800 group-hover:text-slate-900'
                    }`}>
                      Buy me a coffee
                    </span>
                  </motion.a>
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
                      {t.footer_stay_connected}
                    </h4>
                  </div>
                  <p className={`text-sm mb-4 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    {t.footer_get_updates}
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder={t.footer_email_placeholder}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                        darkMode
                          ? 'bg-white/5 border border-white/20 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-white/30'
                          : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-slate-300'
                      } focus:ring-2 focus:ring-blue-500/20`}
                    />
                    <Button size="sm" className={`ios-glass-button ${darkMode ? 'text-white hover:text-white' : 'text-slate-900 hover:text-white'} font-medium`}>
                      {t.footer_join}
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
                {t.footer_navigation}
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
                {t.footer_resources}
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
                  {t.footer_privacy_policy}
                </motion.a>
                <motion.a
                  href="#"
                  className={`text-sm transition-all duration-300 ${
                    darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {t.footer_terms_of_service}
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
