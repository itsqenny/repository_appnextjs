"use client"
import Image from "next/image"
import Link from "next/link"
import InfiniteScroll from "react-infinite-scroll-component"
import { useState } from "react"
import SkeletonProducts from "./SkeletonProducts"

export default function Products({ searchQuery, data }) {
	const [items, setItems] = useState(data.slice(0, 20))

	const moreData = () => {
		setTimeout(() => {
			const nextItems = data.slice(items.length, items.length + 10)
			setItems([...items, ...nextItems])
		}, 1000)
	}
	if (searchQuery) {
		const filteredItems = data?.filter((item) =>
			item.name.toLowerCase().includes(searchQuery.toLowerCase())
		)
		setItems(filteredItems.slice(0, 10))
	}

	return (
		<>
			<div>
				<InfiniteScroll
					dataLength={items.length}
					next={moreData}
					hasMore={items.length < data.length} // Change this condition based on your data fetching logic
					loader={
						<>
							<SkeletonProducts />
						</>
					}
				>
					<div className="item-box">
						{data.map((item) => (
							<div className="item" key={item.id}>
								<Link href={`/products/${item.id}`}>
									<div className="item-img-box">
										<div className="item-img-wrapper">
											<div className="item-img-inner">
												<Image
													src={item.img[0]}
													width={200}
													height={160}
													sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
													style={{
														position: "absolute",
														height: "100%",
														width: "100%",
														inset: "0px",
														color: "transparent",
													}}
													alt={`${item.name}`}
													priority={true}
												/>
											</div>
										</div>
									</div>
									<div className="item-info">
										<h4>{item.price}₽</h4>
										<p>{item.name}</p>
										<button className="add-item">
											<div className="buy-item">Купить</div>
										</button>
									</div>
								</Link>
							</div>
						))}
					</div>
				</InfiniteScroll>
			</div>
		</>
	)
}
