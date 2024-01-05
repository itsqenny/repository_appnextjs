'use client'
import Back from "@/app/UI/BackButton/BackButton";
import { useState } from "react";


const Bonus = () => {
    const [isCopied, setIsCopied] = useState(false);
    const userId = '123456';
    const handleCopyClick = async () => {
      try {
        await navigator.clipboard.writeText(`https://t.me/zipperstore_bot?start=${userId}`);
        setIsCopied(true);
      } catch (err) {
        console.error('Ошибка при копировании ссылки', err);
      }
    };

   const [userBonus, setUserBonus] = useState(0);

    return (
        <>
        <Back/>
            <div>
                <div className="refer-friend-section">
                <div className="refer-friend-box-selection">
                    <div className="refer-friend-box-radius" style={{ clipPath: "M 490 0 c 18.8562 0 28.2843 0 34.1421 5.8579 a 20 20 0 0 1 0 0 c 5.8579 5.8579 5.8579 15.286 5.8579 34.1421 L 530 85 c 0 18.8562 0 28.2843 -5.8579 34.1421 a 20 20 0 0 1 0 0 c -5.8579 5.8579 -15.286 5.8579 -34.1421 5.8579 L 40 125 c -18.8562 0 -28.2843 0 -34.1421 -5.8579 a 20 20 0 0 1 0 0 c -5.8579 -5.8579 -5.8579 -15.286 -5.8579 -34.1421 L 0 40 c 0 -18.8562 0 -28.2843 5.8579 -34.1421 a 20 20 0 0 1 0 0 c 5.8579 -5.8579 15.286 -5.8579 34.1421 -5.8579 Z" }}>
                    <div className="refer-friend-box">
                        <div className="refer-friend-title-text">
                        <div className="refer-friend-text">{userBonus}</div>
                        <div className="refer-friend-bonus">бонусов</div>
                        </div>
                        <div className="refer-friend-rub">₽</div>
                        
                    </div>
                </div>
                </div>
                    <div className="refer-friend-title">Зови друзей! <br/>
                    Подарим по
                            <div className="refer-friend-title-gradient"> 1000 рублей </div>
                            каждому!
                    </div>
                    <div className="refer-friend-selection-box">
                        <div className="refer-box"><p className="refer-friend-title-gradient"><strong>Бонусы</strong></p> <strong>начислим после того как заказ</strong> пользователя, перешедшего по реферальной ссылке, <strong>был отправлен в Россию.</strong></div>
                        <div className="refer-box"><strong>Акция</strong> действует <strong>до 10 января</strong>. <br />После 10 января вы будете получать <div className="refer-friend-title-gradient"><strong>+500 бонусов</strong></div> за приглашенного друга</div>
                    </div>
                </div>
                <div className="link-refer-friends">
                    <div className="link-refer-friends-title">Твоя ссылка на приглашение</div>
                    <div className="link-refer-friends-linkuser">https://t.me/zipperstore_bot?start={userId}</div>
                    <div
                    className='link-button-copy'
                    onClick={handleCopyClick}
                    >
                {isCopied ? 'Скопировано ✅' : 'Скопировать'} <span className="light"></span>
                </div>
                </div>
            </div>
        </>
    );
};

export default Bonus;