import { NextResponse } from "next/server"
export const revalidate = 10

export async function GET(req) {
	const api = process.env.API_URL
	const { searchParams } = new URL(req.url)
	const userId = searchParams.get("userId")
	const res = await fetch(`${api}/customer/settings/client/${userId}`)
	const settings = await res.json()

	return new Response(JSON.stringify(settings))
}

export async function POST(req) {
	const api = process.env.API_URL
    

	try {
		const body = await req.json()
		const res = await fetch(`${api}/customer/settings/client/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})
		
		if (res.ok) {
			const responseBody = await res.json()
			console.log(`response : ${responseBody.message}`)

			return NextResponse.json(responseBody)
		} else {
			// If the request was not successful, handle the error
			throw new Error(`Request failed with status: ${res.status}`)
		}
	} catch (e) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		})
	}
}
