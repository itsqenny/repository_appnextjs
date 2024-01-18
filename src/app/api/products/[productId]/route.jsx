export async function GET(request) {
	try {
		const url = new URL(request.url || request)
		const pathnameParts = url.pathname.split("/").filter((part) => part !== "")
		const productId = pathnameParts[pathnameParts.length - 1]
		const res = await fetch(
			`https://repositorydb.onrender.com/products/${productId}`
		)
		const item = await res.json()

		return new Response(JSON.stringify(item))
	} catch (error) {
		return new Response("Internal Server Error", { status: 500 })
	}
}
