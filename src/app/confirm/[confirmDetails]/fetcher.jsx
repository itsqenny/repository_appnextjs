import useSWR from "swr"

const fetcher = (url, customer) =>
	fetch(url, customer).then((res) => res.json())

export default function CustomerStatus({ userId, orderId }) {
	const customer = {
		userId,
		order_id: orderId,
	}
	const { data, error, isLoading } = useSWR(
		[`https://crm.zipperconnect.space/get/payment`, customer],
		fetcher
	)

	if (error) return "An error has occurred."
	if (isLoading) return "Loading..."
	return (
		<div>
			<h1>TEST SWR</h1>
			<strong>👁 {data.status}</strong>{" "}
		</div>
	)
}
