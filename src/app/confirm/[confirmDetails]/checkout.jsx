"use client"
import initData from "@/app/UI/useInitData/initData"
import Image from "next/image"
import { useState, useEffect } from "react"
export const revalidate = 10 
export default function Checkout({ items, isCredited, price, orderId }) {
	const { userId } = initData()
	const [paymentData, setPaymentData] = useState(null)
	const { id, name, ConfirmSize } = items
    
    useEffect(() => {
        const fetchUpdateStatus = async () => {
          const data = {
            userId,
            order_id: orderId,
          };
    
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          };
    
          try {
            const response = await fetch("https://crm.zipperconnect.space/get/payment", requestOptions);
    
            if (response.ok) {
              const responseData = await response.json();
              setPaymentData(responseData.status);
            } else {
              // Если ответ не успешен, вы можете обработать это здесь
              console.error(`Failed to fetch payment data. Status: ${response.status}`);
            }
          } catch (error) {
            console.error("Error fetching payment data:", error);
          }
        };
    
        // Вызов функции для выполнения запроса при монтировании компонента или при изменении зависимостей
        fetchUpdateStatus();
      }, [userId, orderId]); // Зависимости, которые могут изменяться и вызывать повторный вызов useEffect
    

	return (
		<>
			<div className="bg-full-item-name">
				<div className="confirm-item-name">
					{name}
					<span className="confirm-item-size"> размер {ConfirmSize} EU</span>
				</div>
			</div>
			<div className="item-order-info">
				<div className="status-selection-steps-box">
					<div className="status-selection-step">
						<div
							className="status-selection-step-inner"
							style={{
								color:
									paymentData === "PAID"
										? "#31b545"
										: paymentData === "CANCEL"
										? "#b54531"
										: paymentData === "WAIT"
										? "var(--tg-theme-hint-color)"
										: "var(--tg-theme-hint-color)" /* или любой другой цвет по умолчанию */,
							}}
						>
							<svg
								viewBox="0 0 21 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="m4.917 10 4.166 4.166 8.334-8.333"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</div>
						<span className="status-selection-line"></span>
						<div
							className="status-selection-step-inner"
							style={{
								color:
									paymentData === "SENT"
										? "#31b545"
										: paymentData === "CANCEL"
										? "#b54531"
										: paymentData === "WAIT"
										? "var(--tg-theme-hint-color)"
										: "var(--tg-theme-hint-color)" /* или любой другой цвет по умолчанию */,
							}}
						>
							<svg
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M33.333 12.5 20 5 6.667 12.5m26.666 0v15L20 35m13.333-22.5L20 20m0 15L6.667 27.5v-15M20 35V20M6.667 12.5 20 20m6.667-11.25-13.334 7.5"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</div>
						<span className="status-selection-line"></span>
						<div
							className="status-selection-step-inner"
							style={{
								color:
									paymentData === "TRANSITCN"
										? "#31b545"
										: paymentData === "TRANSITRU"
										? "#31b545"
										: paymentData === "WAIT"
										? "var(--tg-theme-hint-color)"
										: "var(--tg-theme-hint-color)" /* или любой другой цвет по умолчанию */,
							}}
						>
							<svg
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7.5 14.166a1.667 1.667 0 1 1-3.333 0m3.333 0a1.667 1.667 0 1 0-3.333 0m3.333 0h5m-8.333 0H2.5v-3.333m13.333 3.333a1.667 1.667 0 1 1-3.333 0m3.333 0a1.667 1.667 0 1 0-3.333 0m3.333 0H17.5v-5m-15.833-5h9.166v10m6.667-5h-6.667m6.667 0L15 5h-4.167M2.5 7.5h3.333"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</div>
						<span className="status-selection-line"></span>
						<div
							className="status-selection-step-inner"
							style={{
								color:
									paymentData === "DELIVERED"
										? "#31b545"
										: paymentData === "CANCEL"
										? "#b54531"
										: paymentData === "WAIT"
										? "var(--tg-theme-hint-color)"
										: "var(--tg-theme-hint-color)" /* или любой другой цвет по умолчанию */,
							}}
						>
							<svg
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.333 35V8.333a8.333 8.333 0 0 1 11.667 0 8.333 8.333 0 0 0 11.667 0v15a8.333 8.333 0 0 1-11.667 0 8.333 8.333 0 0 0-11.667 0"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</div>
					</div>
				</div>
				<div className="product-offer-id">Заказ №{orderId}</div>
				<div className="product-offer-status">
					{paymentData === "WAIT" ? (
						<>Ожидается оплата</>
					) : paymentData === "PAID" ? (
						<>Оплачено</>
					) : paymentData === "SENT" ? (
						<>Готовится к отправке</>
					) : paymentData === "TRANSITCN" ? (
						<>Доставка из Китая в пути</>
					) : paymentData === "TRANSITRU" ? (
						<>В пути по России</>
					) : paymentData === "DELIVERED" ? (
						<>Доставлен в пункт выдачи</>
					) : (
						<>Загрузка...</>
					)}
				</div>
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
