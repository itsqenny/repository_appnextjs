"use client"

import initData from "@/app/UI/useInitData/initData"
import BonusIdFetcher from "./BonusIdFetcher"
import Back from "@/app/UI/BackButton/BackButton"
import { useState } from "react"

const bonusId = () => {
	const { userId } = initData();
	//const userId = "204688184"

	const [isCopied, setIsCopied] = useState(false)
	const handleCopyClick = async () => {
		try {
			await navigator.clipboard.writeText(
				`https://t.me/zipperstore_bot?start=${userId}`
			)
			setIsCopied(true)
		} catch (err) {
			console.error("Ошибка при копировании ссылки", err)
		}
	}
	return (
		<>
			<Back />
			<div className="refer-friend-section">
				<div className="refer-friend-box-selection">
					<div
						className="refer-friend-box-radius"
						style={{
							clipPath:
								"M 490 0 c 18.8562 0 28.2843 0 34.1421 5.8579 a 20 20 0 0 1 0 0 c 5.8579 5.8579 5.8579 15.286 5.8579 34.1421 L 530 85 c 0 18.8562 0 28.2843 -5.8579 34.1421 a 20 20 0 0 1 0 0 c -5.8579 5.8579 -15.286 5.8579 -34.1421 5.8579 L 40 125 c -18.8562 0 -28.2843 0 -34.1421 -5.8579 a 20 20 0 0 1 0 0 c -5.8579 -5.8579 -5.8579 -15.286 -5.8579 -34.1421 L 0 40 c 0 -18.8562 0 -28.2843 5.8579 -34.1421 a 20 20 0 0 1 0 0 c 5.8579 -5.8579 15.286 -5.8579 34.1421 -5.8579 Z",
						}}
					>
						<div className="refer-friend-box">
							<div className="refer-friend-title-text">
								<BonusIdFetcher userId={userId} />
								<div className="refer-friend-bonus">бонусов</div>
							</div>
							<div className="refer-friend-rub">₽</div>
						</div>
					</div>
				</div>
				<div className="refer-friend-title">
					Зови друзей! <br />
					Подарим по
					<div className="refer-friend-title-gradient"> 1000 рублей </div>
					каждому!
				</div>
				<div className="refer-friend-selection-box">
					<div className="refer-box">
						<p className="refer-friend-title-gradient">
							<strong>Бонусы</strong>
						</p>{" "}
						<strong>начислим после того как заказ</strong> пользователя,
						перешедшего по реферальной ссылке,{" "}
						<strong>был отправлен в Россию.</strong>
					</div>
					<div className="refer-box">
						<strong>Акция</strong> действует <strong>до 10 марта</strong>.{" "}
						<br />
						После 10 марта вы будете получать{" "}
						<div className="refer-friend-title-gradient">
							<br />
							<strong>+500 бонусов</strong>
						</div>{" "}
						за приглашенного друга
					</div>
				</div>
			</div>
			<div className="link-refer-friends">
				<div className="link-refer-friends-title">
					Твоя ссылка на приглашение
				</div>
				<div className="link-refer-friends-linkuser">
					https://t.me/zipperstore_bot?start={userId}
					<div className="link-refer-svg" onClick={handleCopyClick}>
					{isCopied ? (
						<>
							<svg
								fill="none"
								height="24"
								viewBox="0 0 24 24"
								width="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.25 3C4.45507 3 3 4.45507 3 6.25V12.25C3 14.0449 4.45507 15.5 6.25 15.5H7.5V14H6.25C5.2835 14 4.5 13.2165 4.5 12.25V6.25C4.5 5.2835 5.2835 4.5 6.25 4.5H12.25C13.2165 4.5 14 5.2835 14 6.25V12.25C14 13.2165 13.2165 14 12.25 14H11V15.5H12.25C14.0449 15.5 15.5 14.0449 15.5 12.25V6.25C15.5 4.45507 14.0449 3 12.25 3H6.25Z"
									fill="#7969dc"
								/>
								<path
									d="M10 11.75C10 10.7835 10.7835 10 11.75 10H12.9982V8.5H11.75C9.95507 8.5 8.5 9.95507 8.5 11.75V17.75C8.5 19.5449 9.95507 21 11.75 21H17.75C19.5449 21 21 19.5449 21 17.75V11.75C21 9.95507 19.5449 8.5 17.75 8.5H16.5V10H17.75C18.7165 10 19.5 10.7835 19.5 11.75V17.75C19.5 18.7165 18.7165 19.5 17.75 19.5H11.75C10.7835 19.5 10 18.7165 10 17.75V11.75Z"
									fill="#7969dc"
								/>
							</svg>
						</>
					) : (
						<>
							<svg
								fill="none"
								height="24"
								viewBox="0 0 24 24"
								width="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.25 3C4.45507 3 3 4.45507 3 6.25V12.25C3 14.0449 4.45507 15.5 6.25 15.5H7.5V14H6.25C5.2835 14 4.5 13.2165 4.5 12.25V6.25C4.5 5.2835 5.2835 4.5 6.25 4.5H12.25C13.2165 4.5 14 5.2835 14 6.25V12.25C14 13.2165 13.2165 14 12.25 14H11V15.5H12.25C14.0449 15.5 15.5 14.0449 15.5 12.25V6.25C15.5 4.45507 14.0449 3 12.25 3H6.25Z"
									fill="#212121"
								/>
								<path
									d="M10 11.75C10 10.7835 10.7835 10 11.75 10H12.9982V8.5H11.75C9.95507 8.5 8.5 9.95507 8.5 11.75V17.75C8.5 19.5449 9.95507 21 11.75 21H17.75C19.5449 21 21 19.5449 21 17.75V11.75C21 9.95507 19.5449 8.5 17.75 8.5H16.5V10H17.75C18.7165 10 19.5 10.7835 19.5 11.75V17.75C19.5 18.7165 18.7165 19.5 17.75 19.5H11.75C10.7835 19.5 10 18.7165 10 17.75V11.75Z"
									fill="#212121"
								/>
							</svg>
						</>
					)}
				</div>
				</div>
				
			</div>
		</>
	)
}

export default bonusId
