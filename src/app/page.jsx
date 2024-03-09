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

export default function Home() {
	return (
		<>
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
