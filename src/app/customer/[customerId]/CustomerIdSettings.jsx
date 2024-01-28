import useSWR from "swr"
const fetcher = (url) => fetch(url).then((res) => res.json())

export const revalidate = 0
export default function CustomerIdSettings({ userId, form }) {
	const { data, error } = useSWR(
		`/api/customer/settings/?userId=${userId}`,
		fetcher
	)
	console.log(data)

	return (
		<>
			<div className="profile-data-title">Данные доставки</div>
			<div className="profile-data-info">
				<span style={{textAlign:'left'}}>ФИО</span>
				<span style={{textAlign:'right'}}>
					{form?.fullName || data?.userFio || "Не указан"}
				</span>
			</div>
			<div className="profile-data-info">
				<span style={{textAlign:'left'}}>Телефон</span>
				<span style={{textAlign:'right'}}>
					{form?.phone || data?.phoneNumber || "Не указан"}
				</span>
			</div>
			<div className="profile-data-info">
				<span style={{textAlign:'left'}}>Город</span>
				<span style={{textAlign:'right'}}>
					{form?.city || data?.userCity || "Не указан"}
				</span>
			</div>
			<div className="profile-data-info">
				<span style={{textAlign:'left'}}>Адрес доставки</span>
				<span style={{textAlign:'right'}}>
					{form?.address|| data?.userAdress || "Не указан"}
				</span>
			</div>
		</>
	)
}
