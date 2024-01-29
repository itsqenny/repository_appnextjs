"use client"

import initData from "@/app/UI/useInitData/initData"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function SubsFetcherId() {
	//const { userId } = initData()
	const userId = "204688184"
	const { data, error } = useSWR(`/api/customer/rank/${userId}`, fetcher)


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
	const SubsInfo = SubsTextMap[data?.subscription] || SubsTextMap["connect"]
	const SubsMinusTextMap = {
		connect: {
			text: "6990",
		},
		"connect+": {
			text: "6490",
		},
		"connect pro": {
			text: "5990",
		},
	}
	const SubsMinusInfo = SubsMinusTextMap[data?.subscription] || SubsTextMap["connect"]
	const SubsPriceInfo = {
		connect: {
			id: '111000000',
			text: "0",
			name: "connect",
		  },
		  "connect+": {
			id: '111000111',
			text: "590",
			name: "connect+",
		  },
		  "connect pro": {
			id: '111111111',
			text: "990",
			name: "connect pro",
		  },
	}
	
	return {
		SubsInfo: SubsInfo?.text,
		SubsMinusInfo: SubsMinusInfo?.text,
		SubsPriceInfo,
		
	}
}
