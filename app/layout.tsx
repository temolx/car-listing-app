import './globals.css'
import { Montserrat } from 'next/font/google'
import Nav from './components/Nav'
import CartIcon from './components/CartIcon'
import Cart from './components/Cart'
import CustomProvider from './redux/CustomProvider'

export const montserrat = Montserrat({ 
  subsets: ['latin'],
 })

export const metadata = {
  title: 'Car Listing App',
  description: 'Purchase cars and post car listings easily!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={montserrat.className}>
          <CustomProvider>
            {children}
            
            <Nav />
            <CartIcon />
            <Cart />
          </CustomProvider>
        </body>
      </html>
  )
}
