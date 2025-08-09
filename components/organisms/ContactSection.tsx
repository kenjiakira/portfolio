"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  MapPin, 
  Coffee, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle 
} from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

interface ContactSectionProps {
  darkMode: boolean
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactSection({ darkMode }: ContactSectionProps) {
  const { t } = useTranslations()
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus("error")
      return
    }

    setFormStatus("loading")
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }, 2000)
  }



  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Mail, href: "#", label: "Email", color: "hover:bg-emerald-600" },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 px-4 lg:px-6 relative overflow-hidden">
      {/* Liquid Glass Background - exactly like Hero */}
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

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={`text-5xl lg:text-7xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t.contact}
          </motion.h2>
          <motion.p
            className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
{t.contact_ready_text}
          </motion.p>
        </motion.div>



        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - CTA & Social */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="ios-glass-card border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${
                    darkMode 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-slate-100 border border-slate-200'
                  } shadow-sm flex items-center justify-center`}>
                    <Coffee className={`h-10 w-10 ${darkMode ? 'text-white' : 'text-slate-700'}`} />
                  </div>
                </motion.div>

                <motion.h3
                  className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                  Let's Chat!
                </motion.h3>

                <motion.p
                  className={`text-sm mb-6 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Have a project in mind? Whether it's a quick question or a detailed discussion, I'm here to help bring your ideas to life.
                </motion.p>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full btn-light shadow-lg hover:shadow-xl transition-all duration-300">
                      <Mail className="mr-2 h-4 w-4" />
                      Schedule a Call
                    </Button>
                  </motion.div>

                  <div className="flex justify-center gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.button
                        key={social.label}
                        className={`p-3 rounded-xl ios-glass-button transition-all duration-300 ${social.color} group`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <social.icon className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-slate-700'} group-hover:text-white transition-colors duration-300`} />
                      </motion.button>
                    ))}
                  </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div 
              className="relative p-1 rounded-2xl"
              style={{
                background: darkMode
                  ? 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #3b82f6)'
                  : 'linear-gradient(45deg, #1e40af, #7c3aed, #0891b2, #059669, #1e40af)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 4s ease-in-out infinite',
              }}
              animate={{
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
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Card className={`border-0 shadow-2xl h-full rounded-2xl ${
                darkMode 
                  ? 'bg-slate-900/95 backdrop-blur-xl' 
                  : 'bg-white/95 backdrop-blur-xl'
              }`}>
                <CardContent className="p-10">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className={`text-3xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                    Send me a message
                  </h3>
                  <p className={`${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </motion.div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <label
                          htmlFor="name"
                        className={`block text-sm font-semibold mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                        >
                        Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                        placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`h-12 transition-all duration-300 ${
                          darkMode
                            ? 'bg-white/5 border border-white/20 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-white/30'
                            : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-slate-300'
                        } focus:ring-2 focus:ring-blue-500/20`}
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <label
                          htmlFor="email"
                        className={`block text-sm font-semibold mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                        >
                        Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                        placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`h-12 transition-all duration-300 ${
                          darkMode
                            ? 'bg-white/5 border border-white/20 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-white/30'
                            : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-slate-300'
                        } focus:ring-2 focus:ring-blue-500/20`}
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor="subject"
                      className={`block text-sm font-semibold mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                      >
{t.project_type}
                      </label>
                    <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full h-12 rounded-lg px-4 transition-all duration-300 ${
                        darkMode
                          ? 'bg-slate-800 border border-slate-600 text-white focus:bg-slate-700 focus:border-slate-500'
                          : 'bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-slate-300'
                      } focus:ring-2 focus:ring-blue-500/20`}
                        required
                      style={darkMode ? {
                        background: '#1e293b',
                        borderColor: '#475569',
                        color: '#ffffff'
                      } : {}}
                    >
                      <option 
                        value="" 
                        style={darkMode ? { backgroundColor: '#1e293b', color: '#ffffff' } : {}}
                      >
{t.select_project_type}
                      </option>
                      <option 
                        value="web-development"
                        style={darkMode ? { backgroundColor: '#1e293b', color: '#ffffff' } : {}}
                      >
{t.web_development}
                      </option>
                      <option 
                        value="mobile-app"
                        style={darkMode ? { backgroundColor: '#1e293b', color: '#ffffff' } : {}}
                      >
{t.mobile_application}
                      </option>
                      <option 
                        value="ai-ml"
                        style={darkMode ? { backgroundColor: '#1e293b', color: '#ffffff' } : {}}
                      >
{t.ai_ml_solution}
                      </option>
                      <option 
                        value="consultation"
                        style={darkMode ? { backgroundColor: '#1e293b', color: '#ffffff' } : {}}
                      >
{t.technical_consultation}
                      </option>
                      <option 
                        value="other"
                        style={darkMode ? { backgroundColor: '#1e293b', color: '#ffffff' } : {}}
                      >
{t.other}
                      </option>
                    </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor="message"
                      className={`block text-sm font-semibold mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                      >
                      Project Details
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`transition-all duration-300 resize-none ${
                        darkMode
                          ? 'bg-white/5 border border-white/20 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-white/30'
                          : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-slate-300'
                      } focus:ring-2 focus:ring-blue-500/20`}
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={formStatus === "loading"}
                        className="w-full btn-light py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                      >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative flex items-center justify-center">
                          {formStatus === "loading" ? (
                            <motion.div
                              className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                          ) : formStatus === "success" ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500 }}
                              className="flex items-center"
                            >
                              <CheckCircle className="mr-2 h-5 w-5" />
                            Message Sent Successfully!
                            </motion.div>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                            Send Message
                            </>
                          )}
                        </div>
                      </Button>
                    </motion.div>

                    <AnimatePresence>
                      {formStatus === "error" && (
                      <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        className={`p-4 rounded-lg ${
                          darkMode 
                            ? 'bg-red-500/10 border border-red-500/20 text-red-300' 
                            : 'bg-red-50 border border-red-200 text-red-700'
                        }`}
                      >
                        <p className="text-center font-medium">
                          Please fill in all required fields.
                        </p>
                      </motion.div>
                      )}

                      {formStatus === "success" && (
                      <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        className={`p-4 rounded-lg ${
                          darkMode 
                            ? 'bg-green-500/10 border border-green-500/20 text-green-300' 
                            : 'bg-green-50 border border-green-200 text-green-700'
                        }`}
                      >
                        <p className="text-center font-medium">
                          Thanks for reaching out! I'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>
          </div>
      </div>
    </section>
  )
}