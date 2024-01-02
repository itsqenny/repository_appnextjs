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
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'zipperapp',
  description: 'powerful to zipperapp',
}

export const revalidate = 1;
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
