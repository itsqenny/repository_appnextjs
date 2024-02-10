import CopyLink from "../CopyLinkReferral/CopyLink"

const ReferralFriends = ({ userId, isCopied, handleCopyClick }) => {
	return (
		<>
			<div className="link-refer-friends">
				<div className="refer-friend-title">Зови друзей!</div>
				<div className="refer-title">
					Подарим
					<div
						className="refer-friend-title-gradient"
						style={{ fontWeight: "900" }}
					>
						{" "}
						500 бонусов{" "}
					</div>
					каждому!
				</div>
				<div className="history-bonus-box" style={{ padding: "15px" }}>
					<CopyLink
						userId={userId}
						isCopied={isCopied}
						handleCopyClick={handleCopyClick}
					/>
				</div>
			</div>
		</>
	)
}

export default ReferralFriends
