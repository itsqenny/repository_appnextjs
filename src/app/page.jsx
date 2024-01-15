import Products from "./products/page"
import Header from "./customer/page"
import CatalogTab from "./components/CatalogTab"
import SearchTab from "./components/SearchTab"
import OpenBanner from "./banners/open/banner"
import Bonus from "./bonus/Bonus"
import { Suspense } from "react"
import Loading from "./loading"
import ComingSoon from "./banners/comingsoon/banner"
import BasketItem from "./basket/basket"
import PaidBasket from "./paidbasket/paidBasket"

export default async function Home() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Header />
				<SearchTab />
				<Bonus/>	
				<BasketItem />
				<PaidBasket/>
				{/* <OpenBanner/> */}
				<ComingSoon />
				<CatalogTab />
				<Products />
			</Suspense>
		</>
	)
}
