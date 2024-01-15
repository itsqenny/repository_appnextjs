import useSWR from "swr"
import ProductBasketList from "./ProductBasketList"
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CustomerBasketList({userId}) {
	//const userId = '204688184'
	const { data, error } = useSWR(
		`https://crm.zipperconnect.space/customer/basketpaid/${userId}`,
		fetcher
	)

	if (error) return "An error has occurred."
	if (!data) return ""

	return (
		<>
			<ProductBasketList data={data} />
		</>
	)
}
