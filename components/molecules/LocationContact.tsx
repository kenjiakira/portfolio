import React from "react"
import { motion } from "framer-motion"
import { MapPin, Coffee } from "lucide-react"
import { InfoItem } from "@/components/atoms/InfoItem"

interface LocationContactProps {
  location: string
  coffeeText: string
  darkMode?: boolean
  shouldReduceAnimations?: boolean
}

export function LocationContact({ 
  location, 
  coffeeText, 
  darkMode = false,
  shouldReduceAnimations = false 
}: LocationContactProps) {
  return (
    <motion.div
      className="flex items-center gap-6 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: shouldReduceAnimations ? 0.7 : 1, duration: shouldReduceAnimations ? 0.4 : 0.8 }}
    >
      <InfoItem icon={MapPin} text={location} darkMode={darkMode} />
      <InfoItem icon={Coffee} text={coffeeText} darkMode={darkMode} />
    </motion.div>
  )
}

