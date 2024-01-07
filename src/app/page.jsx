'use client'

import Products from './products/page';
import Header from './customer/page';
import CatalogTab from './components/CatalogTab';
import SearchTab from './search/SearchTab';
import OpenBanner from './banners/open/banner';
import BonusTab from './bonus/BonusTab';

export default function Home(){
    
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


