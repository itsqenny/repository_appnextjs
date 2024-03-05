import Stories from "../page"
export default function StoriesBanner() {
	return (
		<>
			<div className="stories-body" style={{ marginTop: "8px" }}>
				<div className="stories-text">Полезная информация</div>
				<Stories />
			</div>
		</>
	)
}
