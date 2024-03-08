import Link from "next/link"
import CustomerPhoto from "./CustomerImg"
import CustomerRank from "./CustomerRank"

const Header = ({ data, userId, error, user }) => {
	return (
		<>
			<nav className="nav-form">
				<Link href={`/customer/${userId}`}>
					<div className="usercard">
						<div className="usercard_block">
							{error ? (
								<>
									<div className="usercard_avatar">
										<div className="usercard_avatar_logo">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 314 251"
												fill="none"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M34.25 34.0459C3.311 64.7629 0 68.3619 0 71.2859C0 74.1889 2.748 77.2589 26.75 101.159C51.595 125.9 56.173 130.008 58.899 130.008C59.466 130.008 61.521 128.611 63.465 126.904L67 123.801L67.032 185.654C67.057 235.502 67.321 247.848 68.392 249.258C69.639 250.901 75.047 251.008 156.95 251.008H244.179L246.056 248.758C247.846 246.612 247.935 243.685 247.967 185.584L248 124.659L250.25 126.76C251.488 127.915 253.774 129.176 255.33 129.562C257.994 130.224 259.801 128.628 286.08 102.41C311.466 77.0839 314 74.2539 314 71.2279C314 68.1839 311.083 65.0059 279.785 33.9539L245.569 0.00789157H217.32C185.74 0.00789157 187.995 -0.538101 186.55 7.4529C185.573 12.8509 181.754 20.0999 177.806 24.0479C170.838 31.0159 158.373 33.7119 147.601 30.5799C137.855 27.7469 129.476 18.1139 127.548 7.5259C126.08 -0.532103 128.293 0.00588986 96.715 0.0248899L68.5 0.0418882L34.25 34.0459Z"
													style={{ fill: "var(--tg-text)" }}
												/>
											</svg>
										</div>
									</div>
								</>
							) : (
								<>
									<CustomerPhoto userId={userId} data={data} />
								</>
							)}

							<div className="usercard-info">
								<div className="usercard-name">
									<div className="usercard-navigation-name">
										{user?.first_name}
									</div>
									<svg
										className="user_block_svg"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 8 14"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
										/>
									</svg>
								</div>
								<CustomerRank userId={userId} />
							</div>
						</div>
					</div>
				</Link>

				<a
					href="https://t.me/WORLDSTUFFRU"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="btn_block">
						<svg
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z"
								fill="currentColor"
							></path>
							<path
								d="M3.507 10.426c1.174-.642 2.485-1.178 3.71-1.716a194.018 194.018 0 0 1 6.362-2.556c.415-.137 1.162-.272 1.236.34-.04.865-.205 1.726-.319 2.586-.287 1.892-.619 3.778-.943 5.663-.111.629-.905.954-1.412.552-1.22-.818-2.449-1.627-3.653-2.463-.394-.398-.028-.969.324-1.253 1.004-.982 2.07-1.816 3.022-2.85.257-.615-.502-.096-.752.063-1.376.94-2.717 1.938-4.167 2.764-.74.404-1.604.059-2.344-.167-.664-.273-1.637-.547-1.064-.963Z"
								fill="#fff"
							></path>
						</svg>
						<div>
							<div className="btn_block_title" style={{ fontSize: "12px" }}>
								@WORLDSTUFFRU
							</div>
							<div className="btn_block_title">наш тгк</div>
						</div>
					</button>
				</a>
			</nav>
		</>
	)
}

export default Header
