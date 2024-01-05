'use client'

import Loading from "./loading";
import SearchInput from "./SearchInput";
import Products from "../products/page";
import { useSearchParams } from "next/navigation";

function Search() {
    
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = searchQuery || null;

    console.log('searchParams:', encodedSearchQuery)

  if(!Products){
    return <Loading/>
  }
    return (
        <>
        <SearchInput/>
        <Products searchQuery={searchQuery}/>
        </>
    );
};

export default Search;
