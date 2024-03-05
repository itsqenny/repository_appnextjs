"use client"
import Back from "@/app/UI/BackButton/BackButton"
import initData from "@/app/UI/useInitData/initData"
import { useState } from "react"
import Notification from "@/app/components/popup/notification"
import SubsFetcherId from "@/app/confirm/[confirmDetails]/SubsFetcherId"

const Subscription = () => {
	const [isVisible, setIsPopupVisible] = useState(false)
	const { SubsPrice, SubsInfo, SubsPriceInfo } = SubsFetcherId()
	const { WebApp, userId, queryId } = initData()
	//const userId = "204688184"
	//const queryId = 'acsdoasdAWQc12351'

	const SubsBuy = async (name, text, id) => {
		//console.log(text, name, id)
		//console.log(`text:${text}, name:${name}, id: ${id}`)

		const SubsData = {
			productId: name,
			queryId,
			price: id,
			name: text,
			userId,
			order_id: name,
		}

		try {
			const response = await fetch(`/api/customer/pay/subscription`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(SubsData),
			})

			const responseData = await response.json()
			if (responseData.paymentUrl) {
				Telegram.WebApp.openLink(responseData.paymentUrl)
			} else {
				console.error("Отсутствует ссылка для оплаты.")
			}
		} catch (error) {
			console.error("Ошибка отправки данных на сервер:", error)
		}
	}

	return (
		<>
			<Back />
			<div className="profile-data" style={{ marginTop: "0px" }}>
				<div className="profile-data-title" style={{ marginBottom: "28px" }}>
					Подписка
				</div>
				<div
					className="subscription-container"
					style={{ border: "2px solid var(--tg-second)" }}
				>
					<div className="connect-classic">connect</div>
					<p className="connect-free">Бесплатно</p>
					<ul className="features-list">
						<li className="feature-item">Начислим 100 ₽ с покупки</li>
						<li className="feature-item">
							Спишем все бонусы на сумму покупки до 6990 ₽
						</li>
					</ul>
				</div>
				<div
					className="subscription-container"
					style={{ border: "2px solid #7969dc", marginTop: "30px" }}
				>
					<div className="connect-plus">connect+</div>
					<p className="connect-plus-price">590 ₽</p>
					<ul className="features-list">
						<li className="feature-item">Начислим 300 ₽ с покупки</li>
						<li className="feature-item">
							Эксклюзивный доступ к новинкам и акциям
						</li>
						<li className="feature-item">
							Спишем все бонусы на сумму покупки до 6490 ₽
						</li>
					</ul>
					{SubsInfo === "300" || SubsInfo === "500" ? (
						<></>
					) : (
						<>
							<button
								className="btn-profile-data-info btn-profile-data"
								onClick={() =>
									SubsBuy(
										SubsPriceInfo["connect+"].id,
										SubsPriceInfo["connect+"].name,
										SubsPriceInfo["connect+"].text
									)
								}
							>
								Приобрести подписку
							</button>
						</>
					)}
				</div>
				<div className="subscription-container" style={{ marginTop: "30px" }}>
					<div className="connect-pro">connect pro</div>
					<p className="connect-pro-price">990 ₽</p>
					<ul className="features-list">
						<li className="feature-item">Начислим 500 ₽ с покупки</li>
						<li className="feature-item">
							Эксклюзивный доступ к новинкам и акциям
						</li>
						<li className="feature-item">
							Дополнительные предложения и скидки
						</li>
						<li className="feature-item">
							Спишем все бонусы на сумму покупки до 5990 ₽{" "}
						</li>
					</ul>
					{SubsInfo === "500" ? (
						<></>
					) : (
						<>
							<button
								className="btn-profile-data-info btn-profile-data"
								onClick={() =>
									SubsBuy(
										SubsPriceInfo["connect pro"].id,
										SubsPriceInfo["connect pro"].name,
										SubsPriceInfo["connect pro"].text
									)
								}
							>
								Приобрести подписку
							</button>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default Subscription
