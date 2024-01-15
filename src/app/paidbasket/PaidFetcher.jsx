import useSWR from "swr"
import ProductPaid from "./ProductPaid"
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PaidFetcher({ userId }) {
	const { data, error } = useSWR(
		`https://crm.zipperconnect.space/customer/basketpaid/${userId}`,
		fetcher
	)

	if (error) return "An error has occurred."
	if (!data) return ""
	console.log(data)
	return (
		<>
			<ProductPaid data={data} />
		</>
	)
}
