import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { FormLabel } from "@/components/atoms/FormLabel"
import { FormTextarea } from "@/components/atoms/FormTextarea"
import { CharacterCount } from "@/components/atoms/CharacterCount"

interface FormTextareaFieldProps {
  id: string
  label: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  rows?: number
  minLength?: number
  darkMode?: boolean
  required?: boolean
  delay?: number
}

export function FormTextareaField({ 
  id, 
  label, 
  placeholder, 
  value, 
  onChange, 
  rows = 6,
  minLength = 10,
  darkMode = false,
  required = false,
  delay = 0 
}: FormTextareaFieldProps) {
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
      <div className="relative">
        <FormTextarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          darkMode={darkMode}
          required={required}
        />
        <CharacterCount 
          current={value.length} 
          min={minLength} 
          darkMode={darkMode} 
        />
      </div>
    </OptimizedMotion>
  )
}

