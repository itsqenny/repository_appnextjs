'use client'


export default function initData() {
let WebApp = window.Telegram.WebApp;
  return {
    WebApp,
    user: WebApp.initDataUnsafe?.user,
    queryId: WebApp.initDataUnsafe?.query_id,
    userId: WebApp.initDataUnsafe?.user.id,
  };
}