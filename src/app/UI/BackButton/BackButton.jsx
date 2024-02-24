"use client"

import { BackButton } from "@twa-dev/sdk/react"
import { useRouter } from "next/navigation"
export const dynamic = "force-dynamic"
function Back() {
	return (
		<>
			<BackButton />
		</>
	)
}

export default Back
