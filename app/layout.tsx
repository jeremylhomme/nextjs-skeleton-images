import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Skeleton Images Demo',
  description: 'A demo of skeleton loading states for images in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
