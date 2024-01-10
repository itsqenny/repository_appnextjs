'use client'
import { useEffect } from 'react';
export const dynamic = 'force-dynamic';

export default function useWebApp() {
  useEffect(() => {
    // Проверка, что код выполняется на клиентской стороне
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      const WebApp = window.Telegram.WebApp;
      // Выполнение необходимых действий для WebApp
      WebApp.expand();
      WebApp.setHeaderColor('secondary_bg_color');
      WebApp.enableClosingConfirmation();
    }
  }, []); // Пустой массив зависимостей гарантирует, что useEffect выполнится только при монтировании компонента

  // Возвращаем null или другое значение, которое вы хотите вернуть
  return null;
}
