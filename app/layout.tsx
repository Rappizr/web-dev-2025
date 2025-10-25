import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import AOSProvider from "@/components/AOSProvider";
import Provider from './Provider'

export const metadata: Metadata = {
  title: 'UMK Malang',
  description: 'Platform digital UMKM Malang',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/logo/icon color.svg' },
      { url: '/logo/icon color.svg', sizes: '32x32', type: 'image/png' },
      { url: '/logo/icon color.svg', sizes: '16x16', type: 'image/png' },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
    return (
      <html lang="en">
        <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
          <Provider>
            <AOSProvider />
            {children}
            <Analytics />
          </Provider>
        </body>
      </html>
    );
}
