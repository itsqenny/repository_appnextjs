"use client"
import useSWR from "swr"
import ProductBasket from "./ProductBasket"
import SkeletonBasket from "./SkeletonBasket"
export const dynamic = "force-dynamic"
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CustomerBasket({ userId }) {
	const { data, error } = useSWR(`/api/customer/basket/${userId}`, fetcher)
	//console.log(data)
	return (
		<>
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
							<ProductBasket data={data} />
						</>
					)}
				</>
			)}
		</>
	)
}
