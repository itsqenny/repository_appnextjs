import Products from "./products/page"
import Header from "./customer/page"
import CatalogTab from "./components/CatalogTab"
import SearchTab from "./components/SearchTab"
import OpenBanner from "./banners/open/banner"
import BonusTab from "./bonus/BonusTab"
import { Suspense } from "react"
import Loading from "./loading"
import ComingSoon from "./banners/comingsoon/banner"
import BasketItem from "./basket/basket"

export default async function Home() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Header />
				<SearchTab />
				<BonusTab />
				<BasketItem />
				{/* <OpenBanner/> */}
				<ComingSoon />
				<CatalogTab />
				<Products />
			</Suspense>
		</>
	)
}
