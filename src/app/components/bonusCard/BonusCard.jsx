import Card from "./Card"
import HistoryBonus from "./HistoryBonus"
const BonusCard = ({ userId }) => {
	return (
		<>
			<div className="refer-friend-section">
				<Card userId={userId} />
				<HistoryBonus userId={userId} />
			</div>
		</>
	)
}

export default BonusCard
