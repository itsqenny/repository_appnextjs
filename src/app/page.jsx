"use client"
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
import { Suspense } from "react"
import useWebApp from "./UI/useWebApp/useWebApp"

export default function Home() {
	return (
		<>
			<Suspense fallback={<></>}>
				<Customer />
				<SearchTab />
				{/*<Stories />*/}
				<Bonus />
				{/*<OpenBanner />*/}
				<BasketItem />
				<PaidBasket />

				{/*<ComingSoon /> */}
				<CatalogTab />
				<ProductsPage />
			</Suspense>
		</>
	)
}
