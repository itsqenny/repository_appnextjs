"use client"

import BonusFetcher from "./BonusFetcher"
import initData from "../UI/useInitData/initData"
export const revalidate = 0
export const dynamic = "force-dynamic"
const Bonus = () => {
	const { userId } = initData()
	//const userId = "204688184"

	return (
		<>
			<BonusFetcher userId={userId} />
		</>
	)
}

export default Bonus
