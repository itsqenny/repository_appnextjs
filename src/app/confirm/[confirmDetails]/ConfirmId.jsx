"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Checkout from "./checkout"

import ButtonCheckout from "@/app/UI/ButtonCheckout/ButtonCheckout"
import Back from "@/app/UI/BackButton/BackButton"
import { useParams } from "next/navigation"
import initData from "@/app/UI/useInitData/initData"
import SelectBonus from "./SelectBonus"
import useSWR from "swr"
import FormData from "@/app/components/popup/FormData"
import SkeletonProduct from "../../products/[productId]/components/SkeletonProduct"
import StoriesBanner from "@/app/stories/components/StoriesBanner"
const fetcher = (url) => fetch(url).then((res) => res.json())
export default function ConfirmId({ data, userId }) {
	const params = useParams()
	const decodedString = decodeURIComponent(params.confirmDetails)
	const parsedParams = Object.fromEntries(new URLSearchParams(decodedString))
	const { id, name, ConfirmPrice, ConfirmSize, orderId } = parsedParams
	const { queryId, WebApp, user } = initData()
	const { data: userData, error } = useSWR(
		`/api/customer/settings/${userId}`,
		fetcher
	)
	//console.log(`userId in confirm: ${userId}`)
	const [item, setItem] = useState(null)
	const [size, setSize] = useState(ConfirmSize || null)
	const [price, setPrice] = useState(ConfirmPrice || null)
	const [isCredited, setCredited] = useState(false)
	const [showConfirmation, setShowConfirmation] = useState(true)
	const [userBonus, setUserBonus] = useState(0)
	const [paymentData, setPaymentData] = useState("WAIT")
	const [customerStatus, setCustomerStatus] = useState(false)
	const [isVisible, setIsPopupVisible] = useState(false)
	const [subsBonus, setSubsBonus] = useState(100)
	//console.log("size:", size)
	const resultSize = size !== null ? size : ConfirmSize
	const sizeResult = resultSize.replace(/["']/g, "")
	//console.log("resultSize:", sizeResult)
	//console.dir(resultSize)
	const message = "Чтобы продолжить покупку, необходимо заполнить данные"
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
		.map((width) => `${item?.img}?w=${width}&q=75 ${width}w`)
		.join(", ")

	const paymentDate = new Date()
	const options = { month: "short", day: "numeric" }
	const onCheckout = async () => {
		if (
			userData &&
			Object.values(userData).some(
				(value) => value === null || value === undefined || value === ""
			)
		) {
			WebApp.HapticFeedback.notificationOccurred("error")
			setIsPopupVisible(true)
		} else {
			setCredited(true)
			setShowConfirmation(false)

			const data = {
				name: name,
				price: price !== null ? price : ConfirmPrice,
				size: size !== null ? size : ConfirmSize,
				queryId,
				userId,
				order_id: orderId,
				productId: id,
				time: paymentDate.toLocaleDateString("ru-RU", options),
				remainingBonus: userBonus.restBonus,
				saveBonus: userBonus.deductBonus,
				newBonus: !isCredited ? subsBonus : 0,
			}

			try {
				const response = await fetch(`/api/customer/pay`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				})

				const responseData = await response.json()
				console.log(`responseData: ${JSON.stringify(responseData)}`)
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
	}

	return (
		<>
			<Back />
			{!item ? (
				<>
					<SkeletonProduct />
				</>
			) : (
				<>
					<div className="confirm-item">
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
						{showConfirmation ? (
							<>
								<div className="bg-full-item-name">
									<div className="confirm-item-name">
										{name}
										<span className="confirm-item-size">
											{" "}
											размер {resultSize} EU
										</span>
									</div>
								</div>
								<div className="item-order-info">
									<div className="confirm-item-price">
										{price !== ConfirmPrice ? (
											<>
												{price} ₽
												<del
													style={{
														marginLeft: "4px",
														fontSize: "24px",
														color: "var(--tg-hint)",
													}}
												>
													{ConfirmPrice} ₽
												</del>{" "}
											</>
										) : (
											<>{ConfirmPrice}₽</>
										)}
									</div>
									<div className="public-oferta">
										<p className="public-ofert-text">
											Оплачивая заказ, вы соглашаетесь с условиями{" "}
											<a className="public-oferta-link">публичной оферты</a>
										</p>
									</div>
								</div>
								<SelectBonus
									price={ConfirmPrice}
									setParentPrice={setPrice}
									setParentBonus={setUserBonus}
									data={data}
									userId={userId}
									isCredited={isCredited}
									setCredited={setCredited}
									setSubsBonus={setSubsBonus}
								/>

								{!isVisible ? (
									<>
										{/* 
										<div className="main-button">
											<button onClick={onCheckout}>
												Купить за {price !== null ? price : ConfirmPrice}₽
											</button>
										</div>
										*/}
										<ButtonCheckout
											onCheckout={onCheckout}
											price={price !== null ? price : ConfirmPrice}
										/>
									</>
								) : (
									<>
										<FormData
											isVisible={isVisible}
											setIsPopupVisible={setIsPopupVisible}
											userId={userId}
											user={user}
										/>
									</>
								)}
							</>
						) : (
							<>
								<Checkout
									customerStatus={customerStatus}
									paymentData={paymentData}
									userId={userId}
									items={parsedParams}
									isCredited={isCredited}
									price={price}
									orderId={orderId}
								/>
							</>
						)}
					</div>
					<StoriesBanner />
				</>
			)}
		</>
	)
}
