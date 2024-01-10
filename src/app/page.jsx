
import Products from './products/page';
import Header from './customer/page';
import CatalogTab from './components/CatalogTab';
import SearchTab from './components/SearchTab';
import OpenBanner from './banners/open/banner';
import BonusTab from './bonus/BonusTab';

// export const dynamic = 'force-dynamic';

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


