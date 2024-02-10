"use client"
import Filter from "./Filter"

export default function FilterPage() {
	if (typeof window === "undefined") {
		return (
			<>
				<Filter />
			</>
		)
	}
}
