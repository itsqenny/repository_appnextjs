"use client"
import PaidFetcher from "./PaidFetcher"
import initData from "../UI/useInitData/initData"

const PaidBasket = () => {
	const { userId } = initData()
	//const userId = "204688184"

	return (
		<>
			<PaidFetcher userId={userId} />
		</>
	)
}

export default PaidBasket
