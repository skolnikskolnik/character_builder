import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Création de personnage',
  description: 'Créer des personnages pour les jeux de rôåle-play',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}>
        {children}
      </body>
    </html>
  )
}
