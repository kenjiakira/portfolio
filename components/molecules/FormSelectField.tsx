import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormLabel } from "@/components/atoms/FormLabel"

interface SelectOption {
  value: string
  label: string
}

interface FormSelectFieldProps {
  id: string
  label: string
  placeholder: string
  value: string
  onValueChange: (value: string) => void
  options: SelectOption[]
  darkMode?: boolean
  required?: boolean
  delay?: number
}

export function FormSelectField({ 
  id, 
  label, 
  placeholder, 
  value, 
  onValueChange, 
  options,
  darkMode = false,
  required = false,
  delay = 0 
}: FormSelectFieldProps) {
  return (
    <OptimizedMotion
      as="div"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <FormLabel htmlFor={id} darkMode={darkMode} required={required}>
        {label}
      </FormLabel>
      <Select value={value} onValueChange={onValueChange} required={required}>
        <SelectTrigger
          className={`h-12 transition-all duration-300 ${
            darkMode
              ? 'bg-white/5 border border-white/20 text-white hover:bg-white/10 focus:bg-white/10 focus:border-white/30'
              : 'bg-slate-50 border border-slate-200 text-slate-900 hover:bg-white focus:bg-white focus:border-slate-300'
          } focus:ring-2 focus:ring-blue-500/20`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent 
          className={`${
            darkMode 
              ? 'bg-slate-800/95 border border-slate-600 backdrop-blur-xl shadow-2xl' 
              : 'bg-white/95 border border-slate-200 backdrop-blur-xl shadow-2xl'
          }`}
        >
          {options.map((option) => (
            <SelectItem 
              key={option.value}
              value={option.value}
              className={`${
                darkMode 
                  ? 'text-white hover:bg-white/10 focus:bg-white/10' 
                  : 'text-slate-900 hover:bg-slate-100 focus:bg-slate-100'
              } transition-colors duration-200`}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </OptimizedMotion>
  )
}

