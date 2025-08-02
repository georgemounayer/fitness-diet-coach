import './globals.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <head /> {/* 🟢 MÅSTE finnas */}
      <body>{children}</body>
    </html>
  )
}
