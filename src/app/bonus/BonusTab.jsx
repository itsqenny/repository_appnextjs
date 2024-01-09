
'use client'
import Link from "next/link";
import { useState } from "react";
import Validation from "../UI/getUserId/Validation";

const BonusTab = () => {
    const validationData = Validation();  // Получите данные из Validation()
    const userId = validationData.userId; // Извлеките userId из объекта
    if (!userId) {
        console.error('userId is not available');
        return null; // или другое действие, которое вы считаете подходящим
    }
    
    console.log(`bonus userID: ${userId}`);
    const [userBonus, setUserBonus] = useState(0);
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