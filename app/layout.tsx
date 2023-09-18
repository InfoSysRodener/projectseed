import '@styles/globals.css';
import type { Metadata } from 'next'
import Header from '@components/header';
import Footer from '@components/footer';
import { Raleway } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Project SEED',
  description: 'As an all-in-one blockchain ecosystem that promotes mass adoption, Project SEED is more than ready to become the future gaming ecosystem',
}

const raleway = Raleway({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
})


export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={raleway.className}>
      <body>
        <main>
          <Header/>
          {children}
          {/* <Footer/> */}
        </main>
      </body>
    </html>
  )
}
