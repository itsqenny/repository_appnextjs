
import Products from './products/page';
import Header from './customer/page';
import CatalogTab from './components/CatalogTab';
import SearchTab from './search/searchTab';
import OpenBanner from './banners/open/banner';
import BonusTab from './bonus/BonusTab';

export default async function Home(){
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


