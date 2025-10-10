import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle } from "lucide-react"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"

interface SubmitButtonProps {
  status: "idle" | "loading" | "success" | "error"
  idleText: string
  successText: string
  darkMode?: boolean
}

export function SubmitButton({ 
  status, 
  idleText, 
  successText,
  darkMode = false 
}: SubmitButtonProps) {
  return (
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
        disabled={status === "loading"}
        className={`
          w-full py-6 text-lg transition-all duration-500 relative overflow-hidden group
          ${darkMode 
            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40' 
            : 'bg-slate-900/10 hover:bg-slate-900/20 text-slate-900 border border-slate-900/20 hover:border-slate-900/40'
          }
          backdrop-blur-md hover:backdrop-blur-xl
          shadow-lg hover:shadow-2xl
          hover:scale-[1.02] active:scale-[0.98]
        `}
      >
        {/* Glass shimmer effect on hover */}
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
          bg-gradient-to-r ${darkMode ? 'from-white/10 via-white/5 to-transparent' : 'from-slate-900/10 via-slate-900/5 to-transparent'}
        `} />
        
        {/* Animated shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`
            absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000
            bg-gradient-to-r ${darkMode ? 'from-transparent via-white/20 to-transparent' : 'from-transparent via-slate-900/20 to-transparent'}
          `} />
        </div>

        <div className="relative flex items-center justify-center font-medium">
          {status === "loading" ? (
            <LoadingSpinner size={6} color={darkMode ? "white" : "slate"} />
          ) : status === "success" ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="flex items-center"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              {successText}
            </motion.div>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              {idleText}
            </>
          )}
        </div>
      </Button>
    </motion.div>
  )
}

