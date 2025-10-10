import React from "react"
import { Input } from "@/components/ui/input"

interface FormInputProps {
  id: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  darkMode?: boolean
  required?: boolean
}

export function FormInput({ 
  id, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  darkMode = false,
  required = false 
}: FormInputProps) {
  return (
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`h-12 transition-all duration-300 ${
        darkMode
          ? 'bg-white/5 border border-white/20 text-white placeholder:text-slate-400 focus:bg-white/10 focus:border-white/30'
          : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-slate-300'
      } focus:ring-2 focus:ring-blue-500/20`}
      required={required}
    />
  )
}

