"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import BasketListFetcher from "./BasketListFetcher"
import initData from "../../UI/useInitData/initData"

export const dynamic = "force-dynamic"

const BasketListItem = () => {
	const [basketData, setBasketData] = useState([])
	const { userId } = initData()
	//const userId = "204688184"
	const handleDelete = async (productId, order_id) => {
		setBasketData((prevBasketData) =>
			prevBasketData.filter((item) => item.order_id !== productId)
		)
		try {
			// Отправляем запрос на удаление элемента с заданным order_id
			await axios.post(`/api/delete?_userId=${userId}&_orderId=${order_id}`, {
				userId: userId,
				productId: productId,
				order_id: order_id,
			})

			// Обновляем локальный стейт basketData, удаляя элемент с заданным order_id
		} catch (error) {
			console.error("Ошибка при удалении товара:", error)
		}
	}

	return (
		<>
			<BasketListFetcher userId={userId} />
		</>
	)
}

export default BasketListItem
