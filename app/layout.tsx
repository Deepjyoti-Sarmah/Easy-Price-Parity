import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "ParityCart",
  description: "Smart pricing for global markets",
  icons: [{ rel: "icon", url: "/icon-1.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, eb_garamond.variable)} suppressHydrationWarning>
      <body
        className="min-h-[calc(100vh-1px)] flex flex-col font-sans bg-bun-background antialiased">
        <main className="relative flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}

