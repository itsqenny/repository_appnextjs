"use client"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
const DynamicBackButton = dynamic(() =>
	import("@/app/UI/BackButton/BackButton")
)
import useSWRInfinite from "swr/infinite"
import ChangeButton from "@/app/UI/MainButton/ChangeButton"
import FilterProduct from "./FilterProduct"
import useSWR from "swr"
import Brand from "./FilterComponents/Brand"
import Size from "./FilterComponents/Size"
import Price from "./FilterComponents/Price"
import Sort from "./FilterComponents/Sort"

const fetcher = (url) => fetch(url).then((res) => res.json())
const getKey = (
	pageIndex,
	previousPageData,
	fromValue,
	selectedSizes,
	toValue,
	selectedBrands,
	fetchOn
) => {
	console.log("fetchOn inside getKey:", fetchOn)

	if (previousPageData && !previousPageData.length) return null

	pageIndex = pageIndex + 1

	return (
		`/api/filter?limit=10&page=${pageIndex}&` +
		(fromValue ? `_from=${fromValue}&` : "") +
		(selectedSizes ? `_size=${selectedSizes}&` : "") +
		(toValue ? `_to=${toValue}&` : "") +
		(selectedBrands ? `_brand=${selectedBrands}` : "")
	)
}
export default function Filter() {
	const brands = ["Nike", "Adidas", "Puma", "Reebok", "Supreme"]
	const [selectedBrands, setSelectedBrands] = useState(null)
	const [selectedSizes, setSelectedSizes] = useState(null)
	const [selectedOption, setSelectedOption] = useState(null)
	const [fromValue, setFromValue] = useState("")
	const [toValue, setToValue] = useState("")
	const [fetchOn, setFetchOn] = useState(false)
	const selectFilter = `Применены фильтры: ${selectedBrands || " "} ${
		selectedSizes || " "
	} ${fromValue || " "} ${toValue || " "} ${selectedOption || " "}`
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
		setFetchOn(true)
	}

	const { data, size, setSize, error } = useSWRInfinite(
		(pageIndex, previousPageData) =>
			getKey(
				pageIndex,
				previousPageData,
				fromValue,
				selectedSizes,
				toValue,
				selectedBrands,
				fetchOn
			),
		fetcher,
		{
			initialSize: 1,
		}
	)
	if (data) {
		console.log(data)
	}

	return (
		<>
			<DynamicBackButton />
			<div className="filters">
				<div className="filters-body">
					<h2>Фильтр</h2>
					<div className="filter-price-text">Цена, Р</div>
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
					<div className="filters-item">
						<div className="filter-price-text">Бренд</div>
						<Brand
							selectedBrands={selectedBrands}
							brands={brands}
							handleBrandToggle={handleBrandToggle}
						/>
					</div>
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

				<div className="active-filter-text">
					<span>{selectFilter}</span>
					<button className="active-filter-btn">
						<svg
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 5 5 15M5 5l10 10"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</button>
				</div>

				<div className="main-button">
					<button onClick={handleFiltered}>Применить фильтр</button>
				</div>
				{/*  */}
				<ChangeButton />

				<FilterProduct data={data} size={size} setSize={setSize} />
			</div>
		</>
	)
}
