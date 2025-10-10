import React from "react"
import { Textarea } from "@/components/ui/textarea"

interface FormTextareaProps {
  id: string
  rows?: number
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  darkMode?: boolean
  required?: boolean
}

export function FormTextarea({ 
  id, 
  rows = 6, 
  placeholder, 
  value, 
  onChange, 
  darkMode = false,
  required = false 
}: FormTextareaProps) {
  return (
    <Textarea
      id={id}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`transition-all duration-300 resize-none ${
        darkMode
          ? 'bg-white/5 border border-white/20 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-white/30'
          : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-slate-300'
      } focus:ring-2 focus:ring-blue-500/20`}
      required={required}
    />
  )
}

