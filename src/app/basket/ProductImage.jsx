import Image from "next/image"
import useSWR from "swr"
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ProductImage({ item}) {
	const { data , error } = useSWR(
		`https://crm.zipperconnect.space/customer/basket/${item.id}`,
		fetcher
	)

	if (error) return "An error has occurred."
	if (!data) return "Loading..."

	return (
		<Image
			src={data.img[0]}
			alt={`photo-${id}`}
			width={3840} // Начальная ширина изображения
			height={2160} // Начальная высота изображения (может быть другой, в зависимости от соотношения сторон)
			srcSet={srcSet}
			sizes="(max-width: 768px) 100vw, 50vw"
			style={{
				height: "100%",
				width: "100%",
				margin: "4% 0 5% 0",
				objectFit: "cover",
				WebkitUserSelect: "none",
				MozUserSelect: "none",
				userSelect: "none",
				pointerEvents: "none",
			}}
			priority={true}
		/>
	)
}
