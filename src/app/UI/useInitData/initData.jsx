'use client'

import { useEffect, useState } from "react";


export default function initData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const initData = () => {
      let WebApp = typeof window !== 'undefined' ? window.Telegram.WebApp : null;
      return {
        WebApp,
        user: WebApp?.initDataUnsafe?.user,
        queryId: WebApp?.initDataUnsafe?.query_id,
        userId: WebApp?.initDataUnsafe?.user.id,
      };
    };

    const result = initData();
    setData(result);

  }, []); 

  // Здесь оставляем вашу исходную структуру возврата данных
  return {
    WebApp: data?.WebApp,
    user: data?.user,
    queryId: data?.queryId,
    userId: data?.userId,
  };
}