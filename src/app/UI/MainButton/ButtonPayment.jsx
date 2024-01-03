'use client'

import { MainButton } from "@twa-dev/sdk/react"

function ButtonPayment({handlePaymentClick}){
    let textColor, color;
        if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.themeParams) {
        textColor = window.Telegram.WebApp.themeParams.button_text_color;
        color = window.Telegram.WebApp.themeParams.button_color;
        }
    const text = "Перейти к оплате";
    
    return (
        <>
        <MainButton 
        onClick={handlePaymentClick}
        text={text}
        color={color}
        textColor={textColor}
        />
        </>
    );
};

export default ButtonPayment;