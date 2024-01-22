import BonusIdFetcher from "@/app/bonus/[bonusId]/BonusIdFetcher";

const BonusCard = ({userId}) => {
    return (
        <>
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
        </>
    );
};

export default BonusCard;