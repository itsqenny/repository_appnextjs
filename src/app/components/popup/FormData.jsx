"use client"

import CustomerIdPhoto from "@/app/customer/[customerId]/CustomerIdPhoto"
import Link from "next/link"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

const FormData = ({ isVisible, setIsPopupVisible, userId, user  }) => {
	const { data, error } = useSWR(`/api/customer/photo/${userId}`, fetcher)
    
	return (
		<>
			<div className={`form-container ${isVisible ? "open" : "close"}`}>
				<div className={`form-content ${isVisible ? "open" : "close"}`}>
					<div
						className="form-btn-close"
						onClick={() => setIsPopupVisible(false)}
					>
						<button className="form-btn">
							<svg
								width="30"
								height="30"
								viewBox="0 0 30 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="30" height="30" rx="15" fill="var(--tg-bg)"></rect>
								<path
									d="M9.638 20.377a.834.834 0 0 1-.241-.415 1.046 1.046 0 0 1 0-.49.87.87 0 0 1 .24-.406l4.043-4.05-4.042-4.043a.87.87 0 0 1-.241-.407 1.012 1.012 0 0 1 0-.482.835.835 0 0 1 .24-.423.883.883 0 0 1 .424-.24.947.947 0 0 1 .482.008c.16.038.298.113.415.224L15 13.703l4.043-4.05a.914.914 0 0 1 .888-.224c.16.038.301.116.423.232a.835.835 0 0 1 .24.424c.04.16.04.32 0 .48a.884.884 0 0 1-.24.416l-4.034 4.034 4.034 4.05a.834.834 0 0 1 .24.416 1.01 1.01 0 0 1 0 .481.834.834 0 0 1-.24.415.983.983 0 0 1-.423.241.979.979 0 0 1-.474 0 .862.862 0 0 1-.415-.232L15 16.335l-4.043 4.05a.862.862 0 0 1-.415.233c-.16.039-.32.039-.481 0a.883.883 0 0 1-.423-.24Z"
									fill="var(--tg-text)"
								></path>
							</svg>
						</button>

						<div className="profile-header" style={{ margin:"var(--space-4x)" }}>
							<div className="profile-avatar-box">
								<div className="profile-avatar-transparent">
									<div className="profile-avatar">
										<CustomerIdPhoto
											userId={userId}
											data={data}
											error={error}
										/>
									</div>
									<div className="profile-name">{user?.first_name || 'Пользователь'}</div>
									<footer>{`@${
										user?.username !== undefined ? user?.username : userId
									}`}</footer>
								</div>
							</div>
                            <div className="profile-data-info" style={{margin:'var(--space-4x)'}}>
							<span style={{ textAlign: "left"}}>
								Необходимо заполнить данные доставки чтобы продолжить покупку 
							</span>
						</div>
                        <Link href={`/customer/${userId}/`} style={{width:'100%'}}>
                        <button className="btn-profile-data-info btn-profile-data" style={{marginTop:'0px'}}>
								Заполнить
							</button>
                        </Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FormData
