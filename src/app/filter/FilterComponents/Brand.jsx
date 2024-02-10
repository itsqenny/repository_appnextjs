"use client"

const Brand = ({ brands, selectedBrands, handleBrandToggle }) => {
	return (
		<>
			<div className="tag-filters-item">
				{brands.map((brand) => (
					<label key={brand} className="tag-filter-button">
						<button
							className={`checkbox-item ${
								selectedBrands === brand ? "selected" : ""
							}`}
							onClick={() => handleBrandToggle(brand)}
						>
							<span className="checkbox-check">
								<input type="checkbox" className="checkbox-check-input" />
								<span className="checkbox-icon">
									{selectedBrands === brand ? (
										<svg
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10 1.667c-.182 0-.36.001-.535.004l-.513.014-.25.01-.482.03-.46.038c-3.988.386-5.61 2.009-5.998 5.996l-.038.461-.028.483c-.004.081-.009.165-.011.249l-.014.513-.004.265V10c0 .182.001.36.004.535l.014.513.01.25.03.482.037.46c.387 3.988 2.01 5.61 5.997 5.998l.461.038.482.028c.082.004.165.009.25.011l.513.014.535.004.535-.004.513-.014.25-.01.482-.03.46-.037c3.988-.387 5.61-2.01 5.998-5.997l.038-.461.028-.482c.004-.082.009-.165.011-.25l.014-.513.004-.535-.004-.535-.014-.513-.01-.25-.03-.482-.037-.46c-.387-3.988-2.01-5.61-5.997-5.997l-.461-.039-.482-.028a23.59 23.59 0 0 0-.25-.011l-.513-.014-.265-.003-.27-.001Zm1.91 6.077a.833.833 0 0 1 1.248 1.1l-.069.079-3.333 3.333a.834.834 0 0 1-1.1.069l-.079-.07-1.666-1.666a.833.833 0 0 1 1.1-1.247l.078.069 1.078 1.077 2.744-2.744Z"
												fill="currentColor"
											></path>
										</svg>
									) : (
										<svg
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10 2.5c6 0 7.5 1.5 7.5 7.5S16 17.5 10 17.5 2.5 16 2.5 10 4 2.5 10 2.5Z"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
												fill="none"
											></path>
										</svg>
									)}
								</span>
							</span>
							<span className="checkbox-text">{brand}</span>
						</button>
					</label>
				))}
			</div>
		</>
	)
}

export default Brand
