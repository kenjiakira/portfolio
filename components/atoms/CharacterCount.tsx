import React from "react"

interface CharacterCountProps {
  current: number
  min: number
  darkMode?: boolean
}

export function CharacterCount({ current, min, darkMode = false }: CharacterCountProps) {
  const isValid = current >= min
  
  return (
    <div className={`absolute bottom-2 right-2 text-xs ${
      isValid 
        ? (darkMode ? 'text-green-400' : 'text-green-600')
        : (darkMode ? 'text-red-400' : 'text-red-500')
    }`}>
      {current}/{min} min
    </div>
  )
}

