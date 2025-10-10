import React from "react"
import { Badge } from "@/components/ui/badge"

interface ProjectStatusBadgeProps {
  status: string
  className?: string
}

export function ProjectStatusBadge({ status, className = "" }: ProjectStatusBadgeProps) {
  const getStatusColor = (status: string) => {
    if (status.includes("Completed") || status.includes("Hoàn thành")) {
      return "from-green-500 to-emerald-600"
    } else if (status.includes("Progress") || status.includes("Đang")) {
      return "from-blue-500 to-indigo-600"
    } else if (status.includes("Planned") || status.includes("Kế hoạch")) {
      return "from-orange-500 to-yellow-600"
    }
    return "from-gray-500 to-gray-600"
  }

  return (
    <Badge className={`bg-gradient-to-r ${getStatusColor(status)} text-white ${className}`}>
      {status}
    </Badge>
  )
}

