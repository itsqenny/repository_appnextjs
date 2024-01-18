"use client"

const Subscription = () => {
	return (
		<>
			<div className="profile-data">
				<div
					class="subscription-container"
					style={{ border: "2px solid var(--tg-second)" }}
				>
					<div class="connect-classic">connect</div>
					<p className="connect-free">Бесплатно</p>
                    <ul class="features-list">
						<li class="feature-item">Кэшбэк с покупки (1000 рублей)</li>
						<li class="feature-item">
							Лимит на списание бонусов (до 5990) 
						</li>
					</ul>
				</div>
				<div
					class="subscription-container"
					style={{ border: "2px solid #7969dc", marginTop: "30px" }}
				>
					<div class="connect-plus">connect+</div>
					<p className="connect-plus-price">590 ₽ в месяц </p>
					<ul class="features-list">
						<li class="feature-item">Повышенный кэшбэк (+15%)</li>
						<li class="feature-item">
							Эксклюзивный доступ к новинкам и акциям
						</li>
						<li class="feature-item">Дополнительные предложения и скидки</li>
                        <li class="feature-item">
							Лимит на списание бонусов (до 4990) 
						</li>
					</ul>
                    <button
							className="btn-profile-data-info btn-profile-data"
							
						>
							Приобрести подписку
						</button>
				</div>
				<div class="subscription-container" style={{ marginTop: "30px" }}>
					<div class="connect-pro">connect pro</div>
					<p className="connect-pro-price">990 ₽ в месяц </p>
					<ul class="features-list">
						<li class="feature-item">Повышенный кэшбэк (+25%)</li>
						<li class="feature-item">
							Эксклюзивный доступ к новинкам и акциям
						</li>
						<li class="feature-item">Дополнительные предложения и скидки</li>
						<li class="feature-item">
							Эксклюзивный доступ к новинкам и акциям
						</li>
                        <li class="feature-item">
							Лимит на списание бонусов (до 3990) 
						</li>
					</ul>
                    <button
							className="btn-profile-data-info btn-profile-data"
							
						>
							Приобрести подписку
						</button>
				</div>
			</div>
		</>
	)
}

export default Subscription
