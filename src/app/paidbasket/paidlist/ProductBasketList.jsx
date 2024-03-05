"use client"

import Image from "next/image"
import Link from "next/link"

import initData from "@/app/UI/useInitData/initData"
import ProductListImage from "./ProductListImage"
import { useState } from "react"
import axios from "axios"

export const revalidate = 0
const ProductBasketList = ({ data }) => {
	const { userId } = initData()
	//const userId = "204688184"
	const [basketItem, setBasketItem] = useState(data.userOrder || [])
	const basketItems = basketItem?.map((item) => (
		<div
			key={item.order_id}
			className="product-container-order"
			style={{ display: "block" }}
		>
			<Link
				href={`/paid/id=${item.id}&name=${item.name}&ConfirmPrice=${item.price}&ConfirmSize=${item.size}&orderId=${item.order_id}`}
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
	))
	return (
		<>
			{basketItem.length > 0 && (
				<div className="product-block-order">
					<div className="product-order">Оплачено</div>
					<div className="product-container">{basketItems}</div>
				</div>
			)}
		</>
	)
}

export default ProductBasketList
