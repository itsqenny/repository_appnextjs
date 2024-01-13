import { Inter } from 'next/font/google'
import '../../styles/customer.css'
import '../../styles/filters.css'
import '../../styles/global.css'
import '../../styles/header.css'
import '../../styles/item.css'
import '../../styles/items.css'
import '../../styles/points.css'
import '../../styles/search.css'
import '../../styles/searchTab.css'
import '../../styles/selectSize.css'
import '../../styles/stories.css'
import '../../styles/openBanner.css'
import '../../styles/ComingSoon.css'
import '../../styles/basket.css'
import Head from 'next/head'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })


export const revalidate = 1;

export const metadata = {
  title: 'description',
  description: 'zipperapp',
  name: 'viewport',
  content: 'width=device-width',
}
export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning> 
      
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <Script 
        id="Telegram WebApp"
        type="text/javascript"
        src="https://telegram.org/js/telegram-web-app.js" 
        strategy="beforeInteractive" 
        defer 
        async/>
      </body>
      
    </html>
  )
}
