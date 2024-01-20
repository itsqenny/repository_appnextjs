import useSWR from "swr"
import Header from "./Header"
const fetcher = (url) => fetch(url).then((res) => res.json())

export const revalidate = 0
export default function PhotoFetcher({ userId, user }) {
	const { data, error } = useSWR(`/api/customer/photo/${userId}`, fetcher)

	return (
		<>
			<Header data={data} userId={userId} error={error} user={user} />
		</>
	)
}
