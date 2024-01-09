'use client'

import { useEffect, useState } from "react";


export default function Validation({ onUserIdChange }){
    let [userId, setUserId] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const hashParams = new URLSearchParams(window.location.hash.substring(1));
            const initDataString = hashParams.get('tgWebAppData');
            const initData = new URLSearchParams(hashParams.get('tgWebAppData'));
            
            const userMatch = /user=([^&]+)/.exec(initDataString);
              if (userMatch) {
              const userString = userMatch[1];
              const user = JSON.parse(decodeURIComponent(userString));
            
              // Проверяем, что пользователь имеет свойство "id"
              if (user && user.id) {
                const userId = user.id.toString();
                setUserId(userId);
                onUserIdChange(userId);
              }
            }
            
            const headers = new Headers();
              // Преобразуем объект в строку JSON и добавляем в заголовок
              headers.append('Authorization', `twa-init-data ${initDataString}`);
              // Проверяем, если данные инициализации отсутствуют
            if (!initDataString) {
                throw new Error('Unauthorized');
              }
            const requestOptions = {
              method: 'POST',
              headers: headers,
            };
    
            const response = await fetch('https://cdn.zipperconnect.space/validate-initdata', requestOptions);
             setIsAuthenticated(true);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);


    return {
      userId
    }
}