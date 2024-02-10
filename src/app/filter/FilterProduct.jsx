"use client"

import Image from "next/image"
import Link from "next/link"
import InfiniteScroll from "react-infinite-scroll-component"
import SkeletonProducts from "../products/SkeletonProducts"
const FilterProduct = ({ data, size, setSize }) => {
	const items = data ? data.flat() : []
	const loadMore = () => {
		if (setSize) {
			setSize(size + 1)
		}
	}
	return (
		<>
			<div>
				<InfiniteScroll
					dataLength={items.length}
					next={loadMore}
					hasMore={true}
					loader={
						<>
							<SkeletonProducts />
						</>
					}
				>
					<div className="item-box">
						{items?.map((item) => (
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

export default FilterProduct
