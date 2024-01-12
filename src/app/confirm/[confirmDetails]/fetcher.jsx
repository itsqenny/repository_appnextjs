import useSWR from "swr"

const fetcher = (url, customer) => {
	return fetch(url, {
		method: "POST",
		body: JSON.stringify(customer),
	}).then((res) => res.json())
}

export default function CustomerStatus({ userId, orderId }) {
	const url = "https://crm.zipperconnect.space/get/payment"
	const customer = {
		userId: userId,
		orderId: orderId,
	}

	const { data, error } = useSWR(() => [url, customer], fetcher)

	if (error) return "Произошла ошибка."
	if (!data) return "Загрузка..."
	return (
		<div>
			<h1>TEST SWR</h1>
			<strong>👁 {data.status}</strong>{" "}
		</div>
	)
}
