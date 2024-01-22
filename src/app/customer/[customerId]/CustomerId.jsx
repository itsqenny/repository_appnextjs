"use client"
import Back from "@/app/UI/BackButton/BackButton"
import { useState } from "react"
import SavedButton from "@/app/UI/MainButton/SavedButton"
import { useParams } from "next/navigation"
import initData from "@/app/UI/useInitData/initData"
import Link from "next/link"
import CustomerIdRank from "./CustomerIdRank"
import Notification from "@/app/components/popup/notification"

const CustomerId = ({ customerId, data, error, user }) => {
	const [isVisible, setIsPopupVisible] = useState(false)
	const message = 'В текущее время эта функция недоступна'
	const { WebApp } = initData()
	const showPopup = () => {
		WebApp.HapticFeedback.notificationOccurred('error');
		setIsPopupVisible(true)
		setTimeout(() => {
			setIsPopupVisible(false)
		}, 3000) // Закроется через 3 секунды, можно настроить
	}
	const [form, setForm] = useState({
		fullName: "",
		address: "",
		city: "",
		phone: "",
	})
	const [isEditing, setIsEditing] = useState(true)
	const handleEdit = () => {
		setIsEditing(false)
	}

	const handleSaveClick = () => {
		setIsEditing(true)
	}

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
		console.log([e.target.name])
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
				phone: formattedNumber,
			}))
		} else {
			// Обновите состояние form с номером телефона без форматирования
			setForm((prevForm) => ({
				...prevForm,
				phone: digitsOnly,
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
									{!data && error && data ? (
										<>
											<div className="skeleton-profile-avatar">
												<div className=""></div>
											</div>
										</>
									) : (
										<>
											{!data ? (
												<>
													<div className="profile-avatar-img">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="54"
															height="54"
															viewBox="0 0 314 251"
															fill="none"
														>
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M34.25 34.0459C3.311 64.7629 0 68.3619 0 71.2859C0 74.1889 2.748 77.2589 26.75 101.159C51.595 125.9 56.173 130.008 58.899 130.008C59.466 130.008 61.521 128.611 63.465 126.904L67 123.801L67.032 185.654C67.057 235.502 67.321 247.848 68.392 249.258C69.639 250.901 75.047 251.008 156.95 251.008H244.179L246.056 248.758C247.846 246.612 247.935 243.685 247.967 185.584L248 124.659L250.25 126.76C251.488 127.915 253.774 129.176 255.33 129.562C257.994 130.224 259.801 128.628 286.08 102.41C311.466 77.0839 314 74.2539 314 71.2279C314 68.1839 311.083 65.0059 279.785 33.9539L245.569 0.00789157H217.32C185.74 0.00789157 187.995 -0.538101 186.55 7.4529C185.573 12.8509 181.754 20.0999 177.806 24.0479C170.838 31.0159 158.373 33.7119 147.601 30.5799C137.855 27.7469 129.476 18.1139 127.548 7.5259C126.08 -0.532103 128.293 0.00588986 96.715 0.0248899L68.5 0.0418882L34.25 34.0459Z"
																style={{ fill: "var(--tg-text)" }}
															/>
														</svg>
													</div>
												</>
											) : (
												<>
													<div className="profile-avatar">
														<img
															src={data.img}
															className="usercard_avatar_img"
														/>
													</div>
												</>
											)}
										</>
									)}
								</div>
								<div className="profile-name">{user?.first_name}</div>
								<footer>{`@${
									user?.username !== undefined ? user?.username : customerId
								}`}</footer>
							</div>
							<CustomerIdRank userId={customerId} />
						</div>
					</div>
					<div className="profile-data">
						<div className="profile-data-title">Данные доставки</div>
						<div className="profile-data-info">
							<span>ФИО</span>
							<span className="profile-data-text">
								{form.fullName || "Не указан"}
							</span>
						</div>
						<div className="profile-data-info">
							<span>Телефон</span>
							<span className="profile-data-text">
								{form.phone || "Не указан"}
							</span>
						</div>
						<div className="profile-data-info">
							<span>Город</span>
							<span className="profile-data-text">
								{form.city || "Не указан"}
							</span>
						</div>
						<div className="profile-data-info">
							<span>Адрес доставки</span>
							<span className="profile-data-text">
								{form.address || "Не указан"}
							</span>
						</div>

						<button
							className="btn-profile-data-info btn-profile-data"
							onClick={handleEdit}
						>
							Редактировать
						</button>
					</div>
					<div className="profile-data">
						<div className="profile-subsribe-title">
							Подписка
							{/*
							<div className="subsribe-box">
								<p className="subscribe-status">
									connect+
								</p>
							</div>
							 */}
						</div>
						<div className="profile-data-info">
							Получите доступ к эксклюзивным возможностям
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

						<button className="btn-profile-data-info btn-profile-data"
						onClick={showPopup}>
							Написать
						</button>
						<Notification isVisible={isVisible} message={message}/>
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
								{form.address === "pickup" && (
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
										<img src="../img/svg/bx4bg.png" alt="" />
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
									name="city"
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
									name="address"
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
									name="fullName"
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
									name="phone"
									value={form.phone}
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

export default CustomerId
