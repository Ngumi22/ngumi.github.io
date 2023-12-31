import { Montserrat } from 'next/font/google'

import Navbar from '@/components/Navbar'

const inter = Montserrat({ subsets: ['latin'] })
import './globals.css'

export const metadata = {
  title: 'Ngumi',
  description: 'Web Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
