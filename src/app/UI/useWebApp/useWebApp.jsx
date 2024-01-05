'use client'
import { useEffect } from 'react';

export default function useWebApp() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      let WebApp = window.Telegram.WebApp;
      WebApp.expand();
      console.log(WebApp.expand())
    }
  }, []);
}
