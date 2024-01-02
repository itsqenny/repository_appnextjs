'use client'
import { useState } from "react";

export default function SelectBonus({price, setParentPrice}){
    const [isCredited, setCredited] = useState(false);
    const [userBonus, setUserBonus] = useState(2000);

    const handleToggle = () => {
        if (userBonus > 0) {
          setCredited(!isCredited);
          let calculatedPrice;
    
          if (isCredited) {
            // Устанавливаем price в null при активации "Начислить"
            calculatedPrice = price;
          } else {
            // Вставляем пробел между числами при списании бонусов
            calculatedPrice = price.replace(/[\u00a0₽ ]/g, '').replace(',', '.') - userBonus;
            calculatedPrice = Math.max(calculatedPrice, 5990);
            calculatedPrice = calculatedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
          }
    
          setParentPrice(calculatedPrice);
          console.log('yes');
        } else {
          console.log('error');
        }
      };
    return (
        <>
            <div className="item-toggle-box">
                <div className="item-toggle-box-title">Бонусы Zipperapp</div>
                <div className={`item-switcher-box ${isCredited ? 'credited' : 'debited'}`}
                    onClick={handleToggle}
                    disabled={userBonus < 0}
                >
                <div className={`item-switcher-active ${isCredited ? 'passive' : 'active'}`}>
                    Начислить
                    <div className="item-switcher-point">
                    <span className={`item-switcher-rouble ${isCredited ? 'passive' : 'active'}`}>₽</span>
                    <span className="item-switcher-num">50</span>
                    </div>
                </div>
                <div className={`item-switcher-active ${isCredited ? 'active' : 'passive'}`}>
                    Списать
                    <div className="item-switcher-point">
                    <span className={`item-switcher-rouble ${isCredited ? 'active' : 'passive'}`}>₽</span>
                    <span className="item-switcher-num">{userBonus}</span>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};