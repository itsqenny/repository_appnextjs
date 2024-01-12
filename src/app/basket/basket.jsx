
"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import BasketFetcher from "./BasketFetcher"
import initData from "../UI/useInitData/initData"

const BasketItem = () => {
	const [basketData, setBasketData] = useState([])
    const { userId } = initData();
	const handleDelete = async (productId, order_id) => {
		setBasketData((prevBasketData) =>
			prevBasketData.filter((item) => item.order_id !== productId)
		)
		try {
			// Отправляем запрос на удаление элемента с заданным order_id
			await axios.post(
				"https://crm.zipperconnect.space/customers/user/basket/delete/item",
				{
					userId: userId,
					productId: productId,
					order_id: order_id,
				}
			)

			// Обновляем локальный стейт basketData, удаляя элемент с заданным order_id
		} catch (error) {
			console.error("Ошибка при удалении товара:", error)
		}
	}

	return (
		<>
			<BasketFetcher userId={userId} />
		</>
	)
}

export default BasketItem
