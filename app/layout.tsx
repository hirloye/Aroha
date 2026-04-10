import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aroha Wellness Clinic',
  description: 'Restore Balance. Awaken Your Healing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className="min-h-screen text-slate-800 font-sans selection:bg-primaryBrand selection:text-white flex flex-col bg-background"
        style={{ backgroundImage: 'var(--chakra-bg)' }}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
