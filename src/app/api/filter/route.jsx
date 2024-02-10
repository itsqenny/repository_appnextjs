export const revalidate = 10

export async function GET(req) {
	const api = process.env.API_PRODUCTS
	const { searchParams } = new URL(req.url)
	const page = searchParams.get("_page")
	const from = searchParams.get("_from")
	const category = searchParams.get("_category")
	const size = searchParams.get("_size")
	const to = searchParams.get("_to") // Исправлено на "_to", так как "_size" уже используется выше
	const brand = searchParams.get("_brand") // Исправлено на "_brand"

	const apiUrl =
		`${api}/api/filter?limit=10&_page=${page}&` +
		(from ? `from=${from}&` : "") +
		(category ? `category=${category}&` : "") +
		(size ? `size=${size}&` : "") +
		(to ? `to=${to}&` : "") +
		(brand ? `brand=${brand}` : "")
	console.log(apiUrl)
	const res = await fetch(apiUrl)
	// Проверка статуса ответа
	if (!res.ok) {
		console.error(`Error: ${res.status} - ${res.statusText}`)
		return new Response("Internal Server Error", { status: 500 })
	}

	const items = await res.json()

	return new Response(JSON.stringify(items))
}
