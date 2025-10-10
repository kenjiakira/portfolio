import React from "react"
import { motion } from "framer-motion"

interface FormMessageProps {
  type: "success" | "error"
  message: string
  darkMode?: boolean
}

export function FormMessage({ type, message, darkMode = false }: FormMessageProps) {
  const isError = type === "error"
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`p-4 rounded-lg ${
        isError
          ? darkMode
            ? 'bg-red-500/10 border border-red-500/20 text-red-300'
            : 'bg-red-50 border border-red-200 text-red-700'
          : darkMode
            ? 'bg-green-500/10 border border-green-500/20 text-green-300'
            : 'bg-green-50 border border-green-200 text-green-700'
      }`}
    >
      <p className="text-center font-medium">{message}</p>
    </motion.div>
  )
}

