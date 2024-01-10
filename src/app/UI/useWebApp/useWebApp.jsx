'use client'
import { useEffect } from 'react';
export const dynamic = 'force-dynamic';

export default function useWebApp() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let WebApp = window.Telegram.WebApp;
      WebApp?.expand();
      WebApp?.setHeaderColor('secondary_bg_color');
      WebApp?.enableClosingConfirmation();
    }
  }, []);
}
