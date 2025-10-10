import React from "react"
import { motion } from "framer-motion"

interface ProgressBarProps {
  level: number
  darkMode?: boolean
  index?: number
}

export function ProgressBar({ level, darkMode = false, index = 0 }: ProgressBarProps) {
  return (
    <div 
      className={`relative w-full rounded-full h-4 overflow-hidden ${
        darkMode 
          ? 'bg-white/[0.03] border border-white/[0.08]' 
          : 'bg-slate-900/[0.04] border border-slate-200/50'
      }`}
      style={{
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
      }}
    >
      {/* Main progress bar with liquid glass effect */}
      <motion.div
        className={`relative h-full rounded-full overflow-hidden ${
          darkMode 
            ? 'bg-white/[0.08] border-r border-white/[0.12]' 
            : 'bg-slate-900/[0.06] border-r border-slate-300/60'
        }`}
        initial={{ width: 0, x: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ delay: index * 0.15 + 1, duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          transformOrigin: 'left center',
        }}
      >
        {/* Liquid glass shine layer */}
        <div 
          className={`absolute inset-0 ${
            darkMode 
              ? 'bg-gradient-to-r from-white/[0.04] via-white/[0.10] to-white/[0.04]' 
              : 'bg-gradient-to-r from-white/20 via-white/40 to-white/20'
          }`}
          style={{
            mixBlendMode: 'overlay',
          }}
        />
        
        {/* Top highlight for glass effect */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] ${
          darkMode ? 'bg-white/20' : 'bg-white/50'
        } rounded-full`} />
        
        {/* Bottom shadow for depth */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${
          darkMode ? 'bg-black/[0.08]' : 'bg-slate-900/[0.06]'
        } rounded-full`} />
        
        {/* Animated dots */}
        <motion.div
          className="absolute inset-0 flex items-center justify-end pr-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {Array.from({ length: 3 }).map((_, dotIndex) => (
            <motion.div
              key={dotIndex}
              className={`w-1 h-1 rounded-full mx-0.5 ${
                darkMode ? 'bg-white/30' : 'bg-slate-900/30'
              }`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: dotIndex * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
      
      {/* Shine sweep effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r from-transparent ${
          darkMode ? 'via-white/[0.12]' : 'via-white/30'
        } to-transparent skew-x-12`}
        initial={{ x: '-100%' }}
        whileInView={{ x: '200%' }}
        transition={{ delay: index * 0.15 + 2.5, duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      
      {/* Subtle pulse border */}
      <motion.div
        className={`absolute inset-0 rounded-full ${
          darkMode ? 'border border-white/[0.08]' : 'border border-slate-200/60'
        }`}
        animate={{
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

