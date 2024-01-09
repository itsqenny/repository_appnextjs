
'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import initData from "../UI/useInitData/initData";
import axios from 'axios';

const BonusTab = () => {
    const { userId } = initData();
    const [userBonus, setUserBonus] = useState(0 || bonus);
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
              setUserBonus(bonus);
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

    return (
        <>
      <div className='action-buttons'>
        <div className='action-card'>
          <Link href={`/bonus/${userId}`}>
            <div className='action-card-QWE13S'>
                <div className='action-card-QWE13B'></div>
                <div className='action-card-bg'>
                    <div className="action-inner">
                        <div className="action-head">
                            <div className="action-title">Бонусов</div>
                        </div>
                        <div className="action-footer">
                            <div className="action-poinst-title">₽</div>
                            <div className="action-poinst-icon">{userBonus}</div>
                        </div>
                    </div>
                </div>
            </div>
           </Link> 
        </div>
      </div>
    </>
    );
};

export default BonusTab;