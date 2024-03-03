"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useSWR from "swr"
const fetcher = (url) => fetch(url).then((res) => res.json())
export default function ChangeCity({
	handleCitySelect,
	handleChange,
	searchQuery,
	setSearchQuery,
	data,
	onSearch,
	form,
}) {
	return (
		<>
			<div className="profile-select-info">
				<div
					className="profile-select-input"
					style={{ borderBottom: "1px solid rgb(0 0 0 / 21%)" }}
				>
					<form onSubmit={onSearch}>
						<label className="profile-select-label">Город</label>
						<input
							type="text"
							className="profile-search-value"
							name="userCity"
							value={searchQuery}
							onChange={(e) => {
								setSearchQuery(e.target.value)
							}}
						/>
					</form>
					<div className="profile-select-info-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="tabler-icon tabler-icon-chevron-right"
						>
							<path d="M9 6l6 6l-6 6"></path>
						</svg>
					</div>
				</div>
			</div>

			<div className="city-box">
				{data?.results?.map((item) => (
					<div
						key={item.Code}
						className="city"
						onChange={(e) => {
							handleChange({ target: { name: "userCity", value: item.Name } })
						}}
						onClick={() => {
							handleCitySelect(item)
						}}
					>
						<p>{item.Name}</p>
					</div>
				))}
			</div>
		</>
	)
}
