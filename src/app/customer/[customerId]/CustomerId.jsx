"use client"
import Back from "@/app/UI/BackButton/BackButton"
import { useState, useEffect } from "react"
import initData from "@/app/UI/useInitData/initData"
import Link from "next/link"
import CustomerIdRank from "./CustomerIdRank"
import Notification from "@/app/components/popup/notification"
import CustomerIdSettings from "./CustomerIdSettings"
import CustomerIdPhoto from "./CustomerIdPhoto"
import CustomerData from "./components/CustomerData"
const CustomerId = ({ customerId, data, error, user }) => {
	const [isVisible, setIsPopupVisible] = useState(false)
	const [userData, setUserData] = useState(null)
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

	useEffect(() => {
		// При монтировании компонента, попытайтесь загрузить данные из localStorage
		const storedData = localStorage.getItem("form")
		if (storedData) {
			setForm(JSON.parse(storedData))
		}
	}, [])

	const handleChange = (e) => {
		const { name, value } = e.target
		setForm((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handlePhoneNumberInput = (e) => {
		const inputValue = e.target.value

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

			setForm((prevForm) => ({
				...prevForm,
				phoneNumber: formattedNumber,
			}))
		} else {
			setForm((prevForm) => ({
				...prevForm,
				phoneNumber: digitsOnly,
			}))
		}
	}

	const handleSaveClick = async () => {
		setIsEditing(true)
		localStorage.setItem("form", JSON.stringify(form))
		console.log("Сохранено:", form)
		const postData = {
			userId: customerId,
			userFio: form.userFio,
			phoneNumber: form.phoneNumber,
			userCity: form.userCity,
			userAdress: form.userAdress,
		}

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

	const handleUserDataChange = (newUserData) => {
		setUserData(newUserData)
	}
	//console.log(`data: ${JSON.stringify(userData)}`)
	const handleWrite = () => {
		Telegram?.WebApp?.openLink("https://t.me/mustnotbeempty", {
			try_instant_view: true,
		})
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
							onDataChange={handleUserDataChange}
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
										background: "#f5f5f5",
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
							onClick={handleWrite}
						>
							Написать
						</button>
						<Notification isVisible={isVisible} message={message} />
					</div>
					<footer> beta 9.02</footer>
				</>
			) : (
				<>
					<CustomerData
						customerId={customerId}
						userData={userData}
						form={form}
						handleChange={handleChange}
						handlePhoneNumberInput={handlePhoneNumberInput}
						handleSaveClick={handleSaveClick}
					/>
				</>
			)}
		</>
	)
}

export default CustomerId
