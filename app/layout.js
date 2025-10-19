import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Majestic Group - Homegrown Essentials',
  description: 'A proudly Nepali company dedicated to redefining everyday living through homegrown essentials.',
  keywords: 'Majestic Group, Nepal, Elba, Candy, Bambusa, Sukoon, NepaKids, Elica',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}