
import Products from './products/page';
import Header from './customer/page';
import CatalogTab from './components/CatalogTab';
import SearchTab from './search/SearchTab';
import OpenBanner from './banners/open/banner';
import BonusTab from './bonus/BonusTab';

export default async function Home(){
    // Проверка наличия объекта window перед его использованием
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.setHeaderColor('secondary_bg_color');
    }

    return (
        <>
            <Header/>
            <SearchTab/>
            <BonusTab/>
            <OpenBanner/>
            <CatalogTab/>
            <Products/>
        </>
    );
};


