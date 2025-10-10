import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ProfileImageProps {
  src: string
  alt: string
  darkMode?: boolean
  shouldReduceAnimations?: boolean
}

export function ProfileImage({ 
  src, 
  alt, 
  darkMode = false,
  shouldReduceAnimations = false 
}: ProfileImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: shouldReduceAnimations ? 0.5 : 1, delay: shouldReduceAnimations ? 0.1 : 0.3, ease: "easeOut" }}
      className="relative"
    >
      <div className="relative max-w-lg mx-auto">
        {/* Glow Effect Container */}
        <motion.div 
          className="relative p-1 rounded-3xl"
          style={{
            background: darkMode
              ? 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #3b82f6)'
              : 'linear-gradient(45deg, #1e40af, #7c3aed, #0891b2, #059669, #1e40af)',
            backgroundSize: '400% 400%',
            animation: shouldReduceAnimations ? 'none' : 'gradientShift 4s ease-in-out infinite',
          }}
          animate={shouldReduceAnimations ? {} : {
            filter: darkMode 
              ? [
                  'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.2))',
                  'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5)) drop-shadow(0 0 60px rgba(139, 92, 246, 0.3))',
                  'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.2))'
                ]
              : [
                  'drop-shadow(0 0 15px rgba(30, 64, 175, 0.3)) drop-shadow(0 0 30px rgba(124, 58, 237, 0.2))',
                  'drop-shadow(0 0 25px rgba(30, 64, 175, 0.5)) drop-shadow(0 0 50px rgba(124, 58, 237, 0.3))',
                  'drop-shadow(0 0 15px rgba(30, 64, 175, 0.3)) drop-shadow(0 0 30px rgba(124, 58, 237, 0.2))'
                ]
          }}
          transition={shouldReduceAnimations ? {} : {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Main Image Container */}
          <motion.div
            className="relative z-10 overflow-hidden rounded-3xl ios-glass-card shadow-2xl"
            whileHover={shouldReduceAnimations ? {} : { scale: 1.02, rotateY: 5 }}
            transition={{ type: "spring", stiffness: shouldReduceAnimations ? 100 : 300 }}
          >
            <Image
              src={src}
              alt={alt}
              width={500}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

