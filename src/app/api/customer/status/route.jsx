export const revalidate = 10

export async function GET(req) {
	const api = process.env.API_URL
	const { searchParams } = new URL(req.url)
	const userId = searchParams.get("userId")
	const orderId = searchParams.get("order_id")
	const res = await fetch(
		`${api}/api/status?userId=${userId}&order_id=${orderId}`
	)
	const items = await res.json()
	return new Response(JSON.stringify(items))
}
