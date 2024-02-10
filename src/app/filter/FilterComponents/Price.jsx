"use client"

const Price = ({ handleInputChange, fromValue, toValue }) => {
	return (
		<>
			<label className="filter-input-price">
				<div className="filter-price-label">От</div>
				<input
					className="filter-price-label-input"
					type="text"
					value={fromValue}
					onChange={(e) => handleInputChange("from", e.target.value)}
				/>
			</label>
			<label className="filter-input-price">
				<div className="filter-price-label">До</div>
				<input
					className="filter-price-label-input"
					type="text"
					value={toValue}
					onChange={(e) => handleInputChange("to", e.target.value)}
				/>
			</label>
		</>
	)
}

export default Price
