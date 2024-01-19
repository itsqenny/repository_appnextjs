'use client'

import { BackButton } from "@twa-dev/sdk/react"
export const dynamic = 'force-dynamic'
function Back(){
    const handleBackClick = () => {
        // Отключаем прокрутку вверх при нажатии на кнопку Back
        window.scrollTo(0, 0);

        // Возвращаемся назад в истории
        window.history.back();
    };
    return (
    <>

    <BackButton onClick={handleBackClick} />
    </>
    );
};

export default Back;