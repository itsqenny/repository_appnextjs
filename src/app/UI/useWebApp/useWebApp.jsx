'use client'



export default function useWebApp() {
  let WebApp = typeof window !== 'undefined' ? window.Telegram.WebApp : null;
      WebApp.expand();
      WebApp.setHeaderColor('secondary_bg_color');
      WebApp.enableClosingConfirmation();
}

