"use client"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

import useSWRInfinite from "swr/infinite"
import ChangeButton from "@/app/UI/MainButton/ChangeButton"
import FilterProduct from "./FilterProduct"
import Brand from "./FilterComponents/Brand"
import Size from "./FilterComponents/Size"
import Price from "./FilterComponents/Price"
import Sort from "./FilterComponents/Sort"
import NotFound from "./FilterComponents/NotFound"

export default function Filter() {
	const brands = ["Nike", "Adidas", "Puma", "Reebok", "Supreme"]
	const [selectedBrands, setSelectedBrands] = useState("")
	const [selectedSizes, setSelectedSizes] = useState("")
	const [selectedOption, setSelectedOption] = useState("")
	const [fromValue, setFromValue] = useState("")
	const [toValue, setToValue] = useState("")
	const [fetchOn, setFetchOn] = useState(false)
	const [filter, setFilter] = useState([])
	const [message, setMessage] = useState("")
	const [onFilter, setOnFilter] = useState(false)
	const selectFilter = `Применены фильтры: ${selectedBrands || " "} ${
		selectedSizes || " "
	}(EU) ${fromValue || " "} ${toValue || " "} ${selectedOption || " "}`
	const handleBrandToggle = (brand) => {
		setSelectedBrands((prevBrand) => (prevBrand === brand ? null : brand))
	}
	const category = "sneakers"
	const sizes = [
		"36",
		"36.5",
		"37",
		"37.5",
		"38",
		"38.5",
		"39",
		"39.5",
		"40",
		"40.5",
		"41",
		"41.5",
		"42",
		"42.5",
		"43",
		"43.5",
		"44",
		"44.5",
		"50",
	]
	const handleSizeToggle = (size) => {
		setSelectedSizes((prevSize) => (prevSize === size ? null : size))
	}
	const handleInputChange = (inputType, value) => {
		const sanitizedValue = value.replace(/\D/g, "").slice(0, 6)
		if (inputType === "from") {
			setFromValue(sanitizedValue)
		} else {
			setToValue(sanitizedValue)
		}
	}
	const handleSortChange = (option) => {
		setSelectedOption((prevOption) => (prevOption === option ? null : option))
	}

	const handleFiltered = async () => {
		try {
			const response = await fetch(
				`/api/filter?` +
					(fromValue ? `_from=${fromValue}&` : "") +
					(selectedSizes ? `_size=${selectedSizes}&` : "") +
					(toValue ? `_to=${toValue}&` : "") +
					(selectedBrands ? `_brand=${selectedBrands}` : "") +
					(selectedOption ? `_option=${selectedOption}` : "")
			)
			console.log(response)
			const res = await response.json()
			if (res !== null) {
				setFilter(res)
				setOnFilter(true)
			} else {
				setMessage("Товар закончился")
			}
		} catch (error) {
			console.error("Ошибка отправки данных на сервер:", error)
		}
	}
	const resetStates = () => {
		setSelectedBrands("")
		setSelectedSizes("")
		setSelectedOption("")
		setFromValue("")
		setToValue("")
		setOnFilter(false)
	}

	return (
		<>
			<div className="filters">
				{onFilter ? (
					<>
						<div className="active-filter-text">
							<span>{selectFilter}</span>
							<button className="active-filter-btn" onClick={resetStates}>
								<svg
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15 5 5 15M5 5l10 10"
										stroke="var(--tg-text)"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</button>
						</div>
						{message}
						<FilterProduct data={filter} />
						<NotFound
							toValue={toValue}
							fromValue={fromValue}
							selectedBrands={selectedBrands}
							selectedOption={selectedOption}
							selectedSizes={selectedSizes}
						/>
					</>
				) : (
					<>
						<div className="filters-body">
							<h2>Фильтр</h2>
							<div className="filters-box">
								<div className="filter-price-text">Цена, ₽</div>
								<div className="filter-price">
									<Price
										handleInputChange={handleInputChange}
										fromValue={fromValue}
										toValue={toValue}
									/>
								</div>
								<div className="sort-price">
									<Sort
										handleSortChange={handleSortChange}
										selectedOption={selectedOption}
									/>
								</div>
							</div>
							<div className="filters-box">
								<div className="filters-item">
									<div className="filter-price-text">Бренд</div>
									<Brand
										selectedBrands={selectedBrands}
										brands={brands}
										handleBrandToggle={handleBrandToggle}
									/>
								</div>
							</div>
							<div className="filters-box" style={{ margin: "" }}>
								<div className="filters-item">
									<div className="filter-price-text">
										Размер <strong>(EU)</strong>
									</div>
									<Size
										sizes={sizes}
										selectedSizes={selectedSizes}
										handleSizeToggle={handleSizeToggle}
									/>
								</div>
							</div>
						</div>
						{toValue ||
						fromValue ||
						selectedSizes ||
						selectedBrands ||
						selectedOption ? (
							<>
								{/* 
								<div className="main-button">
									<button onClick={handleFiltered}>Применить фильтр</button>
								</div>
								 */}
								<ChangeButton handleFiltered={handleFiltered} />
							</>
						) : (
							<></>
						)}
					</>
				)}
			</div>
		</>
	)
}
