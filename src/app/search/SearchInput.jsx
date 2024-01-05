'use client'

import Back from "@/app/UI/BackButton/BackButton";
import { useState } from "react";
import { useRouter } from "next/navigation";


const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const onSearch =(event) => {
        event.preventDefault();
        router.push(`?q=${searchQuery}`)
    };
    return (
        <>
        <Back/>
        <form onSubmit={onSearch}>
        <div className="wrapper__form__container">
            <div className="wrapper__form__container_input_">
            <div className="wrapper__form__container_background_"></div>
            <div className="wrapper__form__container_icon_">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-search"
                >
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
                </svg>
            </div>
            <input
                type="text"
                enterKeyHint="search"
                placeholder="Найти"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
            />
            </div>
            </div>
            </form>
            </>
    );
};

export default SearchInput;