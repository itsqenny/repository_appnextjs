'use client'

import { BackButton } from "@twa-dev/sdk/react"
import { useRouter } from 'next/navigation'
export const dynamic = 'force-dynamic'
function Back(){
    const handleBackClick = () => {
        router.back();
    };
    return (
    <>

    <BackButton onClick={handleBackClick} />
    </>
    );
};

export default Back;