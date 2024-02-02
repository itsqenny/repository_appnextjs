export const revalidate = 10

export async function GET(req) {
	const api = process.env.API_PRODUCTS
	const { searchParams } = new URL(req.url)
	const page = searchParams.get("_page")
	const res = await fetch(`${api}/api/product?limit=10&page=${page}`)
	const items = await res.json()

	return new Response(JSON.stringify(items))
}
