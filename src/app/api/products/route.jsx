export const revalidate = 10

export async function GET(req) {
	const api = process.env.API_PRODUCTS
	const token = process.env.API_TOKEN
	const { searchParams } = new URL(req.url)
	const page = searchParams.get("_page")
	const res = await fetch(`${api}/api/v1/limit?limit=10&page=${page}`)
	const items = await res.json()
	return new Response(JSON.stringify(items))
}
