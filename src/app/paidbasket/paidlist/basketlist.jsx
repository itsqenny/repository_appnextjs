"use client"

import BasketListFetcher from "./BasketListFetcher"
import initData from "../../UI/useInitData/initData"

export const dynamic = "force-dynamic"

const BasketListItem = () => {
	const { userId } = initData()
	//const userId = "204688184"

	return (
		<>
			<BasketListFetcher userId={userId} />
		</>
	)
}

export default BasketListItem
