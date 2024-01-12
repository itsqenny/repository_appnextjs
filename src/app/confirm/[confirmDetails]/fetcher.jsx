import useSWR from "swr"
import axios from 'axios'
 
const fetcher = url => axios.get(url).then(res => res.data)

export default function CustomerStatus({ userId, orderId }) {
    const customer = {
        userId,
        order_id: orderId,
    }
	const { data: status, error } = useSWR('https://crm.zipperconnect.space/get/paymen', customer, fetcher)

	if (error) return "Произошла ошибка."
	if (!status) return "Загрузка..."

	return (
		<div>
			<h1>TEST SWR</h1>
			<strong>👁 {status}</strong>{" "}
		</div>
	)
}
