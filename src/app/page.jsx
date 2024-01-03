
import Products from './products/page';
import Header from './customer/page';
import CatalogTab from './components/CatalogTab';
import SearchTab from './search/SearchTab';
import OpenBanner from './banners/open/banner';
import BonusTab from './bonus/BonusTab';
import { useTelegram } from './UI/useTelegram/useTelegram';

export default async function Home(){
    const {tg} = useTelegram();

    return (
        <>
        {tg?.expand()}
            <Header/>
            <SearchTab/>
            <BonusTab/>
            <OpenBanner/>
            <CatalogTab/>
            <Products/>
        </>
    );
};


