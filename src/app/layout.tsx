import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import { ClerkProvider } from '@clerk/nextjs'
import { dark, shadesOfPurple } from '@clerk/themes';
import { deDE } from "@clerk/localizations";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className= "h-screen overflow-hidden">
          <Nav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
