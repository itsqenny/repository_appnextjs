import Image from "next/image"
import useSWR from "swr"
import SkeletonImage from "./SkeletonImage"
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ProductImage({ item }) {
	const { data, error } = useSWR(`/api/products/${item.id}`, fetcher)
	console.log(`${item.id}`)
	const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
	const srcSet = widths
		.map((width) => `${item.img}?w=${width}&q=75 ${width}w`)
		.join(", ")

	return (
		<>
			{error ? (
				<>
					<div
						className="product-image-container"
						style={{ background: "var(--tg-bg" }}
					>
						<div
							className="product-image-card"
							style={{ background: "var(--tg-bg" }}
						>
							<div className="product-image-inner">
								<div className="product-image-inner-row">
									<SkeletonImage />
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					{!data ? (
						<>
							<div
								className="product-image-container"
								style={{ background: "var(--tg-bg" }}
							>
								<div
									className="product-image-card"
									style={{ background: "var(--tg-bg" }}
								>
									<div className="product-image-inner">
										<div className="product-image-inner-row">
											<SkeletonImage />
										</div>
									</div>
								</div>
							</div>
						</>
					) : (
						<>
							<div className="product-image-container">
								<div className="product-image-card">
									<div className="product-image-inner">
										<div className="product-image-inner-row">
											<SkeletonImage />
											<Image
												src={data.images[0]}
												alt={`photo`}
												width={3840} // Начальная ширина изображения
												height={2160} // Начальная высота изображения (может быть другой, в зависимости от соотношения сторон)
												srcSet={srcSet}
												sizes="(max-width: 768px) 100vw, 50vw"
												style={{
													position: "absolute",
													width: "100%",
													height: "100%",
													inset: "0px",
													color: "transparent",
													userSelect: "none",
												}}
												priority={true}
											/>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</>
			)}
		</>
	)
}
