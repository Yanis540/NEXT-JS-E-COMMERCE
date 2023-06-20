import './globals.css'
import { Inter } from 'next/font/google'
import clsx from "clsx"

import {default as GlobalRootLayout} from './components/Layout/RootLayout'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yanis Shop',
  description: 'Shop to buy any sort of things',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Create a client

  return (
  <html lang="en">
    <body className={clsx(inter.className, 'text-dark-gray font-medium flex flex-col min-h-screen w-full ', )}>
      <GlobalRootLayout>
        {children}
      </GlobalRootLayout>
    </body>
  </html>
  )
}
