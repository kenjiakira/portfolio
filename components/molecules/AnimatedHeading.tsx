import React from "react"
import { OptimizedMotion } from "@/components/atoms"

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
      <OptimizedMotion
        className={className}
        initial="hidden"
        animate="visible"
        whileHover={enableBounce ? "bounce" : undefined}
        gpu={true}
      >
        {text.split(" ").map((word, index) => (
          <OptimizedMotion
            as="span"
            key={`${text}-${index}`}
            custom={index + delay * 5}
            variants={bounceVariants}
            className="inline-block mr-1"
            gpu={true}
          >
            {word}
          </OptimizedMotion>
        ))}
      </OptimizedMotion>
    )
  }

  // PC - giữ nguyên animation từng ký tự
  return (
    <OptimizedMotion
      className={className}
      initial="hidden"
      animate="visible"
      whileHover={enableBounce ? "bounce" : undefined}
      gpu={true}
    >
      {text.split("").map((char, index) => (
        <OptimizedMotion
          as="span"
          key={`${text}-${index}`}
          custom={index + delay * 20}
          variants={bounceVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          gpu={true}
        >
          {char}
        </OptimizedMotion>
      ))}
    </OptimizedMotion>
  )
}

