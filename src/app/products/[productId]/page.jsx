"use client"
import Link from "next/link"
import SelectSize from "./SelectSize"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
	useParams,
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation"
import ButtonPayment from "@/app/UI/MainButton/ButtonPayment"
import { BackButton } from "@twa-dev/sdk/react"
import SkeletonProduct from "./components/SkeletonProduct"
import StoriesBanner from "@/app/stories/components/StoriesBanner"
import { createUrl } from "@/app/lib/utils"

export default function ProductId() {
	const pathname = usePathname()
	const params = useParams()
	const router = useRouter()
	const searchParams = useSearchParams()
	const selectedSize = searchParams.get("sku")
	const [item, setItem] = useState(null)
	const [currentPrice, setCurrentPrice] = useState(null)
	const [currentSize, setCurrentSize] = useState(null)
	const [addToCart, setAddToCart] = useState(false)
	const [addFavorite, setFavorite] = useState(false)
	const [showPopup, setShowPopup] = useState(false)
	const [message, setMessage] = useState("")

	useEffect(() => {
		fetch(`/api/products/${params.productId}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("500 (Not Found)")
				}
				return response.json()
			})
			.then((item) => {
				setItem(item)
				if (selectedSize) {
					const selectedSku = item.skus.find(
						(sku) => JSON.stringify(sku.skuId) === selectedSize
					)
					if (selectedSku) {
						setCurrentPrice(selectedSku.price)
						setCurrentSize(selectedSku.size.eu)
					} else {
						// Установка значений по умолчанию, если selectedSize не найден
						setCurrentPrice(null)
						setCurrentSize(null)
					}
				}
			})
			.catch((error) => {
				console.error("Ошибка при загрузке продукта:", error)
			})
	}, [params.productId, selectedSize])

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
		const randomId = Math.floor(0 + Math.random() * 9999999)
		return `${randomId}`
	}

	const uniqueOrderId = generateOrderId()

	const handlePaymentClick = () => {
		const queryParams = {
			spuId: item.spuId,
			name: item.name,
			ConfirmPrice: currentPrice.toString(),
			ConfirmSize: currentSize,
			orderId: uniqueOrderId,
		}
		//console.log("queryParams" + JSON.stringify(queryParams))
		const queryString = new URLSearchParams(queryParams).toString()
		router.push(`/confirm/${queryString}`)
	}

	const fractionalSizeRegex = /[⅛⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅟]/

	const handleSizeClick = (skuId, price, size) => {
		handlePriceChange(price)
		handleSizeChange(size)
		const sizeSearchParams = new URLSearchParams(searchParams.toString())
		sizeSearchParams.set("sku", skuId)
		const sizeURL = createUrl(pathname, sizeSearchParams)
		router.replace(sizeURL) // Используем replace
	}

	return (
		<>
			<BackButton />
			{!item ? (
				<SkeletonProduct />
			) : (
				<div className="full-item">
					<div className="images-slider-wrapper">
						<div className="images-slider-images">
							{item?.images.slice(0, 4).map((img, id) => (
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
						<p className="full-item-price">{currentPrice} ₽</p>
						<hr />

						<div className="size_box">
							{item?.skus
								.filter((item) => item.price > 0)
								.filter((item) => {
									const size = item.size.eu
									return size && !fractionalSizeRegex.test(size)
								})
								.map((item) => {
									const isActive = selectedSize === JSON.stringify(item.skuId)
									return (
										<button
											key={item.skuId}
											className={`size_button ${
												isActive ? "active" : console.log("no")
											}`}
											onClick={() =>
												handleSizeClick(item.skuId, item.price, item.size.eu)
											}
										>
											<div className="Story-size-content">
												<div className="size-nubmer">{item.size.eu}</div>
												<div className="size-price">{item.price}₽</div>
											</div>
										</button>
									)
								})}
						</div>
					</div>
				</div>
			)}

			<div className="main-button">
				<button onClick={handlePaymentClick}>Перейти к оплате</button>
			</div>

			<ButtonPayment handlePaymentClick={handlePaymentClick} />

			{showPopup && (
				<div className="main-popup">
					<div className="main-popup show">{message}</div>
				</div>
			)}

			<StoriesBanner />
		</>
	)
}
