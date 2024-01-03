import { MainButton } from "@twa-dev/sdk/react"

function ButtonPayment({generateOrderId}){
    const text = "Перейти к оплате";
    const textColor = window.Telegram.WebApp.themeParams.button_text_color;
    const color = window.Telegram.WebApp.themeParams.button_color;
    return (
        <>
        <MainButton 
        onClick={generateOrderId}
        text={text}
        color={color}
        textColor={textColor}
        />
        </>
    );
};

export default ButtonPayment;