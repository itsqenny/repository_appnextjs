"use client"


import BasketFetcher from "./BasketFetcher"
import initData from "../UI/useInitData/initData"

const BasketItem = () => {
	//const { userId } = initData()
	const userId = '204688184'

	return (
		<>
			<BasketFetcher userId={userId} />
		</>
	)
}

export default BasketItem
