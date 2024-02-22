"use client"
import { useState } from "react"
import initData from "@/app/UI/useInitData/initData"
import Link from "next/link"
import SubsFetcherId from "./SubsFetcherId"
import SubsCardPlus from "@/app/components/SubsCard/SubsCardPlus"
import SubsCardMinus from "@/app/components/SubsCard/SubsCardMinus"
export default function SelectBonus({
	price,
	setParentPrice,
	setParentBonus,
	data,
	userId,
	isCredited,
	setCredited,
	setSubsBonus,
}) {
	const { WebApp } = initData()
	const [restBonus, setRestBonus] = useState(0)
	const [deductBonus, setDeductBonus] = useState(0)
	const { SubsInfo, SubsMinusInfo } = SubsFetcherId()
	setSubsBonus(SubsInfo)
	const priceNumeric = parseFloat(
		price.replace(/[\u00a0₽ ]/g, "").replace(",", ".")
	)

	if (priceNumeric !== undefined && !isNaN(priceNumeric)) {
		let result = priceNumeric - 0.1 * priceNumeric
	} else {
		console.error(``)
	}
	const handleToggle = () => {
		if (data > 0) {
			setCredited(!isCredited)
			let calculatedPrice

			if (isCredited) {
				// Устанавливаем price в null при активации "Начислить"
				calculatedPrice = price
			} else {
				// Вставляем пробел между числами при списании бонусов
				calculatedPrice =
					price.replace(/[\u00a0₽ ]/g, "").replace(",", ".") - data
				calculatedPrice = Math.max(calculatedPrice, SubsMinusInfo)
				calculatedPrice = calculatedPrice
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0")
			}

			const priceNumeric = parseFloat(
				price.replace(/[\u00a0₽ ]/g, "").replace(",", ".")
			)
			const difference =
				priceNumeric -
				parseFloat(calculatedPrice.replace(/[\u00a0₽ ]/g, "").replace(",", "."))
			const rest = data - difference
			setRestBonus(rest)
			setDeductBonus(difference)
			setParentPrice(calculatedPrice)
			setParentBonus({
				restBonus: rest,
				deductBonus: difference,
			})
			WebApp.HapticFeedback.impactOccurred("medium")
		} else {
			WebApp.HapticFeedback.notificationOccurred("error")
		}
	}
	return (
		<>
			<div className="item-toggle-box">
				<div className="item-toggle-box-title">Бонусы Zipperapp</div>
				<div
					className={`item-switcher-box ${isCredited ? "credited" : "debited"}`}
					onClick={handleToggle}
					disabled={data < 0}
				>
					<div
						className={`item-switcher-active ${
							isCredited ? "passive" : "active"
						}`}
					>
						Начислить
						<div className="item-switcher-point">
							<span
								className={`item-switcher-rouble ${
									isCredited ? "passive" : "active"
								}`}
							>
								₽
							</span>
							<span className="item-switcher-num">{SubsInfo}</span>
						</div>
					</div>
					<div
						className={`item-switcher-active ${
							isCredited ? "active" : "passive"
						}`}
					>
						Списать
						<div className="item-switcher-point">
							<span
								className={`item-switcher-rouble ${
									isCredited ? "active" : "passive"
								}`}
							>
								₽
							</span>
							<span className="item-switcher-num">
								{!isCredited ? data : deductBonus}
							</span>
						</div>
					</div>
				</div>
				{!isCredited ? (
					<></>
				) : (
					<>
						<div
							className="warning-bonus-little-title"
							style={{ display: "flex", justifyContent: "space-between" }}
						>
							<span style={{ height: "20px", width: "50%" }}></span>
							<span style={{ height: "20px", width: "50%" }}>
								{" "}
								*Бонусов останется {restBonus}₽
							</span>
						</div>
					</>
				)}
			</div>
			{isCredited ? (
				<>
					{SubsInfo === "300" || SubsInfo === "500" ? (
						<></>
					) : (
						<>
							<SubsCardMinus userId={userId} />
						</>
					)}
				</>
			) : (
				<>
					{SubsInfo === "300" || SubsInfo === "500" ? (
						<></>
					) : (
						<>
							<SubsCardPlus userId={userId} />
						</>
					)}
				</>
			)}
		</>
	)
}
