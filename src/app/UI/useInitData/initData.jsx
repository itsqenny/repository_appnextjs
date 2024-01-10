'use client'


export default function initData() {
    let WebApp = typeof window !== 'undefined' ? window.Telegram.WebApp : null;
  return {
    WebApp,
    user: WebApp?.initDataUnsafe?.user,
    queryId: WebApp?.initDataUnsafe?.query_id,
    userId: WebApp?.initDataUnsafe?.user.id,
    HeaderColor: WebApp?.setHeaderColor('secondary_bg_color'),
    Expand: WebApp?.expand(),
    ClosingConfirmation: WebApp.enableClosingConfirmation(),
  };
}