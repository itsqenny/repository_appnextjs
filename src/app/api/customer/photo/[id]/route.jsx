export async function GET(request) {
	const api = process.env.NEXT_PUBLIC_API_URL
	try {
		const url = new URL(request.url || request)
		const pathnameParts = url.pathname.split("/").filter((part) => part !== "")
		const id = pathnameParts[pathnameParts.length - 1]
		const response = await fetch(`${api}/api/customer/${id}/photo`)
		const data = await response.json()
		return new Response(JSON.stringify(data))
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		})
	}
}
