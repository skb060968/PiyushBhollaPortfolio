import type { Metadata } from "next"
import { Bodoni_Moda, DM_Sans } from "next/font/google"
import "./globals.css"
import ClientGuards from "@/components/ClientGuards"

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Portfolio | Designer",
  description: "Creative portfolio showcasing design work and projects",
  keywords: "portfolio, design, creative, projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${dmSans.variable}`}>
      <body className="antialiased font-sans">
        {/* Client-side guards (disable right-click) */}
        <ClientGuards />
        {children}
      </body>
    </html>
  )
}
