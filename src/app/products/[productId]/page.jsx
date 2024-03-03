"use client"
import Link from "next/link"
import SelectSize from "./SelectSize"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import ButtonPayment from "@/app/UI/MainButton/ButtonPayment"
import { BackButton } from "@twa-dev/sdk/react"
import SkeletonProduct from "./components/SkeletonProduct"

export default function ProductId() {
	const params = useParams()
	const router = useRouter()
	const [item, setItem] = useState(null)
	const [currentPrice, setCurrentPrice] = useState(null)
	const [currentSize, setCurrentSize] = useState(null)
	const [addToCart, setAddToCart] = useState(false)
	const [addFavorite, setFavorite] = useState(false)
	const [showPopup, setShowPopup] = useState(false)
	const [message, setMessage] = useState("")
	useEffect(() => {
		// Выполнение HTTP-запроса
		fetch(`/api/products/${params.productId}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("500 (Not Found)")
				}
				return response.json()
			})
			.then((item) => {
				setItem(item)
				setCurrentPrice(item.price)
				setCurrentSize(item.size)
			})
			.catch((error) => {
				console.error("Ошибка при загрузке продукта:", error)
			})
	}, [params.productId])
	const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
	const srcSet = widths
		.map((width) => `${item?.img}?w=${width}&q=75 ${width}w`)
		.join(", ")

	const handlePriceChange = (newPrice) => {
		setCurrentPrice(newPrice)
	}
	const handleSizeChange = (newSize) => {
		setCurrentSize(newSize)
	}

	const generateOrderId = () => {
		const randomId = Math.floor(0 + Math.random() * 9999999) // Генерируйте случайное шестизначное число
		return `${randomId}`
	}

	const uniqueOrderId = generateOrderId()

	const handlePaymentClick = () => {
		const queryParams = {
			id: item.id,
			name: item.name,
			ConfirmPrice: currentPrice,
			ConfirmSize: currentSize,
			orderId: uniqueOrderId,
		}
		const queryString = new URLSearchParams(queryParams).toString()
		router.push(`/confirm/${queryString}`)
		//console.log('send data', queryParams);
	}

	return (
		<>
			<BackButton />
			{!item ? (
				<>
					<SkeletonProduct />
				</>
			) : (
				<>
					<div className="full-item">
						<div className="images-slider-wrapper">
							<div className="images-slider-images">
								{item?.img.slice(0, 4).map((img, id) => (
									<div className="images-slider-image-item" key={id}>
										<div className="image-item-wrapper">
											<Image
												src={img}
												alt={`photo-${id}`}
												width={3840}
												height={2160}
												srcSet={srcSet}
												sizes="(max-width: 768px) 100vw, 50vw"
												style={{
													height: "100%",
													width: "100%",
													margin: "4% 0 5% 0",
													objectFit: "cover",
													WebkitUserSelect: "none",
													MozUserSelect: "none",
													userSelect: "none",
													pointerEvents: "none",
												}}
												priority={true}
											/>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="bg-full-item-name">
							<div className="full-item-name">{item?.name}</div>
						</div>
						<div className="item-order-info">
							<p className="full-item-price">{currentPrice}₽</p>
							<hr />
							<SelectSize
								item={item}
								onPriceClick={handlePriceChange}
								onSizeClick={handleSizeChange}
							/>
						</div>
					</div>
					{/*
					<div className="main-button">
						<button onClick={handlePaymentClick}>Перейти к оплате</button>
					</div>
					*/}

					<ButtonPayment handlePaymentClick={handlePaymentClick} />
					{showPopup && (
						<div className="main-popup">
							<div className="main-popup show">{message}</div>
						</div>
					)}
				</>
			)}
		</>
	)
}
