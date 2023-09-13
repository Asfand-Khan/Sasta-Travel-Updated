import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import UpperNavbar from './components/navbar/UpperNavbar'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sasta Travel',
  description: 'Explore the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <UpperNavbar/>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
