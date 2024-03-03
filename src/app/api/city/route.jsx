export const revalidate = 10

export async function GET(req) {
	const api = process.env.API_PRODUCTS
	const { searchParams } = new URL(req.url)

	const res = await fetch(
		`https://api.boxberry.ru/json.php?token=d6f33e419c16131e5325cbd84d5d6000&method=ListCitiesFull&CountryCode=643`
	)

	const items = await res.json()

	const cityName = searchParams.get("cityName")

	if (cityName) {
		// Если задан параметр для поиска по имени, фильтруем массив городов
		const filteredItems = items.filter((city) =>
			city.Name.toLowerCase().includes(cityName.toLowerCase())
		)
		const responseObj = { results: filteredItems }
		return new Response(JSON.stringify(responseObj))
	} else {
		// Если параметр для поиска по имени не задан, возвращаем все города
		const popularCities = [
			// Ваш массив популярных городов здесь
			{ Code: "", Name: "Москва", CountryCode: "643", Region: "Московская" },
			{
				Code: "116",
				Name: "Санкт-Петербург",
			},
			{
				Code: "37",
				Name: "Новосибирск",
			},
			{
				Code: "26",
				Name: "Красноярск",
			},
			{
				Code: "16",
				Name: "Екатеринбург",
			},
			{
				Code: "90",
				Name: "Казань",
			},
			{
				Code: "33",
				Name: "Нижний Новгород",
			},
			{
				Code: "63",
				Name: "Челябинск",
			},
			{ Code: "46", Name: "Самара" },
			{
				Code: "15",
				Name: "Воронеж",
			},
		]

		const responseObj = { results: popularCities }
		return new Response(JSON.stringify(responseObj))
	}
}
