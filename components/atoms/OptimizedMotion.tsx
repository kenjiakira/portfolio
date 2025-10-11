"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, MotionProps, Variants } from "framer-motion"

interface OptimizedMotionProps extends MotionProps {
  children?: React.ReactNode
  lazy?: boolean 
  gpu?: boolean 
  reduceMotion?: boolean 
  as?: keyof typeof motion
  className?: string
  href?: string
  target?: string
  rel?: string
  onClick?: (event: React.MouseEvent) => void
  "aria-label"?: string
}


export const animationPresets = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
} as const


export const transitionPresets = {
  fast: { duration: 0.3, ease: "easeOut" },
  normal: { duration: 0.5, ease: "easeOut" },
  slow: { duration: 0.8, ease: "easeOut" },
  spring: { type: "spring" as const, stiffness: 100, damping: 15 },
  springFast: { type: "spring" as const, stiffness: 200, damping: 20 },
}

export function OptimizedMotion({
  children,
  lazy = false,
  gpu = false,
  reduceMotion = false,
  as = "div",
  initial,
  animate,
  exit,
  transition,
  style,
  ...props
}: OptimizedMotionProps) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(!lazy)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!lazy || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [lazy, hasAnimated])

  
  const gpuStyles = gpu
    ? {
        willChange: "transform, opacity",
      }
    : {}

  const MotionComponent = motion[as] as any

  
  if (reduceMotion) {
    return <div style={{ ...gpuStyles, ...style }} {...(props as any)}>{children}</div>
  }

  return (
    <MotionComponent
      ref={ref}
      initial={lazy && !isInView ? initial || false : initial}
      animate={lazy && !isInView ? initial : animate}
      exit={exit}
      transition={transition}
      style={{ ...gpuStyles, ...style }}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}


export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  ...props
}: Omit<OptimizedMotionProps, "initial" | "animate" | "transition"> & {
  delay?: number
  duration?: number
}) {
  return (
    <OptimizedMotion
      initial={animationPresets.fadeIn.initial}
      animate={animationPresets.fadeIn.animate}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </OptimizedMotion>
  )
}

export function FadeInUp({
  children,
  delay = 0,
  duration = 0.5,
  ...props
}: Omit<OptimizedMotionProps, "initial" | "animate" | "transition"> & {
  delay?: number
  duration?: number
}) {
  return (
    <OptimizedMotion
      initial={animationPresets.fadeInUp.initial}
      animate={animationPresets.fadeInUp.animate}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </OptimizedMotion>
  )
}

export function FadeInLeft({
  children,
  delay = 0,
  duration = 0.5,
  gpu = false,
  ...props
}: Omit<OptimizedMotionProps, "initial" | "animate" | "transition"> & {
  delay?: number
  duration?: number
  gpu?: boolean
}) {
  return (
    <OptimizedMotion
      initial={animationPresets.fadeInLeft.initial}
      animate={animationPresets.fadeInLeft.animate}
      transition={{ duration, delay, ease: "easeOut" }}
      gpu={gpu}
      {...props}
    >
      {children}
    </OptimizedMotion>
  )
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  ...props
}: Omit<OptimizedMotionProps, "initial" | "animate" | "transition"> & {
  delay?: number
  duration?: number
}) {
  return (
    <OptimizedMotion
      initial={animationPresets.scale.initial}
      animate={animationPresets.scale.animate}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </OptimizedMotion>
  )
}


export function AnimatedBackground({
  children,
  className,
  animate,
  transition,
  reduceMotion = false,
}: {
  children?: React.ReactNode
  className?: string
  animate: any
  transition: any
  reduceMotion?: boolean
}) {
  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={animate}
      transition={transition}
      style={{
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  )
}

