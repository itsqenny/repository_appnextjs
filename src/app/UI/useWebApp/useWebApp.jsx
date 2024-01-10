'use client'


let WebApp = typeof window !== 'undefined' ? window.Telegram.WebApp : null;

export default function useWebApp() {
      WebApp.expand();
      WebApp.setHeaderColor('secondary_bg_color');
      WebApp.enableClosingConfirmation();
}

