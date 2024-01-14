"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import BasketFetcher from "./BasketFetcher"
import initData from "../UI/useInitData/initData"

const BasketItem = () => {
	const [basketData, setBasketData] = useState([])
	const { userId } = initData()
	

	return (
		<>
			<BasketFetcher userId={userId} />
		</>
	)
}

export default BasketItem
