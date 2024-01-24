import useSWR from "swr"
const fetcher = (url) => fetch(url).then((res) => res.json())

export const revalidate = 0
export default function CustomerRank({ userId }) {
	const { data, error } = useSWR(
		`/api/customer/rank/${userId}`,
		fetcher
	)

	let content
	if (data?.subscription === "connect+") {
		content = <div className="usercard-rank-connect-plus">connect+</div>
	} else if (data?.subscription === "connect pro") {
		content = <div className="usercard-rank-connect-pro">connect pro</div>
	} else {
		content = <div className="usercard-rank">connect</div>
	}
	return (
		<>
			{!data ? (
				<>
					<p className="skeleton-usercard-rank"></p>
				</>
			) : (
				<>{content}</>
			)}
		</>
	)
}
