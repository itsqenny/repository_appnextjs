"use client"
import Back from "@/app/UI/BackButton/BackButton"
import initData from "@/app/UI/useInitData/initData"
import { useState } from "react"
import Notification from "@/app/components/popup/notification"
const Subscription = () => {
	const [isVisible, setIsPopupVisible] = useState(false)
	const { WebApp } = initData()
	const message = 'В текущее время покупка недоступна'
	const showPopup = () => {
		WebApp.HapticFeedback.notificationOccurred('error');
		setIsPopupVisible(true)
		setTimeout(() => {
			setIsPopupVisible(false)
		}, 3000) // Закроется через 3 секунды, можно настроить
	}
	return (
		<>
			<Back />
			<div className="profile-data" style={{marginTop:'0px'}}>
				<div className="profile-data-title" style={{marginBottom:'28px'}}>Подписка</div>
				<div
					className="subscription-container"
					style={{ border: "2px solid var(--tg-second)" }}
				>
					<div className="connect-classic">connect</div>
					<p className="connect-free">Бесплатно</p>
					<ul class="features-list">
						<li className="feature-item">Кэшбэк с покупки (1000 рублей)</li>
						<li className="feature-item">
							Лимит на списание бонусов (до 5990)
						</li>
					</ul>
				</div>
				<div
					class="subscription-container"
					style={{ border: "2px solid #7969dc", marginTop: "30px" }}
				>
					<div className="connect-plus">connect+</div>
					<p className="connect-plus-price">590 ₽ в месяц </p>
					<ul class="features-list">
						
						<li className="feature-item">
							Повышенный кэшбэк (+15%)</li>
						<li className="feature-item">
							Эксклюзивный доступ к новинкам и акциям
						</li>
						<li className="feature-item">
							Дополнительные предложения и скидки
						</li>
						<li className="feature-item">
							Лимит на списание бонусов (до 4990)
						</li>
					</ul>
					<button
						className="btn-profile-data-info btn-profile-data"
						onClick={showPopup}
					>
						Приобрести подписку
					</button>
				</div>
				<div className="subscription-container" style={{ marginTop: "30px" }}>
					<div className="connect-pro">connect pro</div>
					<p className="connect-pro-price">990 ₽ в месяц </p>
					<ul className="features-list">
						<li className="feature-item">Повышенный кэшбэк (+25%)</li>
						<li className="feature-item">
							Эксклюзивный доступ к новинкам и акциям
						</li>
						<li className="feature-item">
							Дополнительные предложения и скидки
						</li>
						<li className="feature-item">
							Лимит на списание бонусов (до 3990)
						</li>
					</ul>
					<button
						className="btn-profile-data-info btn-profile-data"
						onClick={showPopup}
					>
						Приобрести подписку
					</button>
					<Notification isVisible={isVisible} message={message}/>
				</div>
			</div>
		</>
	)
}

export default Subscription
