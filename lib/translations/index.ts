import { en } from './en'
import { vi } from './vi'
import { ja } from './ja'

export type TranslationKey = keyof typeof en
export type Language = 'en' | 'vi' | 'ja'

export const translations = {
  en,
  vi,
  ja,
} as const

export { en, vi, ja }
