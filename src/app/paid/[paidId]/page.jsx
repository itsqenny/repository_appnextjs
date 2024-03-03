"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Back from "@/app/UI/BackButton/BackButton"
import { useParams } from "next/navigation"
import Checkout from "@/app/confirm/[confirmDetails]/checkout"

import initData from "@/app/UI/useInitData/initData"

export default function ProductOffer() {
	const params = useParams()
	const decodedParamsString = decodeURIComponent(params.paidId)
	const parsedParams = Object.fromEntries(
		new URLSearchParams(decodedParamsString)
	)
	const { id, name, ConfirmPrice, ConfirmSize, orderId } = parsedParams
	const { userId, queryId } = initData()
	//const userId = "204688184"
	const [item, setItem] = useState(null)
	const [size, setSize] = useState(ConfirmSize || null)
	const [price, setPrice] = useState(ConfirmPrice || null)
	const [isCredited, setCredited] = useState(false)
	const [showConfirmation, setShowConfirmation] = useState(true)
	const [paymentData, setPaymentData] = useState("WAIT")
	const [customerStatus, setCustomerStatus] = useState(true)

	useEffect(() => {
		// Выполнение HTTP-запроса
		fetch(`/api/products/${id}`)
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
		</>
	)
}
