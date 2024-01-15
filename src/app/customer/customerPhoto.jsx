"use client"

import { useEffect, useState } from "react"
import initData from "../UI/useInitData/initData"

const CustomerPhoto = ({ userId, data }) => {
	return (
		<>
				<div className="usercard_avatar">
					{!data ? (
						<>
            <div className="skeleton-usercard_avatar_img"></div>
							
						</>
					) : (
						<>
							<img
								src={data.img}
								className="skeleton-usercard_avatar_img"
								alt="User Avatar"
								loading="eager"
							/>
						</>
					)}
				</div>
		</>
	)
}

export default CustomerPhoto
