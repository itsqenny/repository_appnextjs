import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CustomerStatus({ userId, orderId }) {
	const { data, error } = useSWR(
		`/api/customer/status?userId=${userId}&orderId=${orderId}`,
		fetcher
	)

	if (error) return "An error has occurred."
	if (!data) return "Loading..."

	const statusTextMap = {
		WAIT: {
			text: "Ожидается оплата",
			color: "var(--tg-hint)",
		},
		PAID: {
			text: "Оплачено",
			color: "#31b545",
		},
    SENT: {
			text: "Отправлен",
			color: "#31b545",
		},
    GOING: {
			text: "Собирается",
			color: "#31b545",
		},
		CANCEL: {
			text: "Отменено",
			color: "#b54531",
		},
		TRANSITCN: {
			text: "В пути по Китаю",
			color: "#31b545",
		},
		TRANSITRU: {
			text: "В пути по России",
			color: "#31b545",
		},
		DELIVERED: {
			text: "Доставлено",
			color: "#31b545",
		},
	}

	const statusInfo = statusTextMap[data.status] || {
		text: "Статус неизвестен",
		color: "#000",
	}

	const style = {
		color: statusInfo.color, // устанавливаем цвет стиля на основе значения statusInfo.color
	}

	// Условие для проверки статусов, которые должны изменять цвет
	const ChangeColor1 =
		data.status === "PAID" || data.status === "WAIT" || data.status === "SENT" || data.status === "GOING" || data.status === "CANCEL"
	const ChangeColor2 = data.status === "SENT" || data.status === "CANCEL"
	const ChangeColor3 =
		data.status === "TRANSITCN" ||
		data.status === "TRANSITRU" ||
		data.status === "CANCEL"
	const ChangeColor4 = data.status === "DELIVERED" || data.status === "CANCEL"

	return (
		<>
			<div className="status-selection-steps-box">
				<div className="status-selection-step">
					<div
						className="status-selection-step-inner"
						style={ChangeColor1 ? style : null}
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
					<div className="status-selection-step-inner"
          style={ChangeColor2 ? style : null}
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
					<div className="status-selection-step-inner"
          style={ChangeColor3 ? style : null}
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
					<div className="status-selection-step-inner"
          style={ChangeColor4 ? style : null}
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
				<p>{statusInfo.text}</p>
			</div>
		</>
	)
}
