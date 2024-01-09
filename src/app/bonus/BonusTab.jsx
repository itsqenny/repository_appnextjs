
'use client'
import Link from "next/link";
import { useState } from "react";
import Validation from "../UI/getUserId/Validation";

const BonusTab = () => {
    const [userId, setUserId] = useState(""); // Используйте useState для управления userId
    const [userBonus, setUserBonus] = useState(0);

    useEffect(() => {
        const { userId: fetchedUserId } = Validation(); // Получите userId из Validation
        setUserId(fetchedUserId); // Установите userId с помощью useState
    }, []);

    const userIdStringified = JSON.stringify(userId); // Преобразование userId в строку JSON
    return (
        <>
      <div className='action-buttons'>
        <div className='action-card'>
          <Link href={`/bonus/${userIdStringified}`}>
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