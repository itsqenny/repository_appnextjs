'use client'

import Loading from "./loading";
import SearchInput from "./SearchInput";
import Products from "../products/page";
import { useSearchParams } from "next/navigation";
import Back from "../UI/BackButton/BackButton";

function Search({params}) {
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = searchQuery || null;

  if(!Products){
    return <Loading/>
  }
  
    return (
        <>
        <Back/>
        <SearchInput/>
        <Products searchQuery={searchQuery}/>
        </>
    );
};

export default Search;