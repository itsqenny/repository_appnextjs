"use client"

import { MainButton } from "@twa-dev/sdk/react"

function ChangeButton({ handleFiltered, progress }) {
	const text = "Применить фильтр"
	const textColor = Telegram.WebApp.themeParams.button_text_color
	const color = Telegram.WebApp.themeParams.button_color
	return (
		<>
			<MainButton
				onClick={handleFiltered}
				text={text}
				color={color}
				textColor={textColor}
				progress={progress}
			/>
		</>
	)
}

export default ChangeButton
