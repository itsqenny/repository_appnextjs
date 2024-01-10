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
import Head from 'next/head'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'zipperapp',
  description: 'powerful to zipperapp',
  name: 'viewport',
  content: 'width=device-width',
}

export const revalidate = 1;
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <Script 
      id="Telegram WebApp"
      type="text/javascript"
      src="./UI/TelegramWebApp/telegram-web-app.js" strategy="beforeInteractive" defer async
      />
      </body>
      
    </html>
  )
}
