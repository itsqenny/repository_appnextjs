"use client"

import Image from "next/image"
import Link from "next/link"
import Dynamic from "next/dynamic"
import initData from "@/app/UI/useInitData/initData"
import ProductListImage from "./ProductListImage"
import { useState } from "react"
import axios from "axios"
export const dynamic = "force-dynamic"
export const revalidate = 0
const Back = Dynamic(() => import("../../UI/BackButton/BackButton"))
const ProductBasketList = ({ data }) => {
	const { userId } = initData()
	//const userId = "204688184"
	const [basketItem, setBasketItem] = useState(data.userOrder || [])

	const handleDelete = async (item) => {
		try {
			// Отправляем запрос на удаление элемента с заданным order_id
			await axios.get(`/api/delete?_userId=${userId}&_orderId=${item.order_id}`)

			// Update the state by filtering out the deleted item
			setBasketItem((prevItems) =>
				prevItems.filter((basketItem) => basketItem.order_id !== item.order_id)
			)
		} catch (error) {
			console.error("Ошибка при удалении товара:", error)
		}
	}
	const basketItems = basketItem.map((item, index) => (
		<div key={item.order_id} className="product-container-order">
			<div className="product-swiper">
				<Link
					href={`/order/id=${item.id}&name=${item.name}&ConfirmPrice=${item.price}&ConfirmSize=${item.size}&orderId=${item.order_id}`}
				>
					<div className="product-image-component">
						<div className="product-image-container">
							<div className="product-image-card">
								<div className="product-image-inner">
									<div className="product-image-inner-row">
										<ProductListImage item={item} />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="product-details">
						<div className="product-price-and-datecreated">
							<div className="product-price-and-date">
								<span className="product-price">{item.price}</span>
								<span className="product-created">Создан: {item.time}</span>
							</div>
						</div>
						<div className="product-name">{item.name.toUpperCase()}</div>
						<span className="product-size">
							Размер: <b>{item.size}</b>
						</span>

						<span className="product-size">Оплатить</span>
					</div>
				</Link>
			</div>
			<button onClick={() => handleDelete(item)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="36"
					height="36"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="ai ai-Cross"
				>
					<path d="M20 20L4 4m16 0L4 20" />
				</svg>
			</button>
		</div>
	))

	return (
		<>
			<Back />
			<div className="product-block-order">
				<div className="product-order">Корзина</div>
				<div className="product-container">{basketItems}</div>
			</div>
		</>
	)
}

export default ProductBasketList
