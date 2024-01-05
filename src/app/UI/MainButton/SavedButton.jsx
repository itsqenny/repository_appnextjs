'use client'

import { MainButton } from "@twa-dev/sdk/react"

function ButtonPayment({handleSaveClick}){
    const text = "Сохранить";
    const textColor = Telegram.WebApp.themeParams.button_text_color;
    const color = Telegram.WebApp.themeParams.button_color;
    return (
        <>
        <MainButton 
        onClick={handleSaveClick}
        text={text}
        color={color}
        textColor={textColor}
        />
        </>
    );
};

export default ButtonPayment;