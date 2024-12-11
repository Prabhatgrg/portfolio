import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AOSInitializer from "@/AOSInitializer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prabhat Gurung',
  description: 'My Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AOSInitializer />
          {children}
      </body>
    </html>
  )
}
