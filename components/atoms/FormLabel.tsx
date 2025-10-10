import React from "react"

interface FormLabelProps {
  htmlFor: string
  children: React.ReactNode
  darkMode?: boolean
  required?: boolean
}

export function FormLabel({ htmlFor, children, darkMode = false, required = false }: FormLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-semibold mb-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )
}

