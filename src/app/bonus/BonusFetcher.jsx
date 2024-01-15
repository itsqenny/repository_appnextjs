import useSWR from "swr"
import BonusTab from "./BonusTab"
import Link from "next/link"
const fetcher = (url) => fetch(url).then((res) => res.json())
export const dynamic = "force-dynamic"
export const revalidate = 0
export default function BonusFetcher({ userId }) {
	const { data, error } = useSWR(
		`https://crm.zipperconnect.space/customer/bonus/${userId}`,
		fetcher
	)
	if (error) return "An error has occurred."

	return (
		<>
			<div className="action-buttons">
				<div className="action-card">
					<Link href={`/bonus/${userId}`}>
						<div className="action-card-QWE13S">
							<div className="action-card-QWE13B"></div>
							<div className="action-card-bg">
								<div className="action-inner">
									<div className="action-head">
										<div className="action-title">Бонусов</div>
									</div>
									<div className="action-footer">
										<div className="action-poinst-title">₽</div>
										{!data ? (
											<>
											<div className="skeleton-action-poinst-icon">
													<p></p>
												</div>	
											</>
										) : (
											<>
                                            <BonusTab data={data} userId={userId} />
											</>
										)}
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}
