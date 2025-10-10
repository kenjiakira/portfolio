import React from "react"
import { motion } from "framer-motion"
import { StatusDot } from "@/components/atoms/StatusDot"

interface AvailabilityStatusProps {
  text: string
  darkMode?: boolean
  shouldReduceAnimations?: boolean
}

export function AvailabilityStatus({ 
  text, 
  darkMode = false,
  shouldReduceAnimations = false 
}: AvailabilityStatusProps) {
  return (
    <motion.div
      className="flex items-center gap-3 text-sm font-medium"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: shouldReduceAnimations ? 0.1 : 0.3 }}
    >
      <StatusDot shouldReduceAnimations={shouldReduceAnimations} />
      <motion.div
        className={`${darkMode ? "text-slate-300" : "text-slate-600"} cursor-pointer`}
        whileHover={shouldReduceAnimations ? undefined : "bounce"}
        animate={shouldReduceAnimations ? undefined : "bounce"}
      >
        {shouldReduceAnimations ? (
          <span>{text}</span>
        ) : (
          text.split("").map((char, index) => (
            <motion.span
              key={`available-${index}`}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              variants={{
                bounce: {
                  y: [0, -8, 0],
                  transition: {
                    delay: index * 0.05,
                    duration: 0.8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                  }
                }
              }}
            >
              {char}
            </motion.span>
          ))
        )}
      </motion.div>
    </motion.div>
  )
}

