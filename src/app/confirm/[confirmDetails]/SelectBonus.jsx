'use client'
import {  useState } from "react";
import initData from "@/app/UI/useInitData/initData";

export default function SelectBonus({price, setParentPrice, setParentBonus, data}){
    const { WebApp } = initData();
    const [isCredited, setCredited] = useState(false);
    //const [userBonus, setUserBonus] = useState(data.bonus);


    const handleToggle = () => {
        if (data.bonus > 0) {
          setCredited(!isCredited);
          let calculatedPrice;
    
          if (isCredited) {
            // Устанавливаем price в null при активации "Начислить"
            calculatedPrice = price;
          } else {
            // Вставляем пробел между числами при списании бонусов
            calculatedPrice = price.replace(/[\u00a0₽ ]/g, '').replace(',', '.') - data.bonus;
            calculatedPrice = Math.max(calculatedPrice, 5990);
            calculatedPrice = calculatedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
          }
    
          setParentPrice(calculatedPrice);
          WebApp.HapticFeedback.impactOccurred('medium');
        } else {
          WebApp.HapticFeedback.notificationOccurred('error');
          
        }
      };


    return (
        <>
            <div className="item-toggle-box">
                <div className="item-toggle-box-title">Бонусы Zipperapp</div>
                <div className={`item-switcher-box ${isCredited ? 'credited' : 'debited'}`}
                    onClick={handleToggle}
                    disabled={data.bonus < 0}
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
                    <span className="item-switcher-num">
                        
                        {data.bonus}</span>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};