"use client"

import Link from "next/link"
import axios from "axios"
import ProductImage from "./ProductImage"
import initData from "../UI/useInitData/initData"
import { useState } from "react"

export const revalidate = 0
const ProductBasket = ({ data }) => {
	//const userId = '204688184'
	const { userId } = initData()
	const initialBasketItems = data && data.basket ? data.basket.slice(0, 2) : [];
	const [basketItem, setBasketItem] = useState(initialBasketItems)

	const handleDelete = async (item) => {
		try {
			// Отправляем запрос на удаление элемента с заданным order_id
			await axios.get(
				`https://crm.zipperconnect.space/customers/user/basket/delete/item?userId=${userId}&productId=${item.id}&orderId=${item.order_id}`
			)

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
										<ProductImage item={item} />
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
		{data && data.basket && data.basket && basketItem.length > 0 && (
		<div className="product-block-order">
			<div className="product-order">
				Оплачивается
				{data && data.basket && data.basket.length > 2 && (
					<Link href={`/basket/`}>
						<div className="product-order-open-all">
							Все
							<svg
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="m7.5 5 5 5-5 5"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</div>
					</Link>
				)}
			</div>
			<div className="product-container">{basketItems}</div>
		</div>
		)}
		</>
	)
}

export default ProductBasket
