"use client"

const Size = ({ sizes, selectedSizes, handleSizeToggle }) => {
	return (
		<>
			<div className="size_box">
				{sizes.map((size) => (
					<button
						key={size}
						className={`sort-price-btn ${
							selectedSizes === size ? "selected" : ""
						}`}
						onClick={() => handleSizeToggle(size)}
					>
						<div className="Story-size-content">
							<div className="size-nubmer">{size}</div>
						</div>
					</button>
				))}
			</div>
		</>
	)
}

export default Size
