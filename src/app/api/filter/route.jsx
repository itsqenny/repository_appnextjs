export const revalidate = 10

export async function GET(req) {
	const api = process.env.API_PRODUCTS
	const { searchParams } = new URL(req.url)
	const from = searchParams.get("_from")
	const to = searchParams.get("_to")
	const brand = searchParams.get("_brand")
	const size = searchParams.get("_size")
	const option = searchParams.get("_option")
	const res = await fetch(`http://localhost:8080/api/products`)
	const items = await res.json()

	const filteredItems = items.filter((item) => {
		const price = item.price
		const itemBrand = item.brand.toLowerCase() // Приводим к нижнему регистру
		const itemSizes = Object.keys(item.size)

		let passBrandFilter = true
		let passPriceFilter = true
		let passSizeFilter = true
		let passOptionFilter = true

		if (brand) {
			const filterBrand = brand.toLowerCase()
			passBrandFilter = itemBrand === filterBrand
		}

		if (from || to) {
			const fromValue = parseFloat(from)
			const toValue = parseFloat(to)
			passPriceFilter =
				(isNaN(fromValue) || price >= fromValue) &&
				(isNaN(toValue) || price <= toValue)
		}

		if (size) {
			const filterSize = size.toLowerCase()
			passSizeFilter = itemSizes.some((itemSize) =>
				itemSize.toLowerCase().includes(filterSize)
			)
		}
		if (option) {
			switch (option) {
				case "Недорогие":
					passOptionFilter = price < 10000
					break
				case "Популярные":
					passOptionFilter = item.best_seller === "best_seller"
					break
				case "Дорогие":
					passOptionFilter = price > 20000
					break
				default:
					break
			}
		}
		return (
			passBrandFilter && passPriceFilter && passSizeFilter && passOptionFilter
		)
	})

	// Сортировка по цене
	filteredItems.sort((a, b) => {
		if (a.brand !== b.brand) {
			return a.brand.localeCompare(b.brand)
		}

		const aSize = Object.keys(a.size)[0] // Предполагаем, что у каждого товара есть хотя бы один размер
		const bSize = Object.keys(b.size)[0]

		if (aSize !== bSize) {
			return aSize.localeCompare(bSize)
		}

		return a.price - b.price
	})

	return new Response(JSON.stringify(filteredItems))
}
