import React from "react"
import { Badge } from "@/components/ui/badge"

export function VerifiedBadge() {
  return (
    <Badge variant="secondary" className="h-4 w-4 p-0 bg-blue-500 text-white rounded-full flex items-center justify-center">
      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </Badge>
  )
}

