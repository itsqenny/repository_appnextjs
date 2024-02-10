"use client"
import { useState } from "react"
import Card from "./Card"

const HistoryBonus = ({ userId }) => {
	const [Open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(!Open)
		window.Telegram.WebApp.HapticFeedback.impactOccurred("medium")
	}
	return (
		<>
			<div className="history-bonus-box">
				<div className="history-bonus-title">
					<div className="action-footer" style={{ marginLeft: "auto" }}>
						<div
							className="action-poinst-title"
							style={{
								fontSize: "16px",
								paddingLeft: "1px",
								paddingTop: "1px",
							}}
						>
							₽
						</div>
						<div className="action-poinst-icon">История бонусов</div>
						<div className="history-point" onClick={handleOpen}>
							{Open ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="none"
									stroke="var(--tg-text)"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="tabler-icon tabler-icon-chevron-up"
								>
									<path d="M6 15l6 -6l6 6"></path>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="none"
									stroke="var(--tg-text)"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="tabler-icon tabler-icon-chevron-down"
								>
									<path d="M6 9l6 6l6 -6"></path>
								</svg>
							)}
						</div>
					</div>
				</div>
				{Open ? (
					<>
						<hr style={{ margin: "0px" }} />
						<div className="history-bonus-info">
							<div className="history-bonus-avatar">💎</div>
							<div className="history-bonus-details">
								<div className="history-bonus-points">
									<div className="history-bonus-card-name">Пополнение</div>
									<div className="history-bonus-card-points">+скоро ₽</div>
								</div>
								<div className="history-bonus-data">
									<div className="history-bonus-desc">Добро Пожаловать!</div>
									<div className="history-bonus-card-date">
										12.12.2024, 10:00
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</>
	)
}

export default HistoryBonus
