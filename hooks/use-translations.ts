import { useState, useEffect } from 'react'
import { translations, type Language, type TranslationKey } from '@/lib/translations'

export function useTranslations() {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Get language from localStorage if available
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['en', 'vi', 'ja'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = translations[language]

  return {
    language,
    setLanguage: changeLanguage,
    t,
    mounted,
  }
}
