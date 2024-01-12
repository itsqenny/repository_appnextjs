import useSWR from "swr"
import axios from 'axios'
 
const fetcher = (url, customer) =>
  axios.post(url, customer).then((res) => res.data);

export default function CustomerStatus({ userId, orderId }) {
    const customer = {
        userId,
        order_id: orderId,
    }
    const url = "https://crm.zipperconnect.space/get/payment";
	const { data, error } = useSWR([url, customer], fetcher)

	if (error) return "Произошла ошибка."
	if (!data) return "Загрузка..."

	return (
		<div>
			<h1>TEST SWR</h1>
			<strong>👁 {datas}</strong>{" "}
		</div>
	)
}
