import useSWR from "swr"
import ProductBasketList from "./ProductBasketList.jsx"
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CustomerBasketList({ userId }) {
	//const userId = '204688184'
	const { data, error } = useSWR(`/api/customer/basket/${userId}`, fetcher)

	if (error) return "An error has occurred."
	if (!data) return ""

	return (
		<>
			<ProductBasketList data={data} />
		</>
	)
}
