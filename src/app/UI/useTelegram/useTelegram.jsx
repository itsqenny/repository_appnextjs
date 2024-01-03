export function useTelegram() {
    let tg = null;
  
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      tg = window.Telegram.WebApp;
    }
  
    const onToggleButton = () => {
      if (tg && tg.MainButton && tg.MainButton.isVisible) {
        tg.MainButton.hide();
      } else if (tg) {
        tg.MainButton.show();
        tg.MainButton.setParams({
          text: `Оплатить`
        });
      }
    };
  
    const expand = () => {
      if (tg) {
        tg.expand();
      }
    };
  
    return {
      onToggleButton,
      tg,
      user: tg?.initDataUnsafe?.user,
      expand,
      queryId: tg?.initDataUnsafe?.query_id,
      userId: tg?.initDataUnsafe?.user?.id,
    };
  }