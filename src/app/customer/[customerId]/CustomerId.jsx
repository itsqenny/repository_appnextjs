"use client"
import Back from "@/app/UI/BackButton/BackButton"
import { useState } from "react"
import SavedButton from "@/app/UI/MainButton/SavedButton"
import { useParams } from "next/navigation"
import initData from "@/app/UI/useInitData/initData"
import Link from "next/link"
import CustomerIdRank from "./CustomerIdRank"
import Notification from "@/app/components/popup/notification"
import CustomerIdSettings from "./CustomerIdSettings"
import CustomerIdPhoto from "./CustomerIdPhoto"

const CustomerId = ({ customerId, data, error, user }) => {
	const [isVisible, setIsPopupVisible] = useState(false)
	const message = "В текущее время эта функция недоступна"
	const { WebApp } = initData()
	const showPopup = () => {
		WebApp.HapticFeedback.notificationOccurred("error")
		setIsPopupVisible(true)
		setTimeout(() => {
			setIsPopupVisible(false)
		}, 3000) // Закроется через 3 секунды, можно настроить
	}
	const [form, setForm] = useState({
		userFio: "",
		userAdress: "",
		userCity: "",
		phoneNumber: "",
	})
	const [isEditing, setIsEditing] = useState(true)
	const handleEdit = () => {
		setIsEditing(false)
	}

	const handleSaveClick = async () => {
		setIsEditing(true)
		const postData = {
			userId: customerId,
			userFio: form.userFio,
			phoneNumber: form.phoneNumber,
			userCity: form.userCity,
			userAdress: form.userAdress,
		}
		console.log(postData)

		const response = await fetch(`/api/customer/settings/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(postData),
		})

		const responseData = await response.json()
		console.log(responseData.message)
	}

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const handlePhoneNumberInput = (e) => {
		const inputValue = e.target.value
		// Удалить все символы, кроме цифр
		const digitsOnly = inputValue.replace(/\D/g, "")

		if (digitsOnly.length >= 11) {
			// Ограничить номер 11 цифрами
			const formattedNumber = `+${digitsOnly.slice(0, 1)}(${digitsOnly.slice(
				1,
				4
			)})-${digitsOnly.slice(4, 7)}-${digitsOnly.slice(
				7,
				9
			)}-${digitsOnly.slice(9, 11)}`

			// Обновите состояние form с новым номером телефона
			setForm((prevForm) => ({
				...prevForm,
				phoneNumber: formattedNumber,
			}))
		} else {
			// Обновите состояние form с номером телефона без форматирования
			setForm((prevForm) => ({
				...prevForm,
				phoneNumber: digitsOnly,
			}))
		}
	}

	return (
		<>
			<Back />
			{isEditing ? (
				<>
					<div className="profile-header">
						<div className="profile-avatar-box">
							<div className="profile-avatar-transparent">
								<div className="profile-avatar">
									<CustomerIdPhoto data={data} error={error} />
								</div>
								<div className="profile-name">
									{user?.first_name || "Пользователь"}
								</div>
								<footer>{`@${
									user?.username !== undefined ? user?.username : customerId
								}`}</footer>
							</div>
							<CustomerIdRank userId={customerId} />
						</div>
					</div>
					<div className="profile-data">
						<CustomerIdSettings
							form={form}
							userId={customerId}
							setForm={setForm}
						/>

						<button
							className="btn-profile-data-info btn-profile-data"
							onClick={handleEdit}
						>
							Редактировать
						</button>
					</div>
					<div className="profile-data">
						<div className="profile-subscribe-title">Подписка</div>
						<div className="profile-subscribe-info">
							Доступ к эксклюзивным возможностям
						</div>
						<div
							className="profile-subscribe-ui"
							style={{ color: "var(--tg-hint)", fontSize: "16px" }}
						>
							<div className="subscribe-key">Вид</div>
							<div className="subscribe-value">Зачислить</div>
							<div className="subscribe-add">Списать</div>
						</div>
						<div className="profile-subscribe-ui">
							<div className="subscribe-key">
								<div
									className="usercard-status"
									style={{
										marginLeft: "0px",
										fontSize: "16px",
										background: "var(--tg-second)",
									}}
								>
									connect
								</div>
							</div>
							<div className="subscribe-value">
								<div className="subscribe-bonus-text">100</div>
							</div>
							<div className="subscribe-add">6990</div>
						</div>
						<div className="profile-subscribe-ui">
							<div className="subscribe-key">
								<div
									className="usercard-status-connect-plus"
									style={{ marginLeft: "0px", fontSize: "16px" }}
								>
									connect+
								</div>
							</div>
							<div className="subscribe-value">
								<div className="subscribe-bonus-text-plus">300</div>
							</div>
							<div className="subscribe-add">6490</div>
						</div>
						<div className="profile-subscribe-ui">
							<div className="subscribe-key">
								<div
									className="usercard-status-connect-pro"
									style={{ marginLeft: "0px", fontSize: "16px" }}
								>
									connect pro
								</div>
							</div>
							<div className="subscribe-value">
								<div className="subscribe-bonus-text-pro">500</div>
							</div>
							<div className="subscribe-add">5990</div>
						</div>

						<Link href={`/customer/${customerId}/subscription`}>
							<button className="btn-profile-data-info btn-profile-data">
								Смотреть Подробности
							</button>
						</Link>
					</div>
					<div className="profile-data">
						<div className="profile-data-title">
							Помоги нам
							<span style={{ marginLeft: "5px" }}>✍🏻 </span>
						</div>
						<div className="profile-data-info">
							<span style={{ marginLeft: "5px", textAlign: "left" }}>
								Напиши, что улучшить и получи бонус!
							</span>
						</div>

						<button
							className="btn-profile-data-info btn-profile-data"
							onClick={showPopup}
						>
							Написать
						</button>
						<Notification isVisible={isVisible} message={message} />
					</div>
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
								{form.userAdress === "pickup" && (
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
									value={form.userCity}
									onChange={handleChange}
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
									value={form.userAdressr}
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
									value={form.userFio}
									onChange={handleChange}
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
							<div className="profile-select-input">
								<label className="profile-select-label">Телефон</label>
								<input
									type="text"
									className="profile-search-value"
									name="phoneNumber"
									value={form.phoneNumber}
									onChange={handlePhoneNumberInput}
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
					</div>

					<div className="main-button">
						<button onClick={handleSaveClick}>Сохранить</button>
					</div>
					{/* */}
					<SavedButton handleSaveClick={handleSaveClick} />
				</>
			)}
		</>
	)
}

export default CustomerId
