const NotFoundFilter = ({
	toValue,
	fromValue,
	selectedSizes,
	selectedBrands,
	selectedOption,
}) => {
	return (
		<>
			{toValue !== null ||
			fromValue !== null ||
			selectedSizes !== null ||
			selectedBrands !== null ||
			selectedOption !== null ? (
				<>
					<div className="not-found-filter">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="ai ai-FaceSad"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="M8 9.05v-.1" />
							<path d="M16 9.05v-.1" />
							<path d="M16 16c-.5-1.5-1.79-3-4-3s-3.5 1.5-4 3" />
						</svg>
					</div>
					<div className="not-found-filter-text">Товар не найден</div>
				</>
			) : (
				<></>
			)}
		</>
	)
}

export default NotFoundFilter
