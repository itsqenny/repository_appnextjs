"use client"
import Image from "next/image"
import Link from "next/link"
import InfiniteScroll from "react-infinite-scroll-component"
import { useState } from "react"
import SkeletonProducts from "./SkeletonProducts"
import { useSearchParams } from "next/navigation"
function formatPrice(price) {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}
export default function Products({ data, setSize, size }) {
	const searchParams = useSearchParams()
	const search = searchParams.get("q")
	const items = data ? data.flat() : []
	const loadMore = () => {
		if (setSize) {
			setSize(size + 1)
		}
	}
	const filteredItems = search
		? items.filter((item) =>
				item.name.toLowerCase().includes(search.toLowerCase())
		  )
		: items

	return (
		<>
			<div>
				<InfiniteScroll
					dataLength={filteredItems.length}
					next={loadMore}
					hasMore={true}
					loader={<>{!search && <SkeletonProducts />}</>}
				>
					<div className="item-box">
						{filteredItems?.map((item) => (
							<div className="item" key={item.spuId}>
								<Link href={`/products/${item.spuId}?sku=${item.skuId}`}>
									<div className="item-img-box">
										<div className="item-img-wrapper">
											<div className="item-img-inner">
												<Image
													src={item.images[0]}
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
										<h4>
											{formatPrice(item.priceV2.price)} {""}₽{" "}
										</h4>
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
