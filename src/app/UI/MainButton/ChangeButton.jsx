'use client'

import { MainButton } from "@twa-dev/sdk/react"

function ChangeButton({handleFiltersChange}){
    const text = "Применить фильтр";
    const textColor = Telegram.WebApp.themeParams.button_text_color;
    const color = Telegram.WebApp.themeParams.button_color;
    return (
        <>
        <MainButton 
        onClick={handleFiltersChange}
        text={text}
        color={color}
        textColor={textColor}
        />
        </>
    );
};

export default ChangeButton;