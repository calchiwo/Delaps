import type React from "react"
import type { Metadata } from "next"
import { Sora } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"

const sora = Sora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TradeBeta | Crypto Trading Platform",
  description: "Professional crypto trading UI. Demo mode - static prices only.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.className} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
