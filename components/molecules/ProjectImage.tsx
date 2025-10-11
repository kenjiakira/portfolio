import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import Image from "next/image"

interface ProjectImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  overlayGradient?: "light" | "dark"
}

export function ProjectImage({ 
  src, 
  alt, 
  width = 800,
  height = 600,
  className = "",
  overlayGradient = "light"
}: ProjectImageProps) {
  const gradientClass = overlayGradient === "dark" 
    ? "bg-gradient-to-t from-black/60 via-transparent to-transparent"
    : "bg-gradient-to-r from-black/20 via-transparent to-transparent"

  return (
    <div className="relative overflow-hidden">
      <OptimizedMotion
        as="div"
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-full"
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </OptimizedMotion>
      
      <div className={`absolute inset-0 ${gradientClass}`} />
    </div>
  )
}

