"use client"

export const revalidate = 0
const SkeletonBasket = () => {
	return (
		<>
			<div className="product-block-order">
				<div className="product-order">
					<p></p>
				</div>
				<div className="skeleton-product-container">
					<div className="skeleton-container-order">
						<div className="product-image-component">
							<div className="skeleton-product-image-container">
								<div className="skeleton-product-image-card">
									<div className="skeleton-product-image-inner">
										<div className="product-image-inner-row"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="product-details">
							<span
								className="skeleton-product-price-and-datecreated"
								style={{ marginTop: "14px" }}
							></span>
							<span
								className="skeleton-product-price-and-datecreated"
								style={{ width: "90px" }}
							></span>
							<span
								className="skeleton-product-price-and-datecreated"
								style={{ width: "80px" }}
							></span>
						</div>
					</div>
					<div className="skeleton-container-order">
						<div className="product-image-component">
							<div className="skeleton-product-image-container">
								<div className="skeleton-product-image-card">
									<div className="skeleton-product-image-inner">
										<div className="product-image-inner-row"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="product-details">
							<span
								className="skeleton-product-price-and-datecreated"
								style={{ marginTop: "14px" }}
							></span>
							<span
								className="skeleton-product-price-and-datecreated"
								style={{ width: "90px" }}
							></span>
							<span
								className="skeleton-product-price-and-datecreated"
								style={{ width: "80px" }}
							></span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SkeletonBasket
