'use client'
import { useEffect, useState } from "react";
import initData from "../UI/useInitData/initData";
import axios from "axios";

export default function SelectBonus({price, setParentPrice}){
    const { userId } = initData();
    const [isCredited, setCredited] = useState(false);
    const [userBonus, setUserBonus] = useState(0);
    
    useEffect(() => {
      reloadBonus();
      SendData();
    }, [userId]);
  
    const reloadBonus = () => {
      // Извлечение бонуса из Local Storage
      const storedBonus = window.Telegram.WebApp.CloudStorage.getItems(["userBonus"], (err, values) => {
        if (!err && values.userBonus) {
          setUserBonus(values.userBonus);
        } else {
          // Если бонус отсутствует в CloudStorage, выполнить запрос к серверу
          fetchData();
        }
      });
  
      // Слушатель событий для обновления бонуса
      const eventSource = new EventSource(`https://crm.zipperconnect.space/connect/bonus/${userId}`);
      eventSource.onmessage = function (event) {
        const bonus = JSON.parse(event.data);
  
        // Обновление бонуса в Local Storage и состоянии компонента
        window.Telegram.WebApp.CloudStorage.setItem("userBonus", bonus, (err, saved) => {
          if (err) {
            console.error("Error saving bonus to CloudStorage", err);
          } else {
            setUserBonus(bonus); // Обновление состояния userBonus
          }
        });
      };
    };
  
    const fetchData = async () => {
      await axios.post(`https://crm.zipperconnect.space/get/bonus/${userId}`, {
        userId: userId,
      });
    };
  
    const SendData = async () => {
      fetchData();
    };

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