"use client"

const Sort = ({ handleSortChange, selectedOption }) => {
	return (
		<>
			<button
				className={`label-price ${
					selectedOption === "Недорогие" ? "selected" : ""
				}`}
				onClick={() => handleSortChange("Недорогие")}
			>
				Недорогие
			</button>
			<button
				className={`label-price ${
					selectedOption === "Популярные" ? "selected" : ""
				}`}
				onClick={() => handleSortChange("Популярные")}
			>
				Популярные
			</button>
			<button
				className={`label-price ${
					selectedOption === "Дорогие" ? "selected" : ""
				}`}
				onClick={() => handleSortChange("Дорогие")}
			>
				Дорогие
			</button>
		</>
	)
}

export default Sort
