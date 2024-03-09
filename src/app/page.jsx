"use client"
import { useMemo } from "react"
import ProductsPage from "./products/page"
import CatalogTab from "./components/CatalogTab"
import SearchTab from "./components/SearchTab"
import OpenBanner from "./banners/open/banner"
import Bonus from "./bonus/Bonus"
import ComingSoon from "./banners/comingsoon/banner"
import BasketItem from "./basket/basket"
import PaidBasket from "./paidbasket/paidBasket"
import Customer from "./customer/Customer"
import Stories from "./stories/page"
import { useInitData } from "@tma.js/sdk-react"

function InitData() {
	const initData = useInitData()

	const initDataJson = useMemo(() => {
		if (!initData) {
			return "Init data is empty."
		}
		const {
			authDate,
			chat,
			hash,
			canSendAfter,
			queryId,
			receiver,
			user,
			startParam,
		} = initData

		return JSON.stringify(
			{
				authDate,
				chat,
				hash,
				canSendAfter,
				queryId,
				receiver,
				user,
				startParam,
			},
			null,
			" "
		)
	}, [initData])

	return (
		<pre>
			<code>{initDataJson}</code>
		</pre>
	)
}

export default async function Home() {
	return (
		<>
			<InitData />
			<Customer />
			<SearchTab />
			<Stories />
			<Bonus />
			<BasketItem />
			<PaidBasket />
			{/*<OpenBanner/>
			{/*<ComingSoon /> */}
			<CatalogTab />
			<ProductsPage />
		</>
	)
}
