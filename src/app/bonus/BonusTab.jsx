
'use client'
import Link from "next/link";
import { useState } from "react";
import Validation from "../UI/getUserId/Validation";

const BonusTab = () => {
    const validationData = Validation(); 
    let userId = null;

    try {
        const parsedData = JSON.parse(JSON.stringify(validationData)); // Преобразуйте объект в строку и снова в объект для уверенности
        userId = parsedData.userId; // Извлеките userId
    } catch (error) {
        console.error('Error parsing validation data:', error);
    }

    if (!userId) {
        console.error('Failed to extract userId from validation data');
        return null; // или другой рендеринг по умолчанию или ошибку
    }
    
    
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