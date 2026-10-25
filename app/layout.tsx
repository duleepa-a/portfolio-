import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Google_Sans } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const googleSans = Google_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-google-sans",
  weight: "variable",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Duleepa Edirisinghe - Computer Science Portfolio",
  description:
    "Portfolio of Duleepa Edirisinghe, Computer Science undergraduate at University of Colombo School of Computing",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${googleSans.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
