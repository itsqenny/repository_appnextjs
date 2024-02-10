"use client"

const Size = ({ sizes, selectedSizes, handleSizeToggle }) => {
	return (
		<>
			<div className="sort-price">
				{sizes.map((size) => (
					<button
						key={sizes}
						className={`label-price ${
							selectedSizes === size ? "selected" : ""
						}`}
						onClick={() => handleSizeToggle(size)}
					>
						{size}
					</button>
				))}
			</div>
		</>
	)
}

export default Size
