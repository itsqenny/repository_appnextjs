"use client"
import useSWR from "swr"
import Image from "next/image"
import { useRouter } from "next/navigation"
const fetcher = (url) => fetch(url).then((res) => res.json())
export const revalidate = 0
const ProductBasket = ({ data }) => {
	const { data: product, error } = useSWR(
		`https://repositorydb.onrender.com/products/${data.basket.id}`,
		fetcher
	)
	if (error) return "An error has occurred."
	if (!product) return "Loading..."
  console.log(product)
	const router = useRouter()
	const handlePaymentClick = () => {
		const queryParams = {
			id: data.basket.id,
			name: data.basket.name,
			ConfirmPrice: data.basket.price,
			ConfirmSize: data.basket.size,
			orderId: data.basket.order_id,
		}
		const queryString = new URLSearchParams(queryParams).toString()
		router.push(`/confirm/${queryString}`)
		console.log("send data", queryParams)
	}
	const basketItems = data.basket.map((item, index) => (
		<div key={item.order_id} className="product-container-order">
			<div className="product-swiper">
				<div className="product-image-component" onClick={handlePaymentClick}>
					<div className="product-image-container">
						<div className="product-image-card">
							<div className="product-image-inner">
								<div className="product-image-inner-row">
                
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
			</div>
			<button onClick={() => handleDelete(product.order_id)}>
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
		<div className="product-block-order">
			<div className="product-order">Оплачивается</div>
			<div className="product-container">{basketItems}</div>
		</div>
	)
}

export default ProductBasket
