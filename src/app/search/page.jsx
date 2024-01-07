'use client'

import Loading from "./loading";
import SearchInput from "./SearchInput";
import Products from "../products/page";
import { useSearchParams } from "next/navigation";
import Back from "../UI/BackButton/BackButton";
import { useState } from "react";

function Search() {
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = searchQuery || null;
    const [Window, setWindow] = useState(null);
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
