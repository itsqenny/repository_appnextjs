'use client'

import { BackButton } from "@twa-dev/sdk/react"
import { useRouter } from 'next/navigation'
export const dynamic = 'force-dynamic'
function Back(){
    const router = useRouter()
    const handleBackClick = () => {
        router.push('/', { scroll: true});
    };
    return (
    <>

    <BackButton onClick={handleBackClick} />
    </>
    );
};

export default Back;