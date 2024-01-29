import Link from "next/link";

export default function SubsCardPlus({userId}) {
    return (
        <>
        <hr />
					<div className="warning-bonus-selection">
						<div className="warning-bonus-selection-box">
							<div
								className="warning-bonus-selection-title"
								style={{ fontSize: "15px", letterSpacing: "-0.01em" }}
							>
								Начислите 300₽ с
								<div
									className="warning-bonus-status-plus"
									style={{ marginLeft: "4px" }}
								>
									connect+
								</div>
								<div className="warning-bonus-little-title">
									*Без подписки начисление доступно до 100 ₽
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
    );
};
