"use client"
import { usePathname } from 'next/navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import clsx from "clsx"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname(); 


  return (
    <html lang="en">
      <body className={clsx(
        inter.className, 
        'text-dark-gray font-bold ', 
        )}
      >
        {
          !pathname?.includes('auth') && (
            <Navbar /> 
          )
        }
        {children}
      </body>
    </html>
  )
}