"use client"
import useSWR from "swr"
import ConfirmId from "./ConfirmId"

const fetcher = (url) => fetch(url).then((res) => res.json())
export const dynamic = "force-dynamic"
export const revalidate = 0
export default function ConfirmFetcher({ userId }) {
	const { data, error } = useSWR(`/api/customer/bonus/${userId}`, fetcher)
	if (error) return ""
	if (!data) return ""
	return (
		<>
			<ConfirmId userId={userId} data={data} />
		</>
	)
}
