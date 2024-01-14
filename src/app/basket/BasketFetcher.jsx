import useSWR from "swr"
import ProductBasket from "./ProductBasket"
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CustomerBasket({ userId }) {
	//const userId = '204688184'
	const { data, error } = useSWR(
		`https://crm.zipperconnect.space/customer/basket/${userId}`,
		fetcher
	)

	if (error) return "An error has occurred."
	if (!data) return ""

	return (
		<>
			<ProductBasket data={data} />
		</>
	)
}
