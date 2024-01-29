import Link from "next/link"

export default function SubsCardMinus({userId}) {
	return (
		<>
			<hr />
			<div className="warning-bonus-selection">
				<div className="warning-bonus-selection-box">
					<div
						className="warning-bonus-selection-title"
						style={{ fontSize: "15px", letterSpacing: "-0.01em" }}
					>
						Увеличьте лимит списания с
						<div
							className="warning-bonus-status-plus"
							style={{ marginLeft: "4px" }}
						>
							connect+
						</div>
						<div className="warning-bonus-little-title">
							*Без подписки списание доступно до 6990 ₽
						</div>
					</div>
					<Link href={`/customer/${userId}/subscription`}>
						<button
							className="btn-profile-data-info btn-profile-data"
							style={{ marginTop: "8px" }}
						>
							Приобрести подписку
						</button>
					</Link>
				</div>
			</div>
		</>
	)
}
