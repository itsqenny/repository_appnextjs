"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import initData from "../UI/useInitData/initData"
import axios from "axios"
export const revalidate = 0
export const dynamic = "force-dynamic"
const BonusTab = ({ data }) => {
	return (
		<>
			<div className="action-poinst-icon">{data}</div>
		</>
	)
}

export default BonusTab
