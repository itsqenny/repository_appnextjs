
"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import BasketFetcher from "./BasketFetcher"
const BasketItem = ({ cart, onDataUpdate, userId }) => {
	const [basketData, setBasketData] = useState([])

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
			<BasketFetcher />
		</>
	)
}

export default BasketItem
