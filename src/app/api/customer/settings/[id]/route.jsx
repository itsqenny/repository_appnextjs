export async function GET(request) {
	const api = process.env.API_URL
	try {
		const url = new URL(request.url || request)
		const pathnameParts = url.pathname.split("/").filter((part) => part !== "")
		const userId = pathnameParts[pathnameParts.length - 1]
		const res = await fetch(`${api}/api/customer/${userId}`)
		const data = await res.json()
		return new Response(
			JSON.stringify({
				userFio: data.userFio,
				phoneNumber: data.phoneNumber,
				userCity: data.userCity,
				userAdress: data.userAdress,
			})
		)
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		})
	}
}
