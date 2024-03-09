import { Inter } from "next/font/google"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/customer.css"
import "../../styles/filters.css"
import "../../styles/global.css"
import "../../styles/header.css"
import "../../styles/item.css"
import "../../styles/items.css"
import "../../styles/points.css"
import "../../styles/search.css"
import "../../styles/searchTab.css"
import "../../styles/selectSize.css"
import "../../styles/stories.css"
import "../../styles/openBanner.css"
import "../../styles/ComingSoon.css"
import "../../styles/basket.css"
import Head from "next/head"
import Script from "next/script"
import ClientSideScrollRestorer from "./ClientSideScrollRestorer"
import { TmaSDKLoader } from "./UI/tmaSDKLoader/TmaSDKLoader"
const inter = Inter({ subsets: ["latin"] })
export const revalidate = 1

export const metadata = {
	title: "description",
	description: "zipperapp",
}
export const viewport = {
	width: "device-width",
	height: "device-height",
	initialScale: 1,
	maximumScale: 1,
	userScalable: 1,
	interactiveWidget: "resizes-visual",
	userScalable: "no",
}
export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				{/*<Script
					id="Telegram WebApp"
					type="text/javascript"
					src="https://telegram.org/js/telegram-web-app.js"
					strategy="beforeInteractive"
					defer
					async
				/>*/}
				<ClientSideScrollRestorer />
				<TmaSDKLoader>{children}</TmaSDKLoader>
				{/*<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
				<script>eruda.init();</script>*/}
			</body>
		</html>
	)
}
