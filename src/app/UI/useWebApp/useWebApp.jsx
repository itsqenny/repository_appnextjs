'use client'
import { useEffect } from 'react';

export default function useWebApp() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      let WebApp = window.Telegram.WebApp;
      WebApp.expand();
      WebApp.setHeaderColor('secondary_bg_color');
      WebApp.enableClosingConfirmation();
    }
  }, []);
}
