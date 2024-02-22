"use client"

import initData from "@/app/UI/useInitData/initData"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function SelectSize({ item, onPriceClick, onSizeClick }) {
	const { WebApp } = initData()
	const [activeSize, setActiveSize] = useState(null)
	const [activePrice, setActivePrice] = useState(null)
	const findSizeByPrice = (price) => {
		return Object.keys(item).find((size) => item[size] === price)
	}

	useEffect(() => {
		if (item && item.size) {
			const setInitialValues = () => {
				const selectedSize = Object.keys(item.size).find(
					(size) => item.size[size] === item.price
				)

				if (selectedSize) {
					setActiveSize(selectedSize)
					setActivePrice(item.price)
					onPriceClick(item.price)
					onSizeClick(selectedSize)
				} else {
					// Если не найден размер с точной ценой, выбираем первый размер
					const firstSize = Object.keys(item.size)[0]
					setActiveSize(firstSize)
					setActivePrice(item.size[firstSize])
					onPriceClick(item.size[firstSize])
					onSizeClick(firstSize)
				}
			}

			setInitialValues()
		}
	}, [item])

	const handleSizeClick = (size, price) => {
		WebApp.HapticFeedback.impactOccurred("medium")
		setActiveSize(size)
		setActivePrice(price)
		onPriceClick(price) // вызовите функцию обратного вызова здесь
		onSizeClick(size)
	}

	return (
		<>
			<div className="size_box">
				{Object.entries(item?.size || {}).map(([size, price]) => (
					<button
						key={size}
						className={`size_button ${activeSize === size ? "active" : ""}`}
						onClick={() => handleSizeClick(size, price)}
					>
						<div className="Story-size-content">
							<div className="size-nubmer">{size}</div>
							<div className="size-price">{price}₽</div>
						</div>
					</button>
				))}
			</div>
		</>
	)
}
