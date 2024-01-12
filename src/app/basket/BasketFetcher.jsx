import useSWR from "swr"
import ProductBasket from "./ProductBasket"
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CustomerBasket({ userId }) {
	const { data, error } = useSWR(
		`https://crm.zipperconnect.space/customer/basket/${userId}`,
		fetcher
	)

	if (error) return "An error has occurred."
	if (data) {
		const { id } = data.basket
		const { data: productData, error: productError } = useSWR(
			`https://repositorydb.onrender.com/products/${id}`,
			fetcher
		)

		if (productError) return "Произошла ошибка."
		if (!productData) return "Загрузка..."

		return (
			<>
				<ProductBasket data={data} productData={productData} />
			</>
		)
	} else {
		return "Oops..."
	}
}
