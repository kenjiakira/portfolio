import React from "react"
import { OptimizedMotion } from "@/components/atoms"
import { LiquidGlassButton } from "@/components/atoms"
import { ExternalLink, Github } from "lucide-react"

interface ProjectActionsProps {
  demoUrl?: string
  githubUrl?: string
  demoText?: string
  size?: "default" | "sm"
  darkMode?: boolean
}

export function ProjectActions({ 
  demoUrl, 
  githubUrl, 
  demoText = "Demo",
  size = "default",
  darkMode = false 
}: ProjectActionsProps) {
  const isPrivate = !demoUrl || demoUrl === "Private/Confidential" || demoUrl === ""

  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <LiquidGlassButton
          onClick={() => {
            if (!isPrivate) {
              window.open(demoUrl, '_blank')
            }
          }}
          disabled={isPrivate}
          darkMode={darkMode}
          className={`w-full ${size === "sm" ? "text-xs px-3 py-2" : "px-6 py-3"}`}
          roundedClass={size === "sm" ? "rounded-lg" : "rounded-xl"}
        >
          <div className="flex items-center justify-center gap-2">
            <ExternalLink className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} />
            <span className={darkMode ? "text-white" : "text-slate-900"}>{demoText}</span>
          </div>
        </LiquidGlassButton>
      </div>

      {githubUrl && (
        <LiquidGlassButton
          onClick={() => window.open(githubUrl, '_blank')}
          darkMode={darkMode}
          variant="icon"
          className={size === "sm" ? "px-3 py-2" : "px-4 py-3"}
          roundedClass={size === "sm" ? "rounded-lg" : "rounded-xl"}
        >
          <div className="flex items-center gap-2">
            <Github className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} />
            {size === "default" && <span className={darkMode ? "text-white" : "text-slate-900"}>Source Code</span>}
          </div>
        </LiquidGlassButton>
      )}
    </div>
  )
}

