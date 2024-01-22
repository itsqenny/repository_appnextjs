"use client"
import { useState } from "react"
import initData from "@/app/UI/useInitData/initData"
import Link from "next/link"
export default function SelectBonus({
	price,
	setParentPrice,
	setParentBonus,
	data,
	userId,
	isCredited,
	setCredited,
}) {
	
	const { WebApp } = initData()
	const [restBonus, setRestBonus] = useState(0)
	const [deductBonus, setDeductBonus] = useState(0)
	
	const priceNumeric = parseFloat(
		price.replace(/[\u00a0₽ ]/g, "").replace(",", ".")
	)

	if (priceNumeric !== undefined && !isNaN(priceNumeric)) {
		let result = priceNumeric - 0.1 * priceNumeric

	} else {
		console.error(``)
	}
	const handleToggle = () => {
		if (data.bonus > 0) {
			setCredited(!isCredited)
			let calculatedPrice

			if (isCredited) {
				// Устанавливаем price в null при активации "Начислить"
				calculatedPrice = price
			} else {
				// Вставляем пробел между числами при списании бонусов
				calculatedPrice =
					price.replace(/[\u00a0₽ ]/g, "").replace(",", ".") - data.bonus
				calculatedPrice = Math.max(calculatedPrice, 6990)
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
			const rest = data.bonus - difference
			setRestBonus(rest)
			setDeductBonus(difference)
			setParentPrice(calculatedPrice)
			setParentBonus({
				restBonus: rest,
				deductBonus: difference
			  });
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
					disabled={data.bonus < 0}
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
							<span className="item-switcher-num">50</span>
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
								{!isCredited ? data.bonus : deductBonus}
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
					<hr />
					<div className="warning-bonus-selection">
						<div className="warning-bonus-selection-box">
							<div
								className="warning-bonus-selection-title"
								style={{ fontSize: "15px", letterSpacing: "-0.01em" }}
							>
								Увеличьте лимит списания с
								<div
									className="warning-bonus-status-plus"
									style={{ marginLeft: "4px" }}
								>
									connect+
								</div>
								<div className="warning-bonus-little-title">
									*Без подписки списание доступно до 6990 ₽
								</div>
							</div>
							<Link href={`/customer/${userId}/subscription`}>
								<button
									className="btn-profile-data-info btn-profile-data"
									style={{ marginTop: "8px" }}
								>
									Приобрести подписку
								</button>
							</Link>
						</div>
					</div>
				</>
			) : (
				<>
					<hr />
					<div className="warning-bonus-selection">
						<div className="warning-bonus-selection-box">
							<div
								className="warning-bonus-selection-title"
								style={{ fontSize: "15px", letterSpacing: "-0.01em" }}
							>
								Начислите 300₽ с
								<div
									className="warning-bonus-status-plus"
									style={{ marginLeft: "4px" }}
								>
									connect+
								</div>
								<div className="warning-bonus-little-title">
									*Без подписки начисление доступно до 100 ₽
								</div>
							</div>
							<Link href={`/customer/${userId}/subscription`}>
								<button
									className="btn-profile-data-info btn-profile-data"
									style={{ marginTop: "8px" }}
								>
									Приобрести подписку
								</button>
							</Link>
						</div>
					</div>
				</>
			)}
		</>
	)
}
