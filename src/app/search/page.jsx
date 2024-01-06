'use client'

import Loading from "./loading";
import SearchInput from "./SearchInput";
import Products from "../products/page";
import { useRouter, useSearchParams } from "next/navigation";
import { BackButton } from "@twa-dev/sdk/react";

function Search() {
    const router = useRouter();
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = searchQuery || null;

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
