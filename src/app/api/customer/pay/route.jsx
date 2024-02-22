import { NextResponse } from "next/server"

export const revalidate = 10

export async function POST(req) {
	const api = process.env.API_URL

	try {
		const body = await req.json()

		const res = await fetch(`http://localhost:8080/api/payment`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})

		if (res.ok) {
			const responseBody = await res.json()
			console.log(`response : ${JSON.stringify(responseBody)}`)

			return NextResponse.json(responseBody)
		} else {
			// If the request was not successful, handle the error
			throw new Error(`Request failed with status: ${res.status}`)
		}
	} catch (error) {
		// Handle any other errors that might occur
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		})
	}
}
