import Card from "./Card"

const BonusCard = ({ userId }) => {
	return (
		<>
			<div className="refer-friend-section">
				<Card userId={userId} />
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
		</>
	)
}

export default BonusCard
