"use client"

import useSWR from "swr"
import initData from "../UI/useInitData/initData"
import Link from "next/link"

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Bin() {
	//const { userId } = initData()
	const userId = "204688184"
	const { data, error } = useSWR(`/api/customer/basket/${userId}`, fetcher)

	console.log(data)
	const handleClick = () => {
		console.log(`click`)
	}
	return (
		<>
			<Link href={`/basket/`}>
				{data?.userOrder?.length > 1 && (
					<div className="bin-circle">
						<p>{data?.userOrder?.length}</p>
					</div>
				)}
				<div className="bin-box" onClick={handleClick}>
					<div className="bin-body">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#fff"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="ai ai-Basket"
						>
							<path d="M2.31 11.242A1 1 0 0 1 3.28 10h17.44a1 1 0 0 1 .97 1.242l-1.811 7.243A2 2 0 0 1 17.939 20H6.061a2 2 0 0 1-1.94-1.515L2.31 11.243z" />
							<path d="M9 14v2" />
							<path d="M15 14v2" />
							<path d="M6 10l4-6" />
							<path d="M18 10l-4-6" />
						</svg>
					</div>
				</div>
			</Link>
		</>
	)
}
