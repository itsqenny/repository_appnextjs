"use client"

import initData from "@/app/UI/useInitData/initData"
import BonusIdFetcher from "./BonusIdFetcher"
import Back from "@/app/UI/BackButton/BackButton"
import { useState } from "react"
import BonusCard from "@/app/components/bonusCard/BonusCard"
import CopyLink from "@/app/components/CopyLinkReferral/CopyLink"
import ReferralFriends from "@/app/components/bonusCard/ReferralFriends"
const bonusId = () => {
	const { userId } = initData()
	//const userId = "204688184"

	const [isCopied, setIsCopied] = useState(false)
	const handleCopyClick = async () => {
		try {
			await navigator.clipboard.writeText(
				`https://t.me/WORLDSTUFFRU_BOT?start=${userId}`
			)
			setIsCopied(true)
		} catch (err) {
			console.error("Ошибка при копировании ссылки", err)
		}
	}
	return (
		<>
			<Back />
			<BonusCard userId={userId} />
			<ReferralFriends
				userId={userId}
				isCopied={isCopied}
				handleCopyClick={handleCopyClick}
			/>
		</>
	)
}

export default bonusId
