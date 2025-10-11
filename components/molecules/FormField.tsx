import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { FormLabel } from "@/components/atoms/FormLabel"
import { FormInput } from "@/components/atoms/FormInput"

interface FormFieldProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  darkMode?: boolean
  required?: boolean
  delay?: number
}

export function FormField({ 
  id, 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  darkMode = false,
  required = false,
  delay = 0 
}: FormFieldProps) {
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
      <FormInput
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        darkMode={darkMode}
        required={required}
      />
    </OptimizedMotion>
  )
}

