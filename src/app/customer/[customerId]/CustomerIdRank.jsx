import useSWR from "swr"
const fetcher = (url) => fetch(url).then((res) => res.json())

export const revalidate = 0
export default function CustomerIdRank({ userId }) {
	const { data, error } = useSWR(
		`https://crm.zipperconnect.space/customer/rank/${userId}`,
		fetcher
	)

	let content
	if (data?.subscription === "connect+") {
		content = <div className="usercard-status-connect-plus">connect+</div>
	} else if (data?.subscription === "connect pro") {
		content = <div className="usercard-status-connect-pro">connect pro</div>
	} else {
		content = <div className="usercard-status">connect</div>
	}
	return <>{content}</>
}
