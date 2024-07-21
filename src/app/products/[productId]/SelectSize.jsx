"use client"

import initData from "@/app/UI/useInitData/initData"
import {
	useSearchParams,
	useParams,
	useRouter,
	usePathname,
} from "next/navigation"
import { useEffect, useState } from "react"

export default function SelectSize({
	item,
	onPriceClick,
	onSizeClick,
	selectedSize,
}) {
	const { WebApp } = initData()
	const params = useParams()
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [activeSize, setActiveSize] = useState(selectedSize)
	const [activePrice, setActivePrice] = useState(null)
	const findSizeByPrice = (price) => {
		return Object.keys(item).find((size) => item[size] === price)
	}

	useEffect(() => {
		if (item && item.size) {
			const setInitialValues = () => {
				const selectedSize = Object.keys(item.skuId).find(
					(size) => item.size.eu[size] === item.price
				)

				if (selectedSize) {
					setActiveSize(selectedSize)
					setActivePrice(item.price)
					onPriceClick(item.price)
					onSizeClick(selectedSize)
				} else {
					// Если не найден размер с точной ценой, выбираем первый размер
					const firstSize = Object.keys(item.skuId)[0]
					setActiveSize(firstSize)
					setActivePrice(item.size.eu[firstSize])
					onPriceClick(item.size.eu[firstSize])
					onSizeClick(firstSize)
				}
			}

			setInitialValues()
		}
	}, [item])

	const handleSizeClick = (size, price, skuId) => {
		WebApp.HapticFeedback.impactOccurred("medium")
		setActiveSize(skuId)
		setActivePrice(price)
		onPriceClick(price) // вызовите функцию обратного вызова здесь
		onSizeClick(size)
		const params = new URLSearchParams(searchParams)

		if (skuId) {
			params.set("sku", skuId)
		} else {
			params.delete("sku")
		}
		router.replace(`${pathname}?${params.toString()}`)
	}
	const fractionalSizeRegex = /[⅛⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅟]/

	return (
		<>
			<div className="size_box">
				{item?.skus
					.filter((item) => item.price > 0)
					.filter((item) => {
						const size = item.size.eu
						return size && !fractionalSizeRegex.test(size)
					})
					.map((item) => (
						<button
							key={item.skuId}
							className={`size_button ${
								activeSize === item.skuId ? "active" : ""
							}`}
							onClick={() =>
								handleSizeClick(item.size.eu, item.price, item.skuId)
							}
						>
							<div className="Story-size-content">
								<div className="size-nubmer">{item.size.eu}</div>
								<div className="size-price">{item.price}₽</div>
							</div>
						</button>
					))}
			</div>
		</>
	)
}
