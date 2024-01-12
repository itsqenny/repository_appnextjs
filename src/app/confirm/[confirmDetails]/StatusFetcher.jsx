import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CustomerStatus({ userId, orderId }) {
	const { data, error } = useSWR(
		`https://crm.zipperconnect.space/get/status?userId=${userId}&order_id=${orderId}`,
		fetcher
	)

	if (error) return "An error has occurred."
	if (!data) return "Loading..."

	const statusTextMap = {
		WAIT: "Ожидается оплата",
		PAID: "Оплачено",
		CANCEL: "Отменено",
		TRANSITCN: "В пути по Китаю",
		TRANSITRU: "В пути по России",
		DELIVERED: "Доставлено",
	}

	const statusText = statusTextMap[data.status] || "Статус неизвестен"

	return (
		<>
			<p>{statusText}</p>
		</>
	)
}
