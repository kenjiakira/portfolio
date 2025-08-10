"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Mail,
  MapPin,
  Coffee,
  Github,
  Linkedin,
  Send,
  CheckCircle
} from "lucide-react"
import { useTranslations } from "@/hooks/use-translations-context"

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
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Client-side validation
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim()
    }
    
    if (!trimmedData.name || !trimmedData.email || !trimmedData.subject || !trimmedData.message) {
      setFormStatus("error")
      setErrorMessage(t.contact_fill_required || "Please fill in all required fields")
      return
    }
    
    // Check message length
    if (trimmedData.message.length < 10) {
      setFormStatus("error")
      setErrorMessage("Message must be at least 10 characters long")
      return
    }

    setFormStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedData),
      })

      const result = await response.json()

      if (response.ok) {
        setFormStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus("idle")
        }, 5000)
      } else {
        console.error('Email sending failed:', result.error)
        setFormStatus("error")
        setErrorMessage(result.error || "Failed to send message. Please try again.")
        
        // Reset error status after 5 seconds
        setTimeout(() => {
          setFormStatus("idle")
          setErrorMessage("")
        }, 5000)
      }
    } catch (error) {
      console.error('Network error:', error)
      setFormStatus("error")
              setErrorMessage("Network error. Please check your connection and try again.")
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
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
          className={`absolute top-20 left-10 w-80 h-80 ${darkMode ? 'bg-white/5' : 'bg-slate-900/5'
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
          className={`absolute bottom-20 right-10 w-96 h-96 ${darkMode ? 'bg-white/3' : 'bg-slate-900/3'
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
            className={`text-5xl lg:text-7xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"
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
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${darkMode
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
                  {t.contact_lets_chat}
                </motion.h3>

                <motion.p
                  className={`text-sm mb-6 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {t.contact_project_mind}
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
                      {t.contact_schedule_call}
                    </Button>
                  </motion.div>

                  {/* Buy Me a Coffee */}
                  <motion.div
                    className="pt-4 border-t border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="https://buymeacoffee.com/kenjiakira"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl ios-glass-button transition-all duration-300 group relative overflow-hidden"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      <Coffee className={`h-4 w-4 relative z-10 transition-colors duration-300 ${
                        darkMode ? 'text-yellow-400 group-hover:text-yellow-300' : 'text-orange-600 group-hover:text-orange-500'
                      }`} />
                      <span className={`text-sm font-medium relative z-10 transition-colors duration-300 ${
                        darkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'
                      }`}>
                        {t.contact_support_work}
                      </span>
                    </motion.a>
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
              <Card className={`border-0 shadow-2xl h-full rounded-2xl ${darkMode
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
                      {t.contact_send_message_title}
                    </h3>
                    <p className={`${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                      {t.contact_form_description}
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
                          {t.contact_full_name}
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`h-12 transition-all duration-300 ${darkMode
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
                          {t.contact_email_address}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`h-12 transition-all duration-300 ${darkMode
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
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        required
                      >
                        <SelectTrigger
                          className={`h-12 transition-all duration-300 ${darkMode
                              ? 'bg-white/5 border border-white/20 text-white hover:bg-white/10 focus:bg-white/10 focus:border-white/30'
                              : 'bg-slate-50 border border-slate-200 text-slate-900 hover:bg-white focus:bg-white focus:border-slate-300'
                            } focus:ring-2 focus:ring-blue-500/20`}
                        >
                          <SelectValue placeholder={t.select_project_type} />
                        </SelectTrigger>
                        <SelectContent 
                          className={`${darkMode 
                            ? 'bg-slate-800/95 border border-slate-600 backdrop-blur-xl shadow-2xl' 
                            : 'bg-white/95 border border-slate-200 backdrop-blur-xl shadow-2xl'
                          }`}
                        >
                          <SelectItem 
                            value="web-development"
                            className={`${darkMode 
                              ? 'text-white hover:bg-white/10 focus:bg-white/10' 
                              : 'text-slate-900 hover:bg-slate-100 focus:bg-slate-100'
                            } transition-colors duration-200`}
                          >
                            {t.web_development}
                          </SelectItem>
                          <SelectItem 
                            value="mobile-app"
                            className={`${darkMode 
                              ? 'text-white hover:bg-white/10 focus:bg-white/10' 
                              : 'text-slate-900 hover:bg-slate-100 focus:bg-slate-100'
                            } transition-colors duration-200`}
                          >
                            {t.mobile_application}
                          </SelectItem>
                          <SelectItem 
                            value="ai-ml"
                            className={`${darkMode 
                              ? 'text-white hover:bg-white/10 focus:bg-white/10' 
                              : 'text-slate-900 hover:bg-slate-100 focus:bg-slate-100'
                            } transition-colors duration-200`}
                          >
                            {t.ai_ml_solution}
                          </SelectItem>
                          <SelectItem 
                            value="consultation"
                            className={`${darkMode 
                              ? 'text-white hover:bg-white/10 focus:bg-white/10' 
                              : 'text-slate-900 hover:bg-slate-100 focus:bg-slate-100'
                            } transition-colors duration-200`}
                          >
                            {t.technical_consultation}
                          </SelectItem>
                          <SelectItem 
                            value="other"
                            className={`${darkMode 
                              ? 'text-white hover:bg-white/10 focus:bg-white/10' 
                              : 'text-slate-900 hover:bg-slate-100 focus:bg-slate-100'
                            } transition-colors duration-200`}
                          >
                            {t.other}
                          </SelectItem>
                        </SelectContent>
                      </Select>
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
                        {t.contact_project_details}
                      </label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          rows={6}
                          placeholder={t.contact_project_placeholder}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`transition-all duration-300 resize-none ${darkMode
                              ? 'bg-white/5 border border-white/20 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-white/30'
                              : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-slate-300'
                            } focus:ring-2 focus:ring-blue-500/20`}
                          required
                        />
                        <div className={`absolute bottom-2 right-2 text-xs ${
                          formData.message.length < 10 
                            ? (darkMode ? 'text-red-400' : 'text-red-500')
                            : (darkMode ? 'text-green-400' : 'text-green-600')
                        }`}>
                          {formData.message.length}/10 min
                        </div>
                      </div>
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
                              {t.contact_message_sent}
                            </motion.div>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              {t.contact_send_message}
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
                          className={`p-4 rounded-lg ${darkMode
                              ? 'bg-red-500/10 border border-red-500/20 text-red-300'
                              : 'bg-red-50 border border-red-200 text-red-700'
                            }`}
                        >
                          <p className="text-center font-medium">
                            {errorMessage || t.contact_fill_required}
                          </p>
                        </motion.div>
                      )}

                      {formStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`p-4 rounded-lg ${darkMode
                              ? 'bg-green-500/10 border border-green-500/20 text-green-300'
                              : 'bg-green-50 border border-green-200 text-green-700'
                            }`}
                        >
                          <p className="text-center font-medium">
                            {t.contact_thanks_message}
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