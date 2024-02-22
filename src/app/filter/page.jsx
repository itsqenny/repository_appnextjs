"use client"
import { BackButton } from "@twa-dev/sdk/react"
import Filter from "./Filter"
import Dynamic from "next/dynamic"
const Back = Dynamic(() => import("../UI/BackButton/BackButton"))
export default function FilterPage() {
	if (typeof window !== "undefined") {
		return (
			<>
				<Back />
				<Filter />
			</>
		)
	}
}
