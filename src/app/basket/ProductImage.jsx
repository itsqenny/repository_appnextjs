import Image from "next/image"
import useSWR from "swr"
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ProductImage({ item }) {
	const { data , error } = useSWR(
		`https://repositorydb.onrender.com/products/${item.id}`,
		fetcher
	)
    
	if (error) return "An error has occurred."
	if (!data) return ""
    const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
    const srcSet = widths.map((width) => `${item.img}?w=${width}&q=75 ${width}w`).join(', ');
  
	return (
		<Image
			src={data.img[0]}
			alt={`photo`}
			width={3840} // Начальная ширина изображения
			height={2160} // Начальная высота изображения (может быть другой, в зависимости от соотношения сторон)
			srcSet={srcSet}
			sizes="(max-width: 768px) 100vw, 50vw"
			style={{
                position: 'absolute',
                width: '100%',
                height: '100%';
                inset:'0px',
                color: 'transparent',
                userSelect: "none",
			}}
			priority={true}
		/>
	)
}
