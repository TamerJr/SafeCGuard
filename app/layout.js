import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { Providers } from './GlobalRedux/provider'
import NavBar from './Components/NavBar'
const inter = Inter({ subsets: ['latin'] })
const poppins =Poppins({subsets:['latin'],weight:['400']})
export const metadata = {
  title: 'SafeGuard',
  description: 'website for books',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
        <NavBar/>
        {children}
        </Providers>
        </body>
    </html>
  )
}
