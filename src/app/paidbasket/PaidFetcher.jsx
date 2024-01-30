import useSWR from "swr"
import ProductPaid from "./ProductPaid"
import SkeletonBasket from "../basket/SkeletonBasket"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PaidFetcher({ userId }) {
	const { data, error } = useSWR(
		`/api/customer/basketpaid/${userId}`,
		fetcher
	)

	return (
		<>
			{" "}
			{error ? (
				<>
					<SkeletonBasket />
				</>
			) : (
				<>
					{!data ? (
						<>
							<SkeletonBasket />
						</>
					) : (
						<>
							<ProductPaid data={data} />
						</>
					)}
				</>
			)}
		</>
	)
}
