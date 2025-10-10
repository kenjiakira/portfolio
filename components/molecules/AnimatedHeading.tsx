import React from "react"
import { motion } from "framer-motion"

interface AnimatedHeadingProps {
  text: string
  className?: string
  delay?: number
  enableBounce?: boolean
  shouldReduceAnimations?: boolean
}

export function AnimatedHeading({ 
  text, 
  className = "", 
  delay = 0,
  enableBounce = false,
  shouldReduceAnimations = false 
}: AnimatedHeadingProps) {
  const bounceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceAnimations ? i * 0.02 : i * 0.05,
        duration: shouldReduceAnimations ? 0.3 : 0.6,
        ease: "easeOut" as const,
      },
    }),
    bounce: (i: number) => ({
      y: shouldReduceAnimations ? [0, -5, 0] : [0, -10, 0],
      transition: {
        delay: shouldReduceAnimations ? i * 0.02 : i * 0.05,
        duration: shouldReduceAnimations ? 0.3 : 0.6,
        ease: "easeInOut" as const,
      },
    }),
  }

  // Trên mobile performance thấp, chỉ animate từng từ thay vì từng ký tự
  if (shouldReduceAnimations) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        whileHover={enableBounce ? "bounce" : undefined}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={`${text}-${index}`}
            custom={index + delay * 5}
            variants={bounceVariants}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  // PC - giữ nguyên animation từng ký tự
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      whileHover={enableBounce ? "bounce" : undefined}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${text}-${index}`}
          custom={index + delay * 20}
          variants={bounceVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}

