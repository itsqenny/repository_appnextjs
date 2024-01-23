"use client"

import BonusIdFetcher from "@/app/bonus/[bonusId]/BonusIdFetcher"
import CustomerIdRank from "@/app/customer/[customerId]/CustomerIdRank"
import { useState } from "react"
const Card = ({ userId }) => {
    const [subs, setSubs] = useState('')
    const getStyles = () => {
        if (subs?.subscription === "connect+") {
            return {
                backgroundColor: "#7969dc",
                color: "#7969dc",
            };
        } else if (subs?.subscription === "connect pro") {
            return {
                background: "linear-gradient(-45deg, #00c6fb, #005bea)",
                color: "#00c6fb",
            };
        } else {
            return {
                background: "linear-gradient(to left bottom, #cccccc, var(--tg-hint))",
                color: "#868686",
            };
        }
    };

    const styles = getStyles();

    
	return (
		<>
			<div className="refer-friend-box-selection">
				<div className="bonus-card-container"  style={styles}>
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
						<div className="refer-friend-rub"  style={{ color: styles.color }}>₽</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card
