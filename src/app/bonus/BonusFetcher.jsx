import useSWR from "swr"
import BonusTab from "./BonusTab"
import Link from "next/link"
const fetcher = (url) => fetch(url).then((res) => res.json())
export const dynamic = "force-dynamic"
export const revalidate = 0
export default function BonusFetcher({ userId }) {
	const { data, error } = useSWR(`/api/customer/bonus/${userId}`, fetcher)

	return (
		<>
			<div className="action-buttons">
				<div className="action-card">
					<Link href={`/bonus/${userId}`}>
						<div className="action-card-QWE13S">
							<div className="action-card-QWE13B"></div>
							<div className="action-card-bg">
								<div className="action-inner">
									{!data && error ? (
										<>
											<div className="action-head">
												<div className="skeleton-action-title"></div>
											</div>
											<div className="action-footer">
												<div className="skeleton-action-poinst-title"></div>

												<div className="skeleton-action-poinst-icon">
													<p></p>
												</div>
											</div>
										</>
									) : (
										<>
											<div className="action-head">
												<div className="action-title">Бонусов</div>
											</div>
											<div className="action-footer">
												<div className="action-poinst-title">₽</div>
												<BonusTab data={data} userId={userId} />
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}
