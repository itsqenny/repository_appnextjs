"use client"

import Link from "next/link"
import ProductImage from "../basket/ProductImage"

export const revalidate = 0
const ProductPaid = ({ data }) => {
	const initialBasketItems = data ? data.userOrder.slice(0, 2) : []

	const basketItems = initialBasketItems.map((item, index) => (
		<div
			key={item.order_id}
			className="product-container-order"
			style={{ display: "block" }}
		>
			<Link
				href={`/order/id=${item.id}&name=${item.name}&ConfirmPrice=${item.price}&ConfirmSize=${item.size}&orderId=${item.order_id}`}
			>
				<div className="product-image-component">
					<ProductImage item={item} />
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
			{data && initialBasketItems.length > 0 && (
				<div className="product-block-order">
					<div className="product-order">
						Оплачено
						{data && data.userOrder.length > 2 && (
							<Link href={`/paidbasket/`}>
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

export default ProductPaid
