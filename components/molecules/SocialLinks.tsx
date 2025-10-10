import React from "react"
import { LucideIcon } from "lucide-react"
import { SocialIconButton } from "@/components/atoms/SocialIconButton"

interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
  color?: string
}

interface SocialLinksProps {
  links: SocialLink[]
  darkMode?: boolean
  shouldReduceAnimations?: boolean
}

export function SocialLinks({ 
  links, 
  darkMode = false,
  shouldReduceAnimations = false 
}: SocialLinksProps) {
  return (
    <div className="flex gap-4">
      {links.map((social, index) => (
        <SocialIconButton
          key={social.label}
          icon={social.icon}
          label={social.label}
          href={social.href}
          color={social.color}
          darkMode={darkMode}
          index={index}
          shouldReduceAnimations={shouldReduceAnimations}
        />
      ))}
    </div>
  )
}
