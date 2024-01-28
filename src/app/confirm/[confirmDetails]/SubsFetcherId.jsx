"use client"

import initData from "@/app/UI/useInitData/initData"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function SubsFetcherId() {
	const { userId } = initData()
	//const userId = '204688184'
    const { data, error } = useSWR(`/api/customer/rank/${userId}`, fetcher)
    console.log(data)
    
	const SubsTextMap = {
		connect: {
			text: "100",
		},
		"connect+": {
			text: "300",
		},
		"connect pro": {
			text: "500",
		},
	}
    
	const SubsInfo = SubsTextMap[data?.subscription] || SubsTextMap["connect"];

	return {
		SubsInfo: SubsInfo?.text
	}
}
