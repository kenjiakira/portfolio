"use client"

import React, { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { LiquidGlassCard, AnimatedBackground, FadeInLeft } from "@/components/atoms"
import {
  Mail,
  Github,
  Linkedin,
} from "lucide-react"
import { useTranslations } from "@/hooks/use-translations-context"
import { useMobileOptimization } from "@/hooks/use-mobile"
import { FormMessage, OptimizedMotion } from "@/components/atoms"
import {
  SectionHeader,
  FormField,
  FormSelectField,
  FormTextareaField,
  SocialLinks,
  ContactFormHeader,
  SubmitButton,
  ContactInfoCard
} from "@/components/molecules"

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
  const { shouldReduceAnimations } = useMobileOptimization()

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
      {/* Liquid Glass Background - tối ưu */}
      {!shouldReduceAnimations && (
        <div className="absolute inset-0 pointer-events-none">
          <AnimatedBackground
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
            reduceMotion={shouldReduceAnimations}
          />
          <AnimatedBackground
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
            reduceMotion={shouldReduceAnimations}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <SectionHeader
          title={t.contact}
          subtitle={t.contact_ready_text}
          darkMode={darkMode}
        />



        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - CTA & Social */}
          <FadeInLeft
            className="lg:col-span-1 space-y-8"
            duration={0.6}
            delay={0.1}
            lazy={true}
            reduceMotion={shouldReduceAnimations}
          >
            <ContactInfoCard
              title={t.contact_lets_chat}
              description={t.contact_project_mind}
              buttonText={t.contact_schedule_call}
              supportText={t.contact_support_work}
              socialLinks={socialLinks}
              darkMode={darkMode}
              renderSocialLinks={() => (
                <SocialLinks 
                  links={socialLinks} 
                  darkMode={darkMode} 
                />
              )}
            />
          </FadeInLeft>

          {/* Right Column - Contact Form */}
          <OptimizedMotion
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            lazy={true}
            reduceMotion={shouldReduceAnimations}
          >
            <LiquidGlassCard className="h-full hover:shadow-3xl transition-all duration-500">
              <div className="p-10">
                  <ContactFormHeader
                    title={t.contact_send_message_title}
                    description={t.contact_form_description}
                    darkMode={darkMode}
                  />

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        id="name"
                        label={t.contact_full_name}
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        darkMode={darkMode}
                        required
                        delay={0.8}
                      />

                      <FormField
                        id="email"
                        label={t.contact_email_address}
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        darkMode={darkMode}
                        required
                        delay={0.9}
                      />
                    </div>

                    <FormSelectField
                      id="subject"
                      label={t.project_type}
                      placeholder={t.select_project_type}
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      options={[
                        { value: "web-development", label: t.web_development },
                        { value: "mobile-app", label: t.mobile_application },
                        { value: "ai-ml", label: t.ai_ml_solution },
                        { value: "consultation", label: t.technical_consultation },
                        { value: "other", label: t.other }
                      ]}
                      darkMode={darkMode}
                      required
                      delay={1}
                    />

                    <FormTextareaField
                      id="message"
                      label={t.contact_project_details}
                      placeholder={t.contact_project_placeholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      minLength={10}
                      darkMode={darkMode}
                      required
                      delay={1.1}
                    />

                    <SubmitButton
                      status={formStatus}
                      idleText={t.contact_send_message}
                      successText={t.contact_message_sent}
                      darkMode={darkMode}
                    />

                    <AnimatePresence>
                      {formStatus === "error" && (
                        <FormMessage
                          type="error"
                          message={errorMessage || t.contact_fill_required}
                          darkMode={darkMode}
                        />
                      )}

                      {formStatus === "success" && (
                        <FormMessage
                          type="success"
                          message={t.contact_thanks_message}
                          darkMode={darkMode}
                        />
                      )}
                    </AnimatePresence>
                  </form>
                </div>
            </LiquidGlassCard>
          </OptimizedMotion>
        </div>
      </div>
    </section>
  )
}