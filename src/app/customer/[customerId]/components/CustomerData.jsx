"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ChangeCity from "./ChangeCity"
import SavedButton from "@/app/UI/MainButton/SavedButton"
import useSWR from "swr"
const fetcher = (url) => fetch(url).then((res) => res.json())
export default function CustomerData({
	form,
	handleChange,
	handlePhoneNumberInput,
	handleSaveClick,
	onDataChange,
	userData,
	customerId,
}) {
	const [openCity, setOpenCity] = useState(false)
	const handleOpenCity = () => {
		setOpenCity(true)
	}
	const [searchQuery, setSearchQuery] = useState("")
	const router = useRouter()

	const onSearch = (event) => {
		event.preventDefault()
		router.push(`?q=${searchQuery}`)
	}
	//console.log(searchQuery)
	const { data, error } = useSWR(`/api/city?cityName=${searchQuery}`, fetcher, {
		refreshInterval: 3000,
	})
	//console.log(data)
	const handleCitySelect = async (item) => {
		handleChange({ target: { name: "userCity", value: item.Name } })

		const postData = {
			userId: customerId,
			userCity: item.Name,
		}
		console.log(`postData: ${JSON.stringify(postData)}`)

		const response = await fetch(`/api/customer/settings/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(postData),
		})

		const responseData = await response.json()
		console.log(`responseData : ${JSON.stringify(responseData)}`)

		setOpenCity(false)
	}

	return (
		<>
			{openCity ? (
				<>
					<ChangeCity
						form={form}
						customerId={customerId}
						handleChange={handleChange}
						onSearch={onSearch}
						handleCitySelect={handleCitySelect}
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
						data={data}
					/>
				</>
			) : (
				<>
					<div className="profile-data">
						<div className="profile-data-title">Данные доставки</div>
						<div className="profile-data-info">
							<h2>Вид доставки</h2>
						</div>
						<div className="delivery-type-input">
							<button className={`button-delivery`}>
								{form?.userAdress === "pickup" && (
									<span className="delivery-type-item-outline">
										<svg
											width="135"
											height="100"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="0.5"
												y="0.5"
												width="134"
												height="99"
												rx="19.5"
												stroke="url(#outline_svg__a)"
											></rect>
											<defs>
												<radialGradient
													id="outline_svg__a"
													cx="0"
													cy="0"
													r="1"
													gradientUnits="userSpaceOnUse"
													gradientTransform="rotate(-38.951 123.34 28.893) scale(146.314 152.629)"
												>
													<stop stopColor="#EB9C00"></stop>
													<stop offset="0.271" stopColor="#FF4769"></stop>
													<stop offset="0.664" stopColor="#3D50FF"></stop>
													<stop offset="1" stopColor="#00B3FF"></stop>
												</radialGradient>
											</defs>
										</svg>
									</span>
								)}
								<div className="delivery-type-item-content">
									<div className="delivery-type-title">
										Самовывоз <br />
										из ПВЗ
									</div>
									<div className="bg-delivery-type"></div>
									<div className="delivery-type-image">
										<img src="../../bx4bg.png" alt="" />
									</div>
								</div>
							</button>
						</div>
						<div className="profile-data-info">
							<h2>Данные получателя</h2>
						</div>

						<div className="profile-select-info">
							<div className="profile-select-input">
								<label className="profile-select-label">Город</label>
								<input
									type="text"
									className="profile-search-value"
									name="userCity"
									value={form?.userCity}
									placeholder={userData?.userCity}
									onChange={handleChange}
									onClick={handleOpenCity}
								/>

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
						<div className="profile-select-info">
							<div className="profile-select-input">
								<label className="profile-select-label">Адрес доставки</label>
								<input
									type="text"
									className="profile-search-value"
									name="userAdress"
									value={form?.userAdress}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="profile-select-info">
							<div className="profile-select-input">
								<label className="profile-select-label">
									Фамилия, имя и очетство
								</label>
								<input
									type="text"
									className="profile-search-value"
									name="userFio"
									value={form?.userFio}
									onChange={handleChange}
								/>
								<div className="profile-select-info-icon"></div>
							</div>
						</div>
						<div className="profile-select-info">
							<div className="profile-select-input">
								<label className="profile-select-label">Телефон</label>
								<input
									type="text"
									className="profile-search-value"
									name="phoneNumber"
									value={form?.phoneNumber}
									onChange={handlePhoneNumberInput}
								/>

								<div className="profile-select-info-icon"></div>
							</div>
						</div>
					</div>
					{/*
					<div className="main-button">
						<button onClick={handleSaveClick}>Сохранить</button>
					</div>
					 */}
					<SavedButton handleSaveClick={handleSaveClick} />
				</>
			)}
		</>
	)
}
