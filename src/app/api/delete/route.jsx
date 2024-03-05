export const revalidate = 10

export async function GET(req) {
	const api = process.env.API_URL
	const { searchParams } = new URL(req.url)
	const userId = searchParams.get("_userId")
	const orderId = searchParams.get("_orderId")
	console.log(userId)
	const res = await fetch(
		`${api}/api/customer/basket/delete?userId=${userId}&orderId=${orderId}`
	)
	const items = await res.json()
	return new Response(JSON.stringify(items))
}
