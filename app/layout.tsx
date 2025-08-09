import type React from "react"
import type { Metadata } from "next"
import { Roboto, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { TranslationsProvider } from "@/hooks/use-translations-context"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"], // Added more weights for flexibility
  variable: "--font-roboto",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Kenji Akira - Junior Full Stack Developer",
  description: "Junior Full Stack Developer & UI/UX Designer with 5+ years of experience in modern web technologies",
  keywords: "Full Stack Developer, React, Next.js, TypeScript, UI/UX Designer",
  authors: [{ name: "Kenji Akira" }],
  creator: "Kenji Akira"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <TranslationsProvider>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  )
}
