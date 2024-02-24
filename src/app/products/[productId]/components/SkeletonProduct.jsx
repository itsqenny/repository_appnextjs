const SkeletonProducts = () => {
	return (
		<>
			<div className="full-item">
				<div className="images-slider-wrapper">
					<div className="images-slider-images">
						<div className="images-slider-image-item">
							<div className="skeleton-image-item-wrapper"></div>
						</div>
					</div>
				</div>
				<div className="bg-full-item-name">
					<div className="skeleton-full-item-name"></div>
				</div>
				<div className="item-order-info">
					<p
						className="skeleton-full-item-price"
						style={{ marginLeft: "10px" }}
					></p>
					<hr />
					<div className="size_box">
						<button className="skeleton-size_button"></button>
						<button className="skeleton-size_button"></button>
						<button className="skeleton-size_button"></button>
						<button className="skeleton-size_button"></button>
						<button className="skeleton-size_button"></button>
						<button className="skeleton-size_button"></button>
					</div>
				</div>
			</div>
		</>
	)
}
export default SkeletonProducts
