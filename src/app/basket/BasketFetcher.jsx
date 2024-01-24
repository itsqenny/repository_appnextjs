import useSWR from "swr"
import ProductBasket from "./ProductBasket"
import SkeletonBasket from "./SkeletonBasket"
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CustomerBasket({ userId }) {
	const { data, error } = useSWR(
		`/api/customer/basket/${userId}`,
		fetcher
	)

	return (
		<>
			{error ? (
				<>
					<p>Ошибка. Пожалуйста, обратитесь за поддержкой.</p>
				</>
			) : (
				<>
					{!data ? (
						<>
							<SkeletonBasket />
						</>
					) : (
						<>
							<ProductBasket data={data} />
						</>
					)}
				</>
			)}
		</>
	)
}
