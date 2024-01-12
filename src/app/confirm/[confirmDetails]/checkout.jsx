"use client"
import initData from "@/app/UI/useInitData/initData"
import Image from "next/image"
import { useState, useEffect } from "react"
import CustomerStatus from "./StatusFetcher"

export default function Checkout({
	items,
	userId,
	price,
	orderId,
	paymentData,
	customerStatus,
}) {
	const { id, name, ConfirmSize } = items

	return (
		<>
			<div className="bg-full-item-name">
				<div className="confirm-item-name">
					{name}
					<span className="confirm-item-size"> размер {ConfirmSize} EU</span>
				</div>
			</div>
			<div className="item-order-info">
					{customerStatus ? (
						<>
							<CustomerStatus userId={userId} orderId={orderId} />
						</>
					) : (
						<>
							<p>Ожидается оплата...</p>
						</>
					)}
				<div
					className="confirm-item-price"
					style={{
						marginTop: "10px",
					}}
				>
					{price} ₽
				</div>
				<hr />
			</div>
		</>
	)
}
