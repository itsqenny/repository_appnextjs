'use client'

import { BackButton } from "@twa-dev/sdk/react"
export const dynamic = 'force-dynamic'
function Back(){
    const handleBackClick = () => {
        window.scrollTo(0, 0);
    };
    return (
    <>

    <BackButton onClick={handleBackClick} />
    </>
    );
};

export default Back;