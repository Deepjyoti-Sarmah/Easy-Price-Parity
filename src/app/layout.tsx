import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./components/providers"
import { EB_Garamond } from "next/font/google"
import { cn } from "@/utils"

import "./globals.css"
import ThemeProvider from "./components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
})

export const metadata: Metadata = {
  title: "jStack App",
  description: "Created using jStack",
  icons: [{ rel: "icon", url: "/icon.svg" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(inter.variable, eb_garamond.variable)}>
      <body className="font-sans bg-brand-50 text-brand-950 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html >
  )
}
