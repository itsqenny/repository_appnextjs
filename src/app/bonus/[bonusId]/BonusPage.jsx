"use client"
import Back from "@/app/UI/BackButton/BackButton"
import initData from "@/app/UI/useInitData/initData"
import { useEffect, useState } from "react"
import axios from "axios"

const BonusPage = ({ data }) => {
	return (
		<>
			<div className="refer-friend-text">{data}</div>
		</>
	)
}

export default BonusPage
