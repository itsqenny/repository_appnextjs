"use client"

import BonusIdFetcher from "@/app/bonus/[bonusId]/BonusIdFetcher"
import CustomerIdRank from "@/app/customer/[customerId]/CustomerIdRank"
import { useState } from "react"
const Card = ({ userId }) => {
	const [subs, setSubs] = useState("")

	return (
		<>
			<div className="refer-friend-box-selection">
				<div
					className="bonus-card-container"
					style={{ backgroundColor: "#7969dc" }}
				>
					<div className="bonus-card-box">
						<div className="bonus-card-text">Карта</div>
						<div className="bonus-card-title">
							<CustomerIdRank userId={userId} setSubs={setSubs} />
						</div>
					</div>
					<hr style={{ margin: "10px 0 0 0" }} />
					<div className="refer-friend-box">
						<div className="refer-friend-title-text">
							<BonusIdFetcher userId={userId} />
							<div className="refer-friend-bonus">бонусов</div>
						</div>
						<div className="refer-friend-rub" style={{ color: "#7969dc" }}>
							₽
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card
