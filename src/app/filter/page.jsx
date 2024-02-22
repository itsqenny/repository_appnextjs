"use client"
import { BackButton } from "@twa-dev/sdk/react"
import Filter from "./Filter"

export default function FilterPage() {
	if (typeof window !== "undefined") {
		return (
			<>
				<BackButton />
				<Filter />
			</>
		)
	}
}
