import React from "react"
import { motion } from "framer-motion"
import { MessageCircle, Heart, Repeat, Share } from "lucide-react"
import { EngagementButton } from "@/components/atoms/EngagementButton"

interface EngagementStatsProps {
  replies: string
  retweets: string
  likes: string
  darkMode?: boolean
}

export function EngagementStats({ 
  replies, 
  retweets, 
  likes, 
  darkMode = false 
}: EngagementStatsProps) {
  return (
    <motion.div
      className="flex items-center justify-between text-xs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4">
        <EngagementButton 
          icon={MessageCircle} 
          count={replies} 
          darkMode={darkMode} 
          hoverColor="red" 
        />
        <EngagementButton 
          icon={Repeat} 
          count={retweets} 
          darkMode={darkMode} 
          hoverColor="green" 
        />
        <EngagementButton 
          icon={Heart} 
          count={likes} 
          darkMode={darkMode} 
          hoverColor="red" 
        />
      </div>
      
      <motion.button
        className={`${darkMode ? "text-slate-400 hover:text-blue-400" : "text-slate-500 hover:text-blue-500"}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Share className="h-4 w-4" />
      </motion.button>
    </motion.div>
  )
}

