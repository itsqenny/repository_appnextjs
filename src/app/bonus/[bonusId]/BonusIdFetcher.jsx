import useSWR from "swr"
import BonusPage from "./BonusPage"
const fetcher = (url) => fetch(url).then((res) => res.json())
export const dynamic = "force-dynamic"
export const revalidate = 0
export default function BonusIdFetcher({ userId }) {
	const { data, error } = useSWR(
		`https://crm.zipperconnect.space/customer/bonus/${userId}`,
		fetcher
	)
	if (error) return "An error has occurred."
    if (!data) return ""
	return (
		<>
			<BonusPage data={data}/>
		</>
	)
}
