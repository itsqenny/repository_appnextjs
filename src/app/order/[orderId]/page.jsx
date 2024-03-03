"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import ButtonCheckout from "@/app/UI/ButtonCheckout/ButtonCheckout"
import Back from "@/app/UI/BackButton/BackButton"
import { useParams } from "next/navigation"
import Checkout from "@/app/confirm/[confirmDetails]/checkout"

import initData from "@/app/UI/useInitData/initData"

export default function ProductOffer() {
	const params = useParams()
	const decodedParamsString = decodeURIComponent(params.orderId)
	const parsedParams = Object.fromEntries(
		new URLSearchParams(decodedParamsString)
	)
	const { id, name, ConfirmPrice, ConfirmSize, orderId } = parsedParams
	const { userId, queryId } = initData()
	//const userId = '204688184'
	const [item, setItem] = useState(null)
	const [size, setSize] = useState(ConfirmSize || null)
	const [price, setPrice] = useState(ConfirmPrice || null)
	const [isCredited, setCredited] = useState(false)
	const [showConfirmation, setShowConfirmation] = useState(true)
	const [paymentData, setPaymentData] = useState("WAIT")
	const [customerStatus, setCustomerStatus] = useState(true)
	//const userId = '1234'
	useEffect(() => {
		// Выполнение HTTP-запроса
		fetch(`/api/products/${parsedParams.id}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("500 (Not Found)")
				}
				return response.json()
			})
			.then((data) => {
				console.log("Received data from API:", data)
				setItem(data)
			})
			.catch((error) => {
				console.error("Ошибка при загрузке продукта:", error)
			})
	}, [id])

	const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
	const srcSet = widths
		.map((width) => `${item.img}?w=${width}&q=75 ${width}w`)
		.join(", ")

	const onCheckout = async () => {
		setCredited(true)
		setShowConfirmation(false)
		const data = {
			name: name,
			price: ConfirmPrice,
			size: ConfirmSize,
			queryId,
			userId,
			order_id: orderId,
			productId: id,
			time: time,
			remainingBonus: remainingBonus,
			saveBonus: deductedAmount,
			newBonus: isCredited ? 0 : 50,
		}

		try {
			const response = await fetch(
				"https://crm.zipperconnect.space/customer/settings/client/buy/offer/pay",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			)

			const responseData = await response.json()

			if (responseData.paymentUrl) {
				Telegram.WebApp.openLink(responseData.paymentUrl)
				setCustomerStatus(true)
			} else {
				console.error("Отсутствует ссылка для оплаты.")
			}
		} catch (error) {
			console.error("Ошибка отправки данных на сервер:", error)
		}
	}

	return (
		<>
			<Back />
			<div className="confirm-item">
				<div className="images-slider-wrapper">
					<div className="images-slider-images">
						{item.img.map((img, id) => (
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
				<Checkout
					customerStatus={customerStatus}
					paymentData={paymentData}
					userId={userId}
					items={parsedParams}
					isCredited={isCredited}
					price={ConfirmPrice}
					orderId={orderId}
				/>
			</div>
			<ButtonCheckout onCheckout={onCheckout} price={ConfirmPrice} />
		</>
	)
}
