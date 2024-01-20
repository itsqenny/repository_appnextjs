import useSWR from "swr"
import ProductPaid from "./ProductPaid"
import SkeletonBasket from "../basket/SkeletonBasket"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PaidFetcher({ userId }) {
	const { data, error } = useSWR(
		`https://crm.zipperconnect.space/customer/basketpaid/${userId}`,
		fetcher
	)

	return (
		<>
			{" "}
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
							<ProductPaid data={data} />
						</>
					)}
				</>
			)}
		</>
	)
}
