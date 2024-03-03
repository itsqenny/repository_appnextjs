"use client"
import useSWR from "swr"
import CustomerId from "./CustomerId"
const fetcher = (url) => fetch(url).then((res) => res.json())

export const revalidate = 0
export default function PhotoIdFetcher({ customerId, user }) {
	const { data, error } = useSWR(`/api/customer/photo/${customerId}`, fetcher)

	return (
		<>
			<CustomerId
				data={data}
				customerId={customerId}
				error={error}
				user={user}
			/>
		</>
	)
}
