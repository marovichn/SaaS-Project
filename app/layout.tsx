import { ClerkProvider } from '@clerk/nextjs';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "BrainPulse",
  description:
    "Cutting-edge SaaS platform that harnesses the boundless potential of artificial intelligence to enhance and revolutionize the way you engage with your thoughts and ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
