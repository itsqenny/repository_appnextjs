"use client"
import Validation from "../UI/getUserId/Validation"
import initData from "../UI/useInitData/initData"
import useWebApp from "../UI/useWebApp/useWebApp"
import PhotoFetcher from "./PhotoFetcher"

export default function Customer() {
	const { user, userId, WebApp } = initData()
	useWebApp()
	//const userId = "204688184"
	//const user = { username: "whokilledravey", first_name: "Евгений" }
	return (
		<>
			<PhotoFetcher userId={userId} user={user} />
		</>
	)
}
